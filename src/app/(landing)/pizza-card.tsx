'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import pizzaData from '@/data/pizzas.json';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Pizza = (typeof pizzaData)[number];

interface PizzaCardProps {
    pizzas: Pizza[];
}

interface PizzaCardItemProps {
    pizza: Pizza;
}

export const PizzaCardItem = ({ pizza }: PizzaCardItemProps) => (
    <Card className="bg-background text-foreground w-fit relative rounded-2xl max-xl:my-6 min-w-64 xl:min-h-80 xl:min-w-80">
        <div className="min-h-56  xl:min-h-72"></div>
        <CardHeader className="absolute -top-12 left-1/2 -translate-x-1/2 w-56 xl:w-72 xl:h-72 rounded-full bg-[#f1ece5] flex items-center justify-center p-4 shadow-lg">
            <Image
                src={pizza.image}
                alt="Pizza"
                width={300}
                height={300}
                draggable={false}
                className="object-contain md:object-right select-none"
            />
        </CardHeader>
        <CardContent className="relative flex items-center justify-center px-6 py-4 mb-4">
            <h2 className="-ml-2 w-fit font-normal relative text-2xl leading-none tracking-tight">
                <Link href={`/menu/${pizza.slug}`}>
                    Pizza <span className="text-primary">{pizza.name}</span>
                    <span className="absolute -right-6 top-1/2 -translate-y-1/2 flex items-center">
                        <ChevronRight />
                    </span>
                </Link>
            </h2>
        </CardContent>
    </Card>
);

export const PizzaCard = ({ pizzas }: PizzaCardProps) => (
    <>
        {pizzas.map((pizza: Pizza) => (
            <PizzaCardItem key={pizza.id} pizza={pizza} />
        ))}
    </>
);
