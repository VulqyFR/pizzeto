import { Navbar } from '@/components/layout/navbar/navbar';
import type { Metadata } from 'next';
import { Poppins, Rubik_Spray_Paint } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

const rubikSprayPaint = Rubik_Spray_Paint({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-rubik-spray',
});

export const metadata: Metadata = {
    title: 'Pizzeto - Commande de pizzas artisanales en ligne',
    description:
        'Pizzeto vous propose la commande de pizzas artisanales, personnalisables et livrées rapidement. Découvrez nos recettes originales et profitez d’une expérience utilisateur optimale.',
    keywords: [
        'pizza',
        'commande pizza',
        'pizzas artisanales',
        'livraison pizza',
        'recettes pizza',
        'Pizzeto',
        'pizza en ligne',
        'pizzeria',
    ],
    authors: [{ name: 'Pizzeto', url: 'https://pizzeto.com' }],
    creator: 'Pizzeto',
    openGraph: {
        title: 'Pizzeto - Commande de pizzas artisanales en ligne',
        description:
            'Commandez vos pizzas artisanales préférées sur Pizzeto et profitez d’une livraison rapide.',
        url: 'https://pizzeto.com',
        siteName: 'Pizzeto',
        images: [
            {
                url: 'https://pizzeto.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Pizzeto - Pizza artisanale',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pizzeto - Commande de pizzas artisanales en ligne',
        description:
            'Commandez vos pizzas artisanales préférées sur Pizzeto et profitez d’une livraison rapide.',
        images: ['https://pizzeto.com/og-image.jpg'],
    },
    themeColor: '#ff5722',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body
                className={`${poppins.variable} ${rubikSprayPaint.variable} antialiased relative min-h-screen overflow-hidden`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
