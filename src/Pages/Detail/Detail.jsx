import React from 'react'
import GeneralInfo from '../../Components/PageComponent/DetailpageComponent/GeneralInfo/GeneralInfo'
import DetailsReviewSection from '../../Components/PageComponent/DetailpageComponent/DetailsReviewSection/DetailsReviewSection';


const Detail = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <GeneralInfo />
      <DetailsReviewSection/>
    </section>
  );
}

export default Detail