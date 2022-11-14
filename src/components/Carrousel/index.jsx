import { useRef, useState } from 'react';

import ButtonsHandleCarrousel from '../ButtonsHandleCarrousel';
import Testimonial from '../Testimonial';

import LogoEbay from '/assets/ebay.svg';
import LogoEgencia from '/assets/egencia.svg';
import LogoRedWings from '/assets/detroit-red-wings.svg';
import LogoSprout from '/assets/sprout-social.svg';

import { ContainerCarrousel, Container, Wrapper } from './styles';
import useCarrousel from '../../hooks/useCarrousel';

function Carrousel() {
  const [dots, setDots] = useState('testimonial-1');
  const carrousel = useRef(null);

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useCarrousel(setDots, carrousel);

  return (
    <Container>
      <Wrapper>
        <ButtonsHandleCarrousel
          carrousel={carrousel}
          dots={dots}
          setDots={setDots}
        />
        <ContainerCarrousel
          ref={carrousel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Testimonial
            text="Everyone loves it; it has democratized our finance function.
          In some ways Trello shattered hierarchy and brought us together."
            author="Bharath Sundar - Finance, Ebay"
            industry="eCommerce"
            logoBrand={LogoEbay}
            altImg="Ebay"
          />
          <Testimonial
            text="Very simple to use, great automation and keeps me on track with
          all I need to do. I also like that it can be shared with others."
            author="Kerry Parker-Evans - - IT Project Manager, Egencia"
            industry="Travel"
            logoBrand={LogoEgencia}
            altImg="Egencia"
          />
          <Testimonial
            text="Trello makes it easy to keep everyone on the same page.
          As changes happen, the real-time updates with email notifications
          have been key."
            author="Haydon Dotson - Sales Manager, Detroit Red Wings"
            industry="Sport"
            logoBrand={LogoRedWings}
            altImg="Detroit_Red_Wings"
          />
          <Testimonial
            text="Now that we&apos;ve switched to a remote environment, with the use
          of Trello, we can now limit the number of meetings we have
          regarding specific projects and turn to Trello for updates instead."
            author="Haley Ennes - HR Manager, Sprout Social"
            industry="Marketing"
            logoBrand={LogoSprout}
            altImg="Sprout_Social"
          />
        </ContainerCarrousel>
      </Wrapper>
    </Container>
  );
}

export default Carrousel;
