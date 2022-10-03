import Header from '../Header';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import TrustedCompaniesSection from '../TrustedCompaniesSection';
import FeaturesSection from '../FeaturesSection';
import TestimonialSection from '../TestimonialSection';
import SignUp from '../SignUp';

function Trello() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InfoSection />
        <TrustedCompaniesSection />
        <FeaturesSection />
        <TestimonialSection />
        <SignUp />
      </main>
    </>
  );
}

export default Trello;
