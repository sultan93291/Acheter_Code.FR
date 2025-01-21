import { Image } from "../../Tags/Image/Image";
import clientOne from "../../../assets/images/Home/client.svg";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import quote from "../../../assets/images/Home/quote.svg";

const ClientReviewCard = ({ clientImg, clientName, clientQuote }) => {
  console.log(quote);

  return (
    <div className="flex flex-col h-[400px] md:w-auto w-[280px] xs:w-[320px] xl:w-[650px]  py-6 rounded-[16px] bg-ocean_blue pl-[38px] pr-[14px] ">
      <div className="flex flex-col items-center mx-auto gap-y-5 ">
        <Image
          data-aos="zoom-in"
          Src={clientImg}
          AltTxt={"not found"}
          className={" h-[72px] w-[72px] object-cover rounded-full  "}
        />
        <Heading
          dataAos={'fade-in'}
          Variant={"h6"}
          text={clientName}
          className={" text-dark_black font-nunito text-xl font-semibold "}
        />
      </div>
      <Paragraph
        dataAos={'fade-in'}
        className={`text-dark_black text-lg font-nunito font-normal leading-[180%] text-center relative  `}
        text={
          <>
            <Image
              Src={quote}
              data-aos='fade-in'
              AltTxt={"not found"}
              className={"absolute top-0 left-0 mt-1 ml-[-24px]"}
            />
            {clientQuote}
          </>
        }
      />
    </div>
  );
};

export default ClientReviewCard;
