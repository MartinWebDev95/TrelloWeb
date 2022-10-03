import { useState } from 'react';
import useCarrousel from '../../hooks/useCarrousel';
import {
  Dots, DivButtons, ButtonNext, ButtonPrevious,
} from './styles';

function ButtonsHandleCarrousel({ carrousel }) {
  const [dots, setDots] = useState('testimonial-1');

  const {
    handleClickDot, handleNext, handlePrevious,
  } = useCarrousel(setDots, carrousel);

  return (
    <DivButtons>
      <div>
        <Dots
          type="button"
          value="testimonial-1"
          active={dots}
          onClick={handleClickDot}
        >
          <span>Testimonial 1</span>
        </Dots>
        <Dots
          type="button"
          value="testimonial-2"
          active={dots}
          onClick={handleClickDot}
        >
          <span>Testimonial 2</span>
        </Dots>
        <Dots
          type="button"
          value="testimonial-3"
          active={dots}
          onClick={handleClickDot}
        >
          <span>Testimonial 3</span>
        </Dots>
        <Dots
          type="button"
          value="testimonial-4"
          active={dots}
          onClick={handleClickDot}
        >
          <span>Testimonial 4</span>
        </Dots>
      </div>
      <ButtonPrevious type="button" onClick={handlePrevious}>
        <svg fill="#000" height="8" viewBox="0 0 13 8" width="13" xmlns="http://www.w3.org/2000/svg">
          <path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z" />
        </svg>
      </ButtonPrevious>
      <ButtonNext type="button" onClick={handleNext}>
        <svg fill="#000" height="8" viewBox="0 0 13 8" width="13" xmlns="http://www.w3.org/2000/svg">
          <path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z" />
        </svg>
      </ButtonNext>
    </DivButtons>
  );
}

export default ButtonsHandleCarrousel;
