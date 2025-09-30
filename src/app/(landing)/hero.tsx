import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Banner } from './banner';

export const Hero = () => {
    return (
        <section className="w-full py-32 xl:py-20 mb-16 px-72 max-3xl:px-64 max-2xl:px-48 max-xl:px-48 max-lg:px-24 max-md:px-12 max-sm:px-6">
            <div className="relative flex flex-col xl:flex-row items-center justify-between">
                <div className="xl:mb-24 flex flex-col gap-4 flex-1 items-center xl:items-start text-center md:text-left relative z-10 px-4">
                    <h1 className="max-xl:text-center flex flex-col font-rubik-spray text-6xl xl:text-7xl font-rubik text-foreground max-w-3xl">
                        <span className="font-rubik-spray">
                            Plus qu&apos; une
                        </span>
                        <span>pizza, une</span>
                        <span>signature.</span>
                    </h1>
                    <p className="max-xl:text-center text-md sm:text-md md:text-lg text-foreground font-semibold max-w-md max-lg:max-w-sm mt-2 mb-6">
                        Une pâte fine et croustillante, des produits frais
                        sélectionnés avec exigence, à déguster sur place ou à
                        emporter.
                    </p>
                    <Button
                        iconRight={<ArrowRight />}
                        variant="secondary"
                        size="xl"
                    >
                        Voir la carte
                    </Button>
                </div>
                <div className="max-xl:hidden h-[825px] w-[825px] absolute z-50 xl:-top-36 -right-12 flex justify-center md:justify-end items-center pointer-events-none max-xl:-ml-56 2xl:-mr-12 xl:-mr-40">
                    <Image
                        src="/images/hero-pizza.png"
                        alt="Pizza"
                        fill
                        priority
                        draggable={false}
                        className="object-contain md:object-right xl:scale-[0.8] 2xl:scale-[1] select-none"
                    />
                </div>
            </div>
            <Banner />
        </section>
    );
};
