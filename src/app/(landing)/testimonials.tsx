'use client';

import { Quote, Star } from 'lucide-react';

type Testimonial = {
    id: number;
    name: string;
    handle: string;
    rating: number;
    comment: string;
    avatar: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sophie Martin',
        handle: '@sophiem',
        rating: 5,
        comment:
            "Service exceptionnel ! Je recommande vivement. L'équipe est très...",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    },
    {
        id: 2,
        name: 'Thomas Dubois',
        handle: '@thomasd',
        rating: 5,
        comment: 'Très satisfait de mon expérience. Rapide et efficace.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas',
    },
    {
        id: 3,
        name: 'Marie Laurent',
        handle: '@mariel',
        rating: 4,
        comment:
            "Excellente qualité de service. Le support client est réactif et à l'écoute.",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie',
    },
    {
        id: 4,
        name: 'Lucas Bernard',
        handle: '@lucasb',
        rating: 5,
        comment:
            'Dépassé mes attentes ! Une expérience client remarquable du début à la fin.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas',
    },
    {
        id: 5,
        name: 'Emma Petit',
        handle: '@emmap',
        rating: 5,
        comment:
            'Parfait en tous points. Je ne peux que recommander les yeux fermés !',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    },
    {
        id: 6,
        name: 'Alexandre Roux',
        handle: '@alexr',
        rating: 4,
        comment:
            'Très bonne expérience globale. Service de qualité et résultats au rendez-vous.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandre',
    },
];

type StarRatingProps = {
    rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
    return (
        <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-5 h-5 ${
                        i < rating
                            ? 'fill-background text-background'
                            : 'text-foreground'
                    }`}
                />
            ))}
        </div>
    );
};

type TestimonialCardProps = {
    testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <div className="inline-block mx-4 w-96 flex-shrink-0">
            <div className="bg-[#f1ece5] p-6 h-full border rounded-3xl">
                <div className="flex justify-between gap-4 items-center mb-4">
                    <StarRating rating={testimonial.rating} />
                    <Quote className="w-6 h-6 text-background -mt-1" />
                </div>
                <p className="text-background mb-6 text-left break-words whitespace-pre-line">
                    "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-background">
                            {testimonial.name}
                        </p>
                        <p className="text-sm text-background/90 text-left">
                            {testimonial.handle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function TestimonialMarquee() {
    return (
        <div className="py-16 px-4">
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap w-max">
                    {[...testimonials, ...testimonials, ...testimonials].map(
                        (testimonial, idx) => (
                            <TestimonialCard
                                key={`${testimonial.id}-${idx}`}
                                testimonial={testimonial}
                            />
                        )
                    )}
                </div>

                <style jsx>{`
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-33.333%);
                        }
                    }

                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                    }

                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>
        </div>
    );
}
