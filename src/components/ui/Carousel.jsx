import React from 'react'
import CarouselItem from './CarouselItem'

const slides = [
  {
    heading: "Improved traceability and transparency",
    subheading: 'Farmers can track the movement of their crops from farm to table.',
    paragraph: 'With self-sovereign agriculture, farmers can use technology to track the movement of their crops from farm to table. This allows them to ensure the quality and safety of their products and to provide consumers with more transparency about where their food comes from.'
  },
  {
    heading: "Greater efficiency and productivity",
    subheading: 'Farmers can use data to make better decisions about their operations.',
    paragraph: 'With AgroTech Nexus, farmers can use data to make better decisions about their operations. For example, they can use data to track crop yields and expected profits, identify pests and diseases, and optimize their water usage'
  },
  {
    heading: "Increased resilience",
    subheading: 'Farmers can adapt to changing conditions',
    paragraph: 'With our web app, farmers can adapt to changing conditions. For example, they can use data to predict droughts and floods and to take steps to mitigate their impact. '
  },
]

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-4xl p-4 space-x-4 self-end">
      {slides.map((slide, index) => <CarouselItem key={index} index={index} {...slide} />)}
    </div>
  )
}

export default Carousel