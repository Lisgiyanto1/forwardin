import { useState, FormEvent } from 'react';
import { auth, firestore } from '@/config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { CheckCircle, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/router';

interface SignUpProps {
    isInSignInPage?: boolean;
}

export default function SignUp({ isInSignInPage = false }: SignUpProps) {
    const route = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [whatsapp, setWhatsapp] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [role, setRole] = useState<string>('user'); // Default role is 'user'
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [whatsappError, setWhatsappError] = useState<string | null>(null);
    const [countryCode, setCountryCode] = useState("+62"); // Default Indonesia

    const [showAlert, setShowAlert] = useState(false);

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountryCode(e.target.value);
    };

    const validatePassword = (password: string) => {
        const errors: string[] = [];
        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);
        const requirementsMet = [hasLowerCase, hasUpperCase, hasDigit, hasSpecialChar].filter(Boolean).length;
        if (requirementsMet < 3) {
            errors.push('Password must include at least 3 of the following: lowercase letters, uppercase letters, numbers, special characters.');
        }
        setPasswordErrors(errors);
    };

    const validateWhatsapp = (whatsapp: string) => {
        if (!formattedWhatsapp.startsWith('+62')) {
            setWhatsappError('WhatsApp number must start with +62.');
            return false;
        }
        const number = whatsapp.slice(3);
        if (!/^\d+$/.test(number)) {
            setWhatsappError('WhatsApp number can only contain digits.');
            return false;
        }
        setWhatsappError(null);
        return true;
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setPassword(password);
        validatePassword(password);
    };

    const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userInput = e.target.value.replace(countryCode, '');
        setWhatsapp(userInput);
        validateWhatsapp(userInput);
    };

    
    const formattedWhatsapp = countryCode + whatsapp;
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const isPasswordValid = passwordErrors.length === 0;
        const isWhatsappValid = validateWhatsapp(countryCode+whatsapp);
        if (isPasswordValid && isWhatsappValid) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const uid = userCredential.user.uid;

                await setDoc(doc(firestore, 'users', uid), {
                    email,
                    whatsapp,
                    name,
                    role: 'user',
                    createdAt: new Date().toISOString(),
                    status: 'active'
                });

                setShowAlert(true);

                setTimeout(() => {
                    setShowAlert(false);
                    route.push('/signin')
                }, 3000);

                
            } catch (error) {
                setError('Error signing up. Please try again.');
                console.error('Error signing up:', error);
            }
        }

    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
            <h1 className='font-extrabold text-center text-2xl'>Welcome To Forwardin</h1>
            {isInSignInPage &&
                <p className="text-center text-gray-600 font-semibold">Revolutionize your communication journey with Fowardin today</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            />
            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 focus:outline-none"
                >
                    {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                    ) : (
                        <Eye className="w-5 h-5" />
                    )}
                </button>
            </div>
            {passwordErrors.length > 0 && (
                <ul className="text-red-500 text-sm space-y-1 bg-red-200 py-2 px-4 rounded-xl list-disc list-inside">
                    {passwordErrors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            )}

            <div className="relative flex items-center space-x-2 mb-4">

                <select
                    className="px-3 py-2 border font-bold border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-500"
              
                    value={countryCode}

                    onChange={handleCountryChange}
                >
                    <option value="+62" className='font-bold'>🇮🇩 +62</option>
                    <option value="+1" className='font-bold'>🇺🇸 +1</option>
                    <option value="+91" className='font-bold'>🇮🇳 +91</option>
                    <option value="+44" className='font-bold'>🇬🇧 +44</option>

                </select>

                <input
                    type="text"
                    placeholder="WhatsApp Number"
                    value={formattedWhatsapp}
                    onChange={handleWhatsappChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring focus:ring-blue-500 focus:outline-none"
                />
            </div>

            {whatsappError && <p className="text-red-500 text-sm bg-red-200 py-1 px-2 rounded-lg">{whatsappError}</p>}
            <input
                type="text"
                placeholder="Name (Optional)"
                value={name}
                onChange={handleNameChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            />
            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            >
                <option value="user" className="bg-white rounded-lg focus:outline-none hover:bg-gray-100">User</option>
                <option value="admin" className="bg-white rounded-lg focus:outline-none hover:bg-gray-100">Admin</option>
            </select>
            <button
                type="submit"
                disabled={passwordErrors.length > 0 || whatsappError !== null}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
                Sign Up
            </button>
            {showAlert && (
                <div className="fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-lg flex items-center space-x-2">
                    <CheckCircle size={24} className="text-green-500" />
                    <span>Sign up successful!</span>
                </div>
            )}
            {error && <p className="text-red-500 text-sm text-center bg-red-200 py-1 px-2 rounded-lg">{error}</p>}
        </form>
    );
}
