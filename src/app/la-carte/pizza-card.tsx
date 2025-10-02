import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import pizzas from '@/data/pizzas.json';
import { cn } from '@/lib/cn';
import { PhoneCall } from 'lucide-react';
import Image from 'next/image';

type Pizza = (typeof pizzas)[number];

export const PizzaCard = ({ pizza }: { pizza: Pizza }) => {
    return (
        <div className="relative flex flex-col items-center">
            <Dialog>
                <DialogTrigger className="absolute -top-10 right-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-md">
                    <span className="rotate-180 text-background text-bold">
                        !
                    </span>
                </DialogTrigger>
                <DialogPortal>
                    <DialogContent className="p-0 max-w-xs">
                        <DialogClose />
                        <DialogHeader className="flex flex-col items-center p-6 pb-0">
                            <Image
                                src={pizza.image}
                                alt={pizza.name}
                                width={160}
                                height={160}
                                className="rounded-full mb-4"
                            />
                            <DialogTitle className="text-2xl font-bold mb-2 text-center">
                                {pizza.name}
                            </DialogTitle>
                            <div className="mb-2 text-lg text-primary font-semibold">
                                {pizza.price}€
                            </div>
                        </DialogHeader>
                        <DialogDescription className="mb-2 text-sm text-muted-foreground text-center">
                            <span className="font-semibold">Ingrédients :</span>{' '}
                            {pizza.ingredients?.join(', ')}
                        </DialogDescription>
                        <DialogDescription className="mb-2 text-xs text-muted-foreground text-center">
                            <span className="font-semibold">Taille :</span>{' '}
                            {pizza.taille} |{' '}
                            <span className="font-semibold">Calories :</span>{' '}
                            {pizza.calories} |{' '}
                            <span className="font-semibold">Vegan :</span>{' '}
                            {pizza.vegan ? 'Oui' : 'Non'}
                        </DialogDescription>
                        <DialogDescription className="mb-4 text-xs text-muted-foreground text-center">
                            {pizza.description}
                        </DialogDescription>
                        <DialogFooter className="flex gap-4 items-center justify-center">
                            <PhoneCall className="text-primary" />
                            <span className={cn('text-foreground')}>
                                06.00.00.00.00
                            </span>
                        </DialogFooter>
                    </DialogContent>
                </DialogPortal>
            </Dialog>
            <div className="bg-card p-4 rounded-full shadow-md w-fit">
                <Image
                    src={pizza.image}
                    alt={pizza.name}
                    width={200}
                    height={200}
                    className="rounded-full"
                />
            </div>
            <h3 className="text-2xl font-bold mt-4 text-center">
                Pizza <span className="text-primary">{pizza.name} </span>-{' '}
                {pizza.price}€
            </h3>
        </div>
    );
};
