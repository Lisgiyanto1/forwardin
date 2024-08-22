import { useState } from 'react';
import { auth } from '@/config//firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const useFirebaseAuth = () => {
    const [error, setError] = useState<string | null>(null);

    const handleSignUp = async (email: string, password: string) => {
        setError(null);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error: unknown) {
            if (error instanceof Error) {
                switch (error.message) {
                    case 'auth/email-already-in-use':
                        setError('This email is already in use.');
                        break;
                    case 'auth/invalid-email':
                        setError('The email address is not valid.');
                        break;
                    case 'auth/weak-password':
                        setError('Password should be at least 6 characters.');
                        break;
                    default:
                        setError('An unexpected error occurred.');
                        break;
                }
            } else {
                setError('An unknown error occurred.');
            }
            return false;
        }
    };

    const handleSignIn = async (email: string, password: string) => {
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error: unknown) {
            if (error instanceof Error) {
                switch (error.message) {
                    case 'auth/wrong-password':
                        setError('Incorrect password.');
                        break;
                    case 'auth/user-not-found':
                        setError('No user found with this email.');
                        break;
                    case 'auth/invalid-email':
                        setError('Invalid email address.');
                        break;
                    default:
                        setError('An unexpected error occurred.');
                        break;
                }
            } else {
                setError('An unknown error occurred.');
            }
            return false;
        }
    };

    return {
        handleSignUp,
        handleSignIn,
        error,
    };
};
