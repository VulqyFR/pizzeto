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
    title: 'Pizzeto - Commander des pizzas artisanales',
    description:
        'Pizzeto vous propose la commande de pizzas artisanales, livrées rapidement. Découvrez nos recettes originales et profitez d’une expérience utilisateur optimale.',
    authors: [{ name: 'Elvin Chauvel', url: 'https://pizzeto.com' }],
    creator: 'Elvin Chauvel',
    openGraph: {
        title: 'Pizzeto - Commander des pizzas artisanales',
        description:
            'Commandez vos pizzas artisanales préférées chez Pizzeto et profitez d’une livraison rapide.',
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
        title: 'Pizzeto - Commander des pizzas artisanales',
        description:
            'Commandez vos pizzas artisanales préférées chez Pizzeto et profitez d’une livraison rapide.',
        images: ['https://pizzeto.com/og-image.jpg'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                <meta
                    name="description"
                    content="Pizzeto vous propose la commande de pizzas artisanales, livrées rapidement. Découvrez nos recettes originales et profitez d’une expérience utilisateur optimale."
                />
            </head>
            <body
                className={`${poppins.variable} ${rubikSprayPaint.variable} antialiased relative min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
