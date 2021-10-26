// modules
import React from "react";
import { Row } from "react-bootstrap";

// css
import "./Pricing.css";

// components
import PricingCard from "./PricingCard";

function Pricing() {
  let testData = [
    {
      id: 1,
      type: "Coworking",
      img: "/images/pricing/place-img1.jpg",
      price: 179,
      features: [
        {
          checked: true,
          name: "24/7 Access",
        },
        {
          checked: true,
          name: "Cleaning Service",
        },
        {
          checked: true,
          name: "High Speed Wifi/ Internet",
        },
        {
          checked: true,
          name: "Opening Hours (8:00 – 22:00)",
        },
        {
          checked: true,
          name: "Utilities Included",
        },
        {
          checked: true,
          name: "Access to Kitchen Lounge",
        },
      ],
    },
    {
        id: 2,
        type: "Virtual Office",
        img: "/images/pricing/place-img2.jpg",
        price: 295,
        features: [
          {
            checked: true,
            name: "24/7 Access",
          },
          {
            checked: true,
            name: "Cleaning Service",
          },
          {
            checked: true,
            name: "High Speed Wifi/ Internet",
          },
          {
            checked: true,
            name: "Opening Hours (8:00 – 22:00)",
          },
          {
            checked: true,
            name: "Utilities Included",
          },
          {
            checked: true,
            name: "Access to Kitchen Lounge",
          },
        ],
      },
      {
        id: 3,
        type: "Dedicated Desk",
        img: "/images/pricing/place-img3.jpg",
        price: 139,
        features: [
          {
            checked: true,
            name: "24/7 Access",
          },
          {
            checked: false,
            name: "Cleaning Service",
          },
          {
            checked: true,
            name: "High Speed Wifi/ Internet",
          },
          {
            checked: true,
            name: "Opening Hours (8:00 – 22:00)",
          },
          {
            checked: false,
            name: "Utilities Included",
          },
          {
            checked: true,
            name: "Access to Kitchen Lounge",
          },
        ],
      },
  ];

  return (
    <div className="container my-5">
      <Row className="justify-content-center">
        {testData.map((service, idx) => (
          <PricingCard
            key={idx}
            id={service.id}
            type={service.type}
            bg={service.img}
            price={service.price}
            features={service.features}
          />
        ))}
      </Row>
    </div>
  );
}

export default Pricing;
