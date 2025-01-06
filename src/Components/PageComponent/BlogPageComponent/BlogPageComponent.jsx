"use client";
import { useEffect, useState } from "react";
import { Image } from "../../Tags/Image/Image";
import { BlogCardData } from "../../DummyData/DummyData";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import cod from "../../../assets/images/Details/cod.jpeg"
import vr from "../../../assets/images/Details/vr.png";

const BlogPageComponent = ({ id }) => {
  const [BlogData, setBlogData] = useState();

  useEffect(() => {
    if (id == 1) {
      setBlogData(BlogCardData[0]);
    } else if (id == 2) {
      setBlogData(BlogCardData[1]);
    }

    if (id == 3) {
      setBlogData(BlogCardData[2]);
    }
  }, [id]);
  console.log(BlogData);

  const giftCardBenefits = [
    {
      id: 1,
      heading: "Universal Appeal",
      content:
        "Gaming is one of the most popular forms of entertainment worldwide, with options ranging from casual mobile games to immersive PC and console experiences. Game gift cards cater to players of all levels, making them a versatile gift.",
    },
    {
      id: 2,
      heading: "Flexibility for the Recipient",
      content:
        "Game gift cards provide the freedom to choose. Whether it’s purchasing new games, in-game items, downloadable content (DLCs), or even subscriptions like Xbox Game Pass or PlayStation Plus, recipients can tailor the gift to their own preferences.",
    },
    {
      id: 3,
      heading: "No Guesswork Involved",
      content:
        "Selecting the perfect game can be daunting, especially if you’re not familiar with the recipient’s gaming interests. Game gift cards eliminate this guesswork, ensuring the gift is appreciated and used.",
    },
    {
      id: 4,
      heading: "Instant Gratification",
      content:
        "Digital game gift cards can be delivered instantly via email or text, making them a lifesaver for last-minute gifting. Even physical cards are easy to find at most retail stores.",
    },
    {
      id: 5,
      heading: "Budget-Friendly Options",
      content:
        "Game gift cards come in various denominations, making them accessible for any budget. This flexibility allows you to spend as much or as little as you want while still giving a thoughtful gift.",
    },
    {
      id: 6,
      heading: "Great for Any Occasion",
      content:
        "Whether it’s for birthdays, holidays, graduations, or just because, game gift cards suit any occasion. Their universality means you’ll never need to stress about the appropriateness of the gift.",
    },
    {
      id: 7,
      heading: "Supports Diverse Platforms",
      content:
        "Game gift cards are available for all major gaming platforms, including Steam, PlayStation, Xbox, Nintendo, and mobile app stores. This ensures compatibility with the recipient’s gaming setup.",
    },
  ];

  const moreBlogData = [
    {
      bgImg: vr,
      heading: "17/12/2024   |   Jim Mehmood",
      subHeading:
        "Boost Your Gaming Experience with Sale Vouchers and Gift Cards",
    },
    {
      bgImg: cod,
      heading: "17/12/2024   |   Jim Mehmood",
      subHeading:
        "How to Maximize Your Fun with Game Vouchers & Sale Gift Cards",
    },
    {
      bgImg: vr,
      heading: "17/12/2024   |   Jim Mehmood",
      subHeading:
        "Boost Your Gaming Experience with Sale Vouchers and Gift Cards",
    },
    {
      bgImg: cod,
      heading: "17/12/2024   |   Jim Mehmood",
      subHeading:
        "How to Maximize Your Fun with Game Vouchers & Sale Gift Cards",
    },
    {
      bgImg: vr,
      heading: "17/12/2024   |   Jim Mehmood",
      subHeading:
        "Boost Your Gaming Experience with Sale Vouchers and Gift Cards",
    },
    {
      bgImg: cod,
      heading: "17/12/2024   |   Jim Mehmood",
      subHeading:
        "How to Maximize Your Fun with Game Vouchers & Sale Gift Cards",
    },
    {
      bgImg: vr,
      heading: "17/12/2024   |   Jim Mehmood",
      subHeading:
        "Boost Your Gaming Experience with Sale Vouchers and Gift Cards",
    },
    {
      bgImg: cod,
      heading: "17/12/2024   |   Jim Mehmood",
      subHeading:
        "How to Maximize Your Fun with Game Vouchers & Sale Gift Cards",
    },
    {
      bgImg: vr,
      heading: "17/12/2024   |   Jim Mehmood",
      subHeading:
        "Boost Your Gaming Experience with Sale Vouchers and Gift Cards",
    },
    {
      bgImg: cod,
      heading: "17/12/2024   |   Jim Mehmood",
      subHeading:
        "How to Maximize Your Fun with Game Vouchers & Sale Gift Cards",
    },
  ];

  return (
    <section className="flex flex-col gap-y-[72px] px-[300px] pb-[160px] ">
      <Image
        Src={BlogData?.BgImg}
        className={"w-[1320px] h-[560px] object-cover  "}
        AltTxt={"blog background"}
      />
      <div className="flex flex-row gap-x-[21px] ">
        <div className="flex flex-col gap-y-6 ">
          <div className="flex flex-col gap-y-8 ">
            <Heading
              Variant={"h5"}
              text={"BLOGS"}
              className={" text-2xl text-text_black font-bold leading-[150%] "}
            />
            <div className="flex flex-col gap-y-2">
              <Heading
                Variant={"h3"}
                text={BlogData?.cardTxt}
                className={
                  "text-[32px]  font-bold leading-[150%] w-[558px] text-[#B57500]  "
                }
              />
              <Paragraph
                text={"21/12/2024  |  Simin Aney  |  2 min."}
                className={
                  "text-[20px] font-bold leading-[150%] text-secondary_gray "
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-10 w-[762px]  ">
            <Paragraph
              text={
                "Game gift cards have become a go-to option for stress-free gifting, and for good reason. Here’s why they’re such a powerful tool for simplifying the gift-giving process:"
              }
              className={"para_style"}
            />
            <div className="flex flex-col gap-y-6 ">
              {giftCardBenefits.map((item, index) => {
                return (
                  <div className="flex flex-col gap-y-[2px] " key={item?.id}>
                    <Paragraph
                      className={"para_style"}
                      text={`${item?.id}. ${item?.heading} `}
                    />
                    <Paragraph
                      className={"para_style"}
                      text={`${item?.content}  `}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-auto border-l-2 border-dotted border-text_gray ">
          {" "}
        </div>
        <div className="flex flex-col gap-y-8 ">
          <Heading
            Variant={"h5"}
            text={"MORE BLOGS FROM US"}
            className={" text-2xl text-text_black font-bold leading-[150%] "}
          />
          <div className="flex flex-col gap-y-5 " >
            {
              moreBlogData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-row gap-x-6 p-[10px] rounded-[8px] ease-in duration-150 hover:bg-[#FFFBF4] shadow-custom_shadow group `}
                  >
                    <Image
                      Src={item.bgImg}
                      AltTxt={"not found"}
                      className={
                        " w-[88px] h-[88px] rounded-[6px] object-cover  "
                      }
                    />
                    <div className="flex flex-col gap-y-2">
                      <Heading
                        Variant={"h4"}
                        text={item?.heading}
                        className={
                          "text-[14px] font-bold font-nunito leading-[150%] text-secondary_gray group-hover:text-text_black"
                        }
                      />
                      <Heading
                        Variant={"h2"}
                        text={
                          "Boost Your Gaming Experience with Sale Vouchers and Gift Cards"
                        }
                        className={
                          " text-[20px] text-text_black font-bold font-nunito "
                        }
                      />
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPageComponent;
