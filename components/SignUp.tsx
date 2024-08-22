import { useState, FormEvent } from 'react';
import { auth, firestore } from '@/config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

interface SignUpProps {
    isInSignInPage?: boolean;
}

export default function SignUp({ isInSignInPage = false }: SignUpProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [whatsapp, setWhatsapp] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [role, setRole] = useState<string>('user'); // Default role is 'user'
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [whatsappError, setWhatsappError] = useState<string | null>(null);

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
        if (!whatsapp.startsWith('+62')) {
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
        const whatsapp = e.target.value;
        setWhatsapp(whatsapp);
        validateWhatsapp(whatsapp);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const isPasswordValid = passwordErrors.length === 0;
        const isWhatsappValid = validateWhatsapp(whatsapp);
        if (isPasswordValid && isWhatsappValid) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const uid = userCredential.user.uid;


                await setDoc(doc(firestore, 'users', uid), {
                    email,
                    whatsapp,
                    name,
                    role: 'admin', // atau 'user'
                    createdAt: new Date().toISOString(),
                    status: 'active'
                  });
                  
                  
                alert('Sign up successful!');
            } catch (error) {
                setError('Error signing up. Please try again.');
                console.error('Error signing up:', error);
            }
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            {isInSignInPage && <p>You are on the Sign In page</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <div style={{ position: 'relative' }}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#0070f3',
                    }}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            {passwordErrors.length > 0 && (
                <ul style={{ color: 'red', listStyleType: 'none', paddingLeft: 0 }}>
                    {passwordErrors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            )}
            <input
                type="text"
                placeholder="WhatsApp Number (+62...)"
                value={whatsapp}
                onChange={handleWhatsappChange}
                required
            />
            {whatsappError && <p style={{ color: 'red' }}>{whatsappError}</p>}
            <input
                type="text"
                placeholder="Name (Optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {/* Dropdown for Role */}
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>

            <button type="submit" disabled={passwordErrors.length > 0 || whatsappError !== null}>Sign Up</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}
