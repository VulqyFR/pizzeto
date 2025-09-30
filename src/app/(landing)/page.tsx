import { Footer } from '@/components/layout/footer/footer';
import { CustomerReview } from './customer-review';
import { Hero } from './hero';
import { OurPizzas } from './our-pizzas';
import { PizzaOfTheMonth } from './pizza-of-the-month';

export default function Home() {
    return (
        <>
            <main className="overflow-hidden relative z-50 w-full flex flex-col items-center justify-between">
                <Hero />
                <OurPizzas />
                <PizzaOfTheMonth />
                <CustomerReview />
                <Footer />
            </main>
        </>
    );
}
