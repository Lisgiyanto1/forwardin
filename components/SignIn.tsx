import { getSession, signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

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
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign In</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}
