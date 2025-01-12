import { useSelector } from "react-redux";
import jungle from "../../../../assets/images/Home/jungle.jpg";
import { giftCardData } from "../../../DummyData/DummyData";
import SwipperSlider from "../../../SwipperSlider/SwipperSlider";


const GiftCardSection = () => {
 const giftCardDataSlice = useSelector(
   state => state?.filterCardDataSlice?.filterCardData
 );

  console.log(giftCardDataSlice);
  
  const giftCardDataArray = Object.values(giftCardDataSlice);
  console.log( 'gift card section' ,typeof giftCardDataArray);
  
  
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
        data={giftCardDataArray.length?giftCardDataArray : giftCardData}
        cardHeight={"532px"}
        cardName={"gift card"}
      />
    </section>
  );
};

export default GiftCardSection;
