import GiftCardSection from "../../Components/PageComponent/HomePageComponent/GiftCardSection/GiftCardSection";
import OurProductSection from "../../Components/PageComponent/HomePageComponent/OurProductSection/OurProductSection";
import UpcomingCardSection from "../../Components/PageComponent/HomePageComponent/UpComingCardSection/UpcomingCardSection";
import VouchersSection from "../../Components/PageComponent/HomePageComponent/VouchersSection/VouchersSection";

const Home = () => {
  return (
    <>
      <GiftCardSection />
      <VouchersSection />
      <UpcomingCardSection />
      <OurProductSection />
    </>
  );
};

export default Home;
