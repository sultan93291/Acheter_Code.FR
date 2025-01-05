import { bestsellingCardData , upcomingCardData } from "../../../DummyData/DummyData";
import SwipperSlider from "../../../SwipperSlider/SwipperSlider";
import Heading from "../../../Tags/Heading/Heading";
import Paragraph from "../../../Tags/Paragraph/Paragraph";


const VouchersSection = () => {
  return (
    <section className="flex  flex-col w-full h-auto border-[2px] border-solid border-orange ">
      <div className="w-full px-[300px] h-auto py-10 bg-secondary_blue">
        <Heading
          Variant={"h2"}
          text={"SALE VOUCHERS"}
          className={"card_section_heading"}
        />
      </div>
      <div className="flex flex-col px-[300px] h-auto py-8 bg-primary_blue gap-y-[64px]">
        <div className="flex flex-col gap-y-8 ">
          <Heading
            Variant={"h4"}
            text={"Bestselling Vouchers"}
            className={"card_sub_heading"}
          />
          <SwipperSlider
            data={bestsellingCardData}
            cardHeight={"570px"}
            cardName={"Bestselling Vouchers"}
          />
        </div>
        <div className="flex flex-col gap-y-8 ">
          <Heading
            Variant={"h4"}
            text={"Upcoming Vouchers"}
            className={"card_sub_heading"}
          />
          <SwipperSlider
            data={upcomingCardData}
            cardHeight={"570px"}
            cardName={"Upcoming Vouchers"}
          />
        </div>
      </div>
    </section>
  );
};

export default VouchersSection;
