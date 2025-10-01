import Image from 'next/image';

export const Hero = () => {
    return (
        <section className="w-full py-32 xl:py-20 mb-16 px-72 max-3xl:px-64 max-2xl:px-48 max-xl:px-48 max-lg:px-24 max-md:px-12 max-sm:px-6">
            <div className="relative flex flex-col xl:flex-row items-center justify-between">
                <div className="xl:mb-24 flex flex-col gap-4 flex-1 items-center xl:items-start text-center md:text-left relative z-10 px-4">
                    <h1 className="relative max-xl:text-center flex flex-col font-rubik-spray [@media(max-width:470px)]:text-5xl text-6xl xl:text-7xl font-rubik text-foreground max-w-3xl mb-6">
                        À Propos
                        <div className="absolute -right-12 top-16 [@media(max-width:470px)]:top-12 transform -translate-y-1/2">
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
                    </h1>
                    <p className="max-xl:text-center text-md sm:text-md md:text-lg text-foreground font-semibold max-w-md max-lg:max-w-sm mt-2 mb-6 flex flex-col gap-8">
                        <span>
                            Chez Pizetto, nous perpétuons l&apos;art de la vraie
                            pizza italienne.{' '}
                        </span>
                        <span>
                            De la pâte pétrie chaque matin aux sauces mijotées
                            avec des tomates gorgées de soleil, chaque détail
                            compte. Nous choisissons des ingrédients frais et
                            locaux
                        </span>
                    </p>
                </div>
                <Image
                    src="/images/about-1.png"
                    alt="About Us"
                    width={450}
                    height={450}
                    className="object-cover"
                />
            </div>
        </section>
    );
};
