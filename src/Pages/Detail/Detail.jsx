"use client";
import React, { useState } from "react";
import GeneralInfo from "../../Components/PageComponent/DetailpageComponent/GeneralInfo/GeneralInfo";
import DetailsReviewSection from "../../Components/PageComponent/DetailpageComponent/DetailsReviewSection/DetailsReviewSection";
import { data, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


const Detail = data => {
  const [detailsData, setdetailsData] = useState();
  const { id } = useParams();
  console.log(data);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://borisdessy.softvencefsd.xyz/api/card-details?card_id=${id}`,
    })
      .then(res => {
        console.log(res);
        

        setdetailsData(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <section className="bg-[#F8F8F8]">
      <GeneralInfo data={detailsData?.card} />
      <DetailsReviewSection data={detailsData} />
    </section>
  );
};

export default Detail;
