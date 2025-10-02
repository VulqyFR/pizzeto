import { Footer } from '@/components/layout/footer/footer';
import { Navbar } from '@/components/layout/navbar/navbar';
import { TopRightDecoration } from '@/components/layout/top-right-decoration';
import { CustomerReview } from './customer-review';
import { Hero } from './hero';
import { OurPizzas } from './our-pizzas';
import { PizzaOfTheMonth } from './pizza-of-the-month';

export default function Home() {
    return (
        <>
            <Navbar />
            <TopRightDecoration />
            <main className="overflow-hidden relative z-40 w-full flex flex-col items-center justify-between">
                <Hero />
                <OurPizzas />
                <PizzaOfTheMonth />
                <CustomerReview />
                <Footer background="foreground" />
            </main>
        </>
    );
}
