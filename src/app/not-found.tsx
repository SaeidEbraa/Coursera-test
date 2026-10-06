import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-ink pt-20">
        <div className="container-content text-center">
          <div className="mx-auto mb-6 h-px w-12 bg-gold" />
          <h1 className="font-heading text-6xl font-bold text-white md:text-7xl">404</h1>
          <p className="mt-4 text-lg text-white/50">This page could not be found.</p>
          <Link href="/" className="btn-primary mt-8">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
