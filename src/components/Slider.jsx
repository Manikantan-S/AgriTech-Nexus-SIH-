import React from 'react';

import Carousel from './ui/Carousel';
import CarouselNavigation from './ui/CarouselNavigation';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <section className='flex flex-col gap-8 py-16 bg-green-500'> 
      <div className='flex justify-between md:mx-[8vw] mx-4'>
        <article className='ml-4 max-w-xl'>
          <h1 className="text-5xl font-bold leading-snug mb-4">
            <span className="text-primary">Growing food for a</span> better tomorrow
          </h1>
          <p className="text-xl">
          Safely control and shape your food supply, giving you freedom and choice.Own your food story and reflect your true Indian values.
          </p>
        </article>
        <CarouselNavigation />
      </div>
      <Carousel />
    </section>
  );
};

export default Slider;
