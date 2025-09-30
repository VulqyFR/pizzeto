'use client';

export const Banner = () => {
    const bannerText = 'Livraison gratuite à domicile';

    return (
        <div className="absolute left-1/2 max-xl:mt-16 -translate-x-1/2 -translate-y-6 w-[120vw] bg-foreground py-8 rotate-3 px-20 sm:px-32">
            <div className="relative">
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="inline-block animate-marquee">
                        {[...Array(3)].map((_, i) => (
                            <span
                                key={i}
                                className="inline-block text-background font-bold text-3xl tracking-wide"
                            >
                                {bannerText}{' '}
                                <span className="px-4 text-primary">-</span>
                            </span>
                        ))}
                    </div>
                    <div className="inline-block animate-marquee">
                        {[...Array(3)].map((_, i) => (
                            <span
                                key={i}
                                className="inline-block text-background font-bold text-3xl tracking-wide"
                            >
                                {bannerText}{' '}
                                <span className="px-4 text-primary">-</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </div>
    );
};
