import TestimonialMarquee from './testimonials';

export const CustomerReview = () => {
    return (
        <div className="bg-foreground w-full pt-32 pb-48 flex flex-col items-center gap-16 px-12">
            <div className="relative">
                <h2 className="[@media(max-width:470px)]:text-4xl sm:text-5xl text-6xl xl:text-7xl text-center font-rubik-spray mb-8 text-primary">
                    Avis clients
                </h2>
                <div className="absolute -right-12 top-20 [@media(max-width:470px)]:top-12 transform -translate-y-1/2">
                    <svg
                        width="239"
                        height="56"
                        viewBox="0 0 239 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 35.2792C14.8292 40.3419 47.7181 48.2928 66.4029 50.8411C101.589 55.6401 153.733 51.7246 175.42 46.0672C204.59 34.1749 220.989 24.5591 232.191 16.3704C236 12.1061 236 7.62102 236 3"
                            stroke="#EABD09"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
            <div className="space-y-2 text-center">
                <svg
                    width="250"
                    height="50"
                    viewBox="0 0 250 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M25 0L30.6129 17.2746H48.7764L34.0818 27.9508L39.6946 45.2254L25 34.5491L10.3054 45.2254L15.9182 27.9508L1.22359 17.2746H19.3871L25 0Z"
                        fill="#EABD09"
                    />
                    <path
                        d="M75 0L80.6129 17.2746H98.7764L84.0818 27.9508L89.6946 45.2254L75 34.5491L60.3054 45.2254L65.9182 27.9508L51.2236 17.2746H69.3871L75 0Z"
                        fill="#EABD09"
                    />
                    <path
                        d="M125 0L130.613 17.2746H148.776L134.082 27.9508L139.695 45.2254L125 34.5491L110.305 45.2254L115.918 27.9508L101.224 17.2746H119.387L125 0Z"
                        fill="#EABD09"
                    />
                    <path
                        d="M175 0L180.613 17.2746H198.776L184.082 27.9508L189.695 45.2254L175 34.5491L160.305 45.2254L165.918 27.9508L151.224 17.2746H169.387L175 0Z"
                        fill="#EABD09"
                    />
                    <path
                        d="M225 0L230.613 17.2746H248.776L234.082 27.9508L239.695 45.2254L225 34.5491L210.305 45.2254L215.918 27.9508L201.224 17.2746H219.387L225 0Z"
                        fill="#EABD09"
                    />
                    <path
                        d="M230.5 17H249.5L234 28L230.5 22V17Z"
                        fill="#E8E3D9"
                    />
                    <path
                        d="M230.5 22L233 23L234 28L230.5 38.5V22Z"
                        fill="#E8E3D9"
                    />
                    <path
                        d="M231 29L234 27.5L240 45.5L230.5 38.5L231 29Z"
                        fill="#E8E3D9"
                    />
                </svg>
                <span className="text-background">4.7/5 (+200 avis)</span>
            </div>
            <TestimonialMarquee />
        </div>
    );
};
