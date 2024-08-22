import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {session?.user?.name}</h1>
      {session?.user?.role === 'admin' ? (
        <p>You are an admin.</p>
      ) : (
        <p>You are a user.</p>
      )}
    </div>
  );
}
