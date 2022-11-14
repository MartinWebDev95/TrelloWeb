let total = 0;

function useCarrousel(setDots, carrousel) {
  const carrouselTestimonial = carrousel;
  let isTouching = false;
  let startPointer;
  let scrollLeft;
  let pointer;

  const handlePrevious = () => {
    if (total === 0) {
      carrouselTestimonial.current.style.transform = 'translateX(-75%)';
      total += 75;
      setDots('testimonial-4');
    } else {
      total -= 25;

      if (total === 50) {
        setDots('testimonial-3');
      } else if (total === 25) {
        setDots('testimonial-2');
      } else {
        setDots('testimonial-1');
      }

      carrouselTestimonial.current.style.transform = `translateX(-${total}%)`;
    }
  };

  const handleNext = () => {
    if (total === 75) {
      carrouselTestimonial.current.style.transform = 'translateX(0%)';
      total = 0;
      setDots('testimonial-1');
    } else {
      total += 25;

      if (total === 25) {
        setDots('testimonial-2');
      } else if (total === 50) {
        setDots('testimonial-3');
      } else {
        setDots('testimonial-4');
      }

      carrouselTestimonial.current.style.transform = `translateX(-${total}%)`;
    }
  };

  const handleClickDot = (e) => {
    switch (e.target.value) {
      case 'testimonial-1':
        setDots(e.target.value);
        total = 0;
        carrouselTestimonial.current.style.transform = `translateX(${total}%)`;
        break;

      case 'testimonial-2':
        setDots(e.target.value);
        total = 25;
        carrouselTestimonial.current.style.transform = `translateX(-${total}%)`;
        break;

      case 'testimonial-3':
        setDots(e.target.value);
        total = 50;
        carrouselTestimonial.current.style.transform = `translateX(-${total}%)`;
        break;

      case 'testimonial-4':
        setDots(e.target.value);
        total = 75;
        carrouselTestimonial.current.style.transform = `translateX(-${total}%)`;
        break;

      default:
        setDots(e.target.value);
        total = 25;
        carrouselTestimonial.current.style.transform = `translateX(${total}%)`;
    }
  };

  const handleTouchStart = (e) => {
    const isMobileDevice = window.navigator.userAgent.toLowerCase().includes('mobi');

    if (!isMobileDevice) return;

    isTouching = true;
    startPointer = (e.changedTouches[0].pageX - carrouselTestimonial.current.offsetLeft);
    scrollLeft = carrouselTestimonial.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;

    pointer = e.changedTouches[0].pageX - carrouselTestimonial.current.offsetLeft;
  };

  const handleTouchEnd = () => {
    isTouching = false;

    if (pointer < startPointer) {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  return {
    handleClickDot,
    handleNext,
    handlePrevious,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}

export default useCarrousel;
