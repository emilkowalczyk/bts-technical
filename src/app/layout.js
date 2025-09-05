import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Building Technical Service',
  description: 'Dbamy o bezpieczeństwo, sprawność i komfort Twojej nieruchomości',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${openSans.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
