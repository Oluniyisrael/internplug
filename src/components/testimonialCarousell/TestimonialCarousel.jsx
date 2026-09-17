import { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../button/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function TestimonialCarousel({ testimonials }) {
  const sliderRef = useRef(null);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 768);
  const defaultTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      picture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimonial: "This product has completely transformed my daily routine. The quality is exceptional and the customer service is outstanding!",
      rating: 5,
      position: "Marketing Manager"
    },
    {
      id: 2,
      name: "Michael Chen",
      picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "I've been using this for 6 months now and I can't imagine going back. It's intuitive, powerful, and saves me hours every week.",
      rating: 5,
      position: "Software Developer"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: "The best investment I've made for my business. The results speak for themselves - we've seen a 40% increase in efficiency.",
      rating: 5,
      position: "Business Owner"
    },
    {
      id: 4,
      name: "David Thompson",
      picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "Exceptional quality and attention to detail. The team went above and beyond to ensure everything was perfect.",
      rating: 5,
      position: "Project Manager"
    },
    {
      id: 5,
      name: "Lisa Park",
      picture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      testimonial: "I was skeptical at first, but this exceeded all my expectations. The support team is incredibly responsive and helpful.",
      rating: 5,
      position: "Designer"
    }
  ];

  const testimonialData = testimonials || defaultTestimonials;
  
  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fixed custom arrow components
  const NextArrow = ({ onClick }) => (
    <button className="absolute top-1/2 -translate-y-1/2 md:-right-6 right-0 z-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-2 hover:scale-110 cursor-pointer" onClick={onClick} style={{ transform: 'translateY(-10%)' }} >
      <ChevronRight className="w-6 h-6 text-[#569d03]" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="absolute top-1/2 -translate-y-1/2 md:-left-6 left-0 z-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-2 hover:scale-110 cursor-pointer" onClick={onClick} style={{ transform: 'translateY(-10%)' }} >
      <ChevronLeft className="w-6 h-6 text-[#569d03]" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: smallScreen ? 1 : 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true, 
    cssEase: 'ease-in-out',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
    ));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <style>{`
        /* Hide default slick arrows */
        .slick-prev:before,
        .slick-next:before {
          display: none;
        }

        .slick-dots {
          bottom: -40px;
        }

        .slick-dots li button:before {
          color: #aaa;
          font-size: 20px;
          transition: color 0.3s ease;
        }

        .slick-dots li.slick-active button:before {
          color: #ff8400;
        }

        .slick-track {
          display: flex;
          align-items: stretch;
        }

        .slick-slide {
          height: inherit;
        }

        .slick-slide > div {
          height: 100%;
        }

        @media (max-width: 768px) {
          .carousel-container .absolute.-left-6 {
            left: -2rem;
          }
          .carousel-container .absolute.-right-6 {
            right: -2rem;
          }
          .slick-dots li button:before {
         		color: #aaa;
        		font-size: 15px;
         		transition: color 0.3s ease;
       		}
        }
      `}</style>

      <div className="relative flex justify-center carousel-container">
        <Slider ref={sliderRef} {...settings} className='container'>
          {testimonialData.map((testimonial, index) => (
            <div key={testimonial.id || index} className="px-3">
              <div className="bg-white rounded-xl shadow-lg p-6 mx-8 md:mx-2 h-80 flex flex-col justify-between border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative">
                {/* Quote Icon */}
                <div className="text-4xl text-blue-200 mb-4">
                  "
                </div>

                {/* Testimonial Text */}
                <div className="flex-grow">
                  <p className="text-gray-700 text-sm md:text-md leading-relaxed mb-6 italic h-22 line-clamp-4">
                    {testimonial.testimonial}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating || 5)}
                </div>

                {/* User Info */}
                <div className="flex items-center">
                  <img src={testimonial.picture} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-200" loading="lazy"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {testimonial.name}
                    </h4>
                    {testimonial.position && (
                      <p className="text-gray-500 text-sm">
                        {testimonial.position}
                      </p>
                    )}
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d68043] to-[#569d03] rounded-t-xl"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
