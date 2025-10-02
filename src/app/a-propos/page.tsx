import { Footer } from '@/components/layout/footer/footer';
import { Navbar } from '@/components/layout/navbar/navbar';
import { TopRightDecoration } from '@/components/layout/top-right-decoration';
import { Hero } from './hero';
import { OpeningHours } from './opening-hours';
import { PaymentMethod } from './payment-method';

export const metadata = {
    title: 'Pizzeto - À propos de nous',
    description:
        'Découvrez l’histoire, les valeurs et l’équipe derrière Pizzeto, votre pizzeria artisanale.',
    keywords: [
        'pizzeto',
        'à propos',
        'histoire',
        'équipe',
        'valeurs',
        'artisanat',
        'pizzeria',
    ],
};

export default function About() {
    return (
        <>
            <TopRightDecoration />
            <Navbar />
            <main className="overflow-hidden relative z-40 w-full flex flex-col items-center justify-between min-h-screen">
                <Hero />
                <OpeningHours />
                <PaymentMethod />
                <Footer background="secondary" />
            </main>
        </>
    );
}
