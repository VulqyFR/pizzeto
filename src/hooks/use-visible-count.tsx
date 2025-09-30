'use client';

import { useEffect, useState } from 'react';

export function useVisibleCount() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;

            if (w < 790) setCount(1); // mobile (sm)
            else if (w < 1024) setCount(2); // tablet (md/lg)
            else setCount(3); // desktop (xl+)
        };

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return count;
}
