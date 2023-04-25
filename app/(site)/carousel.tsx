import { useState, useEffect } from "react";
import { Carousel } from "flowbite";
import type { CarouselItem, CarouselOptions, CarouselInterface, IndicatorItem } from "flowbite";

export default function CarouselPage() {
  const [carousel, setCarousel] = useState<CarouselInterface | null>(null);
  const [prevButton, setPrevButton] = useState<HTMLButtonElement | null>(null);
  const [nextButton, setNextButton] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    const items: CarouselItem[] = [
      { position: 0, el: document.getElementById("carousel-item-1") as HTMLElement },
      { position: 1, el: document.getElementById("carousel-item-2") as HTMLElement},
      { position: 2, el: document.getElementById("carousel-item-3") as HTMLElement},
      { position: 3, el: document.getElementById("carousel-item-4") as HTMLElement},
    ];

    const indicators: IndicatorItem[] = [
      { position: 0, el: document.getElementById("carousel-indicator-1") as HTMLElement},
      { position: 1, el: document.getElementById("carousel-indicator-2") as HTMLElement},
      { position: 2, el: document.getElementById("carousel-indicator-3") as HTMLElement},
      { position: 3, el: document.getElementById("carousel-indicator-4") as HTMLElement},
    ];

    const options: CarouselOptions = {
      defaultPosition: 1,
      interval: 3000,
      indicators: {
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        items: indicators,
      },
      onNext: () => {
        console.log("next slider item is shown");
      },
      onPrev: () => {
        console.log("previous slider item is shown");
      },
      onChange: () => {
        console.log("new slider item has been shown");
      },
    };

    setCarousel(new Carousel(items, options));

    const prev = document.getElementById("data-carousel-prev") as HTMLButtonElement;
    setPrevButton(prev);
    const next = document.getElementById("data-carousel-next") as HTMLButtonElement;
    setNextButton(next);
  }, []);

  useEffect(() => {
    if (!carousel || !prevButton || !nextButton) {
      return;
    }

    prevButton.addEventListener("click", () => {
      carousel.prev();
    });

    nextButton.addEventListener("click", () => {
      carousel.next();
    });

    carousel.cycle();

    return () => {
      prevButton.removeEventListener("click", () => {
        carousel.prev();
      });

      nextButton.removeEventListener("click", () => {
        carousel.next();
      });
    };
  }, [carousel, prevButton, nextButton]);

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* <!-- Item 1 --> */}
            <div id="carousel-item-1" className="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            {/* <!-- Item 2 --> */}
            <div id="carousel-item-2" className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            {/* <!-- Item 3 --> */}
            <div id="carousel-item-3" className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            {/* <!-- Item 4 --> */}
            <div id="carousel-item-4" className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            {/* <!-- Item 5 --> */}
            <div id="carousel-item-5" className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button id="carousel-indicator-1" type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button id="carousel-indicator-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button id="carousel-indicator-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button id="carousel-indicator-5" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button id="data-carousel-prev" type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button id="data-carousel-next" type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
  )}