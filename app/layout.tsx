import { Sidebar } from '@/components/SideBard';
import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { SupabaseProvider } from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/userProvider';
import { ModalProvider } from '@/providers/ModalProvidar';
import { ToasterProvider } from '@/providers/TosterProvider';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Spotify clone',
    description: 'App listen music',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={font.className}>
                <ToasterProvider />
                <SupabaseProvider>
                    <UserProvider>
                        <ModalProvider />
                        <Sidebar>{children}</Sidebar>
                    </UserProvider>
                </SupabaseProvider>
            </body>
        </html>
    );
}
