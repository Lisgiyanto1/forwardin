import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';

interface ForgotProps {
    isInForgotPage?: boolean;
}

export default function ForgotPassword({ isInForgotPage = false }: ForgotProps) {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent successfully. Please check your inbox.');
        } catch (error) {
            setError('Failed to send password reset email. Please check your email and try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-center text-2xl font-bold text-gray-700 mb-4">Forgot Password</h1>
            {isInForgotPage && <p className="text-center text-gray-600 mb-4">Please type your active email</p>}
            <form onSubmit={handleResetPassword} className="space-y-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
                >
                    Send Reset Email
                </button>
            </form>

            {message && <p className="text-green-500 text-center mt-4">{message}</p>}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
    );
}
