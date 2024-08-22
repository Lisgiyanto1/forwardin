import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '@/config/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email or Password is missing!');
        }

        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          const user = userCredential.user;

          // Fetch additional user data from Firestore
          const userDoc = await getDoc(doc(firestore, 'users', user.uid));
          const userData = userDoc.data();

          if (!userData) {
            throw new Error('User data not found');
          }

          // Return user data including role
          return {
            id: user.uid,
            email: user.email,
            name: userData.name || 'User',
            role: userData.role || 'user', // Include role in returned user object
          };
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
          name: token.name as string,
          role: token.role as string, // Include role in session
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // Cast the user to ensure role is recognized
        const customUser = user as { id: string; name?: string | null; role?: string | null };
    
        token.id = customUser.id;
        token.name = customUser.name;
        token.role = customUser.role; // Add role to JWT token
      }
    
      return token;
    }
    
  },
  secret: process.env.NEXTAUTH_SECRET,
});
