'use client';

import { Carousel } from '@/components/ui/carousel';
import pizzasData from '@/data/pizzas.json';
import { PizzaCardItem } from './pizza-card';

type Pizza = (typeof pizzasData)[number];

export function PizzaCarousel() {
    return (
        <Carousel<Pizza>
            className="py-12"
            items={pizzasData}
            itemKey={(pizza) => pizza.id}
            renderItem={(pizza) => <PizzaCardItem pizza={pizza} />}
        />
    );
}
