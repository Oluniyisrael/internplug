import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../button/Buttton';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CustomCarousel(props) {
  const { sliderData } = props;
  const sliderRef = useRef(null);
  const currentSlideElementsRef = useRef(null);
  const nextSlideElementsRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    beforeChange: (current, next) => {
      currentSlideElementsRef.current = document.querySelectorAll(`.slick-slide[data-index="${current}"] [data-aos]`);
      nextSlideElementsRef.current = document.querySelectorAll(`.slick-slide[data-index="${next}"] [data-aos]`);

      if (currentSlideElementsRef.current) {
        currentSlideElementsRef.current.forEach(element => {
          element.classList.remove('aos-animate');
          element.closest('.slick-slide').classList.add('fade-out');
        });
      }
      if (nextSlideElementsRef.current) {
        nextSlideElementsRef.current.forEach(element => {
          element.classList.remove('aos-animate');
          element.closest('.slick-slide').style.opacity = '0';
        });
      }

      setTimeout(() => {
        if (currentSlideElementsRef.current) {
          currentSlideElementsRef.current.forEach(element => {
            element.closest('.slick-slide').classList.remove('fade-out');
            element.closest('.slick-slide').style.opacity = '0';
          });
        }
      }, 400);
    },
    afterChange: (current) => {
      AOS.refresh();
      setTimeout(() => {
        const currentSlideElements = document.querySelectorAll(`.slick-slide[data-index="${current}"] [data-aos]`);
        if (currentSlideElements) {
          currentSlideElements.forEach(element => {
            element.closest('.slick-slide').style.opacity = '1';
            element.classList.add('aos-animate');
          });
        }
      }, 100);
    },
  };
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 relative">
      <style>{`
        .slick-arrow::before {
          color: #ffc107;
          font-size: 30px;
        }
        .slick-prev {
          z-index: 10;
        }
        .slick-next {
          z-index: 10;
        }
        .slick-slide {
          transition: opacity 1s ease-in-out;
          opacity: 1;
        }
        .slick-slide.fade-out {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
      `}</style>
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="p-4" data-index={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
              {smallScreen ?
                (
                  <img src={slide.imageUrlSmallWidth} alt={slide.title} className="w-full h-full max-h-[calc(70vh])] object-cover" data-aos="fade-up" data-aos-delay="100" />
                ) : (
                  <img src={slide.imageUrl} alt={slide.title} className="w-full h-64 object-cover" data-aos="fade-up" data-aos-delay="100" />
                )
              }
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800" data-aos="fade-right" data-aos-delay="200">
                  {slide.title}
                </h3>
                <p className="text-[#ff8400] mb-4 sm:text-xl" data-aos="fade-left" data-aos-delay="300">
                  <span className="border-r-[5px] border-[#261e6e] mr-[20px]"></span>
                  {slide.description}
                </p>
                <div data-aos="fade-up" data-aos-delay="400">
                  <a href={slide.link} target="_blank" rel="noopener noreferrer" className="inline-block text-gold transition-colors uppercase">
                    <Button className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] border-[#3f51b5] px-6 py-3 font-semibold uppercase text-[#3f51b5] transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#3f51b5] before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[gold] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95" value={<>Visit Site</>} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomCarousel;