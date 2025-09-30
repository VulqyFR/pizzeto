'use client';

import { useVisibleCount } from '@/hooks/use-visible-count';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReactNode, useEffect, useMemo, useState } from 'react';

type CarouselProps<T> = {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    itemKey?: (item: T, index: number) => string | number;
    className?: string;
};

export function Carousel<T>({
    items,
    renderItem,
    itemKey,
    className,
}: CarouselProps<T>) {
    const visibleCount = useVisibleCount();
    const [startIndex, setStartIndex] = useState(0);

    const maxStart = Math.max(0, items.length - visibleCount);
    const clampedStart = Math.min(startIndex, maxStart);

    useEffect(() => {
        setStartIndex((prev) =>
            Math.min(prev, Math.max(0, items.length - visibleCount))
        );
    }, [visibleCount, items.length]);

    const canPrev = clampedStart > 0;
    const canNext = clampedStart < maxStart;

    const visibleItems = useMemo(
        () => items.slice(clampedStart, clampedStart + visibleCount),
        [items, clampedStart, visibleCount]
    );

    const handlePrev = () => {
        if (!canPrev) return;
        setStartIndex((prev) => Math.max(0, prev - visibleCount));
    };

    const handleNext = () => {
        if (!canNext) return;
        setStartIndex((prev) => Math.min(maxStart, prev + visibleCount));
    };

    if (items.length === 0) {
        return (
            <div className={`w-full ${className ?? ''}`}>
                <p className="text-center text-muted-foreground text-sm">
                    Aucun élément à afficher.
                </p>
            </div>
        );
    }

    return (
        <div className={`relative w-full ${className ?? ''}`}>
            <button
                onClick={handlePrev}
                type="button"
                aria-label="Précédent"
                disabled={!canPrev}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-muted-foreground/20 bg-background p-2 shadow transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>

            <button
                onClick={handleNext}
                type="button"
                aria-label="Suivant"
                disabled={!canNext}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-muted-foreground/20 bg-background p-2 shadow transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
            >
                <ChevronRight className="h-5 w-5" />
            </button>

            <div
                className="grid w-full gap-6 px-6 md:px-10"
                style={{
                    gridTemplateColumns: `repeat(${
                        visibleItems.length || 1
                    }, minmax(0, 1fr))`,
                }}
            >
                <div className="col-span-full mx-auto grid w-full max-w-6xl gap-6 place-items-center md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
                    {visibleItems.map((item, idx) => (
                        <div
                            key={
                                itemKey?.(item, clampedStart + idx) ??
                                clampedStart + idx
                            }
                        >
                            {renderItem(item, clampedStart + idx)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
