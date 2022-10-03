import Quotes from '/assets/quotes.svg';
import {
  Wrapper, Text, SubtitleImg, Author, Industry,
} from './styles';

function Testimonial({
  text, author, industry, logoBrand, altImg,
}) {
  return (
    <Wrapper>
      <figure>
        <Text quotes={Quotes}>
          {text}
        </Text>
        <SubtitleImg>
          <Author>
            <span>
              {author.split('-')[0]}
              {' '}
            </span>
            -
            {' '}
            {author.split('-')[1]}
          </Author>
          <Industry>
            Industry:
            <span>
              {' '}
              {industry}
            </span>
          </Industry>
          {logoBrand && <img src={logoBrand} alt={altImg} />}
        </SubtitleImg>
      </figure>
    </Wrapper>
  );
}

export default Testimonial;
