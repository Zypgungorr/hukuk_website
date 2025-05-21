import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </main>
    </>
  );
}
