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
        <div>
            <h1>Forgot Password</h1>
            {isInForgotPage && <p>Please Type your active email</p>}
            <form onSubmit={handleResetPassword}>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Email</button>
            </form>

            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
