import Header from '../Header';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import TrustedCompaniesSection from '../TrustedCompaniesSection';
import FeaturesSection from '../FeaturesSection';
import TestimonialSection from '../TestimonialSection';
import SignUp from '../SignUp';
import DownloadTrello from '../DownloadTrello';
import Footer from '../Footer';

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
        <DownloadTrello />
      </main>
      <Footer />
    </>
  );
}

export default Trello;
