import GoogleSignInButton from '../components/GoogleSignInButton';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">famBam</h1>
        <p className="text-muted-foreground">Log in to start planning together</p>
        <GoogleSignInButton />
      </div>
    </main>
  );
}
