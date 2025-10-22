import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/lib/auth-context';
import Navbar from '@/app/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mawego Engineering Polytechnic',
  description: 'A web application for Mawego Engineering Polytechnic.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <AuthProvider>
          <Navbar />
          <main className="container mx-auto p-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
