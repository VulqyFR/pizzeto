'use client';

import { SearchBar } from '@/components/ui/searchbar';
import pizzasData from '@/data/pizzas.json';
import { useRouter } from 'next/navigation';

interface Pizza {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    image: string;
}

export const NavSearchBar = () => {
    const router = useRouter();
    const pizzas = pizzasData as Pizza[];

    return (
        <SearchBar
            className="z-[100]"
            items={pizzas}
            getItemKey={(pizza) => pizza.id}
            getItemLabel={(pizza) => pizza.name}
            getSearchValue={(pizza) => pizza.name}
            onSelect={(pizza) => router.push(`/nos-pizzas?q=${pizza.slug}`)}
            placeholder="Rechercher une pizza..."
        />
    );
};
