import { Footer } from '@/components/layout/footer/footer';
import { Navbar } from '@/components/layout/navbar/navbar';
import pizzas from '@/data/pizzas.json';
import { PizzaCard } from './pizza-card';

export default function RestaurentMenu() {
    return (
        <div className="bg-background ">
            <Navbar variant="primary" />
            <main className="overflow-hidden relative z-40 w-full flex flex-col items-center min-h-screen">
                <section className="w-full mb-36 py-32 xl:py-20 px-72 max-3xl:px-64 max-2xl:px-48 max-xl:px-48 max-lg:px-24 max-md:px-12 max-sm:px-6">
                    <div className="relative flex items-center justify-between">
                        <div className="mb-24 flex flex-col gap-4 flex-1 items-start relative z-10 px-4">
                            <div className="flex gap-4">
                                <span className="underline">Pizza</span>
                                <span
                                    className="text-muted-foreground/50"
                                    aria-disabled
                                >
                                    Boissons
                                </span>
                                <span
                                    className="text-muted-foreground/50"
                                    aria-disabled
                                >
                                    Desserts
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-x-4 gap-y-16">
                        {pizzas.map((pizza) => (
                            <PizzaCard key={pizza.id} pizza={pizza} />
                        ))}
                    </div>
                </section>
                <Footer background="default" variant="primary" />
            </main>
        </div>
    );
}
