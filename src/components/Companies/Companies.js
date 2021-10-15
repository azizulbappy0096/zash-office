import React from "react";
import Slider from "react-slick";
import "./Companies.css";

function SwipeToSlide({ companies }) {
  const settings = {
    className: "center",
    autoplay: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1124,
            settings: {
              slidesToShow: 4,
            },
          },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
        {companies.map((img, idx) => (
             <div key={idx} className="campanies__slider">
             <img src={img} alt="company name" />
           </div>
        ) )}
     
    </Slider>
  );
}

function Companies() {
    const testData = [
        "/images/companies/1.png",
        "/images/companies/2.png",
        "/images/companies/3.png",
        "/images/companies/4.png",
        "/images/companies/5.png",
        "/images/companies/6.png",
        "/images/companies/7.png",
    ]
  return (
    <div className="companies">
      <div className="container">
        <div className="companies__title">
          <h2> TRUSTED BY 20,000 COMPANIES </h2>
        </div>

        <SwipeToSlide companies={testData} />
      </div>
    </div>
  );
}

export default Companies;
