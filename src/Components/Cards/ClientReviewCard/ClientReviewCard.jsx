import { Image } from "../../Tags/Image/Image";
import clientOne from "../../../assets/images/Home/client.svg";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import quote from "../../../assets/images/Home/quote.svg";

const ClientReviewCard = ({ clientImg, clientName, clientQuote }) => {
  console.log(quote);

  return (
    <div className="flex flex-col h-auto w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[460px] md:max-w-[345px] lg:max-w-[650px] py-6 rounded-[16px] bg-ocean_blue px-6 lg:px-10">
      <div className="flex flex-col items-center mx-auto gap-y-5">
        <Image
          Src={clientImg}
          AltTxt={"not found"}
          className="h-[72px] w-[72px] object-cover rounded-full"
        />
        <Heading
          Variant={"h6"}
          text={clientName}
          className="text-dark_black font-nunito text-xl font-semibold text-center"
        />
      </div>
      <Paragraph
        className="text-dark_black text-lg font-nunito font-normal leading-[180%] text-center relative mt-4"
        text={
          <>
            <Image
              Src={quote}
              AltTxt={"not found"}
              className="absolute top-0 left-0 mt-1 ml-[-24px]"
            />
            {clientQuote}
          </>
        }
      />
    </div>
  );
};

export default ClientReviewCard;
