import { Eye, EyeOff } from 'lucide-react';
import { getSession, signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
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

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setPassword(password);
        validatePassword(password);
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                switch (result.error) {
                    case 'CredentialsSignin':
                        setError('Incorrect email or password.');
                        break;
                    case 'No user found':
                        setError('No account found with this email.');
                        break;
                    case 'User disabled':
                        setError('This account has been disabled.');
                        break;
                    default:
                        setError('Failed to sign in. Please try again.');
                        break;
                }
            } else {
                const session = await getSession();
                if (session?.user.role === 'admin') {
                    window.location.href = '/admin/home';
                } else {
                    window.location.href = '/dashboard/home';
                }
            }
        } catch (err) {
            console.error('Error signing in:', err);
            setError('Error signing in. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-3/4 mx-auto bg-white lg:bg-white p-6 rounded-lg lg:shadow-md space-y-4">
            <h2 className="text-center text-2xl font-bold text-gray-700">Welcom Back</h2>
            <p className="text-center text-gray-600 font-semibold">We`re so excited to see you again</p>
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
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
                Sign In
            </button>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
    );
}
