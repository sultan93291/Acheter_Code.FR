import Heading from '../../../Tags/Heading/Heading';
import SwipperSlider from '../../../SwipperSlider/SwipperSlider';
import {
  specailUpcomingCardData
} from "../../../DummyData/DummyData";
import grass from "../../../../assets/images/Home/grass.png"
import yellowLight from "../../../../assets/images/Home/yellow_light.png";
import giftLeft from "../../../../assets/images/Home/gift_left.png";
import { Image } from '../../../Tags/Image/Image';


const UpcomingCardSection = () => {
  return (
    <section className="flex flex-col w-full h-auto ">
      <div className="w-full px-[300px] h-auto py-10 bg-secondary_blue">
        <Heading
          Variant={"h2"}
          text={"GIFT CARDS"}
          className={"card_section_heading"}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${grass})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col items-center justify-center  h-auto pt-8 pb-[38.5px]  gap-y-[64px]"
      >
        <div className="flex flex-col gap-y-8 ">
          <Heading
            Variant={"h4"}
            text={"Upcoming Cards"}
            className={"card_sub_heading"}
          />
          <div className="flex items-center justify-center w-auto py-10 px-[72px] bg-off_blue rounded-[8px] ">
            <SwipperSlider
              data={specailUpcomingCardData}
              cardHeight={"532px"}
              cardName={"Specail upcoming card data"}
              customMargin={true}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${yellowLight})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col items-center justify-center relative  h-auto pt-8 pb-[38.5px]  gap-y-[64px]"
      >
        <div className="flex flex-col gap-y-8">
          <Heading
            Variant={"h4"}
            text={"Best Selling Cards"}
            className={"card_sub_heading text-white "}
          />
          <div className="flex items-center justify-center w-auto py-10 px-[72px]  bg-off_blue rounded-[8px] ">
            <SwipperSlider
              data={specailUpcomingCardData}
              cardHeight={"532px"}
              cardName={"Specail upcoming card data"}
              customMargin={true}
            />
          </div>
        </div>
        <Image
          Src={giftLeft}
          AltTxt={"not found"}
          className={" absolute top-0 left-0 mt-[188px] ml-[48.05px] "}
        />
        <Image
          Src={giftLeft}
          AltTxt={"not found"}
          className={" absolute top-0 right-0 mt-[188px] mr-[48.05px] "}
        />
      </div>
    </section>
  );
}

export default UpcomingCardSection