import jungle from "../../../../assets/images/Home/jungle.jpg";
import { giftCardData } from "../../../DummyData/DummyData";
import SwipperSlider from "../../../SwipperSlider/SwipperSlider";

const GiftCardSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${jungle})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full h-[760px] flex items-center justify-center relative"
    >
      <SwipperSlider
        data={giftCardData}
        cardHeight={"532px"}
        cardName={"gift card"}
      />
    </section>
  );
};

export default GiftCardSection;
