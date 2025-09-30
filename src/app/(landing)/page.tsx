import { Hero } from './hero';
import { OurPizzas } from './our-pizzas';

export default function Home() {
    return (
        <>
            <main className="overflow-hidden relative z-50 w-full flex flex-col items-center justify-between">
                <Hero />
                <OurPizzas />
            </main>
        </>
    );
}
