import React from "react";
import { Col } from "react-bootstrap";

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "28px", width: "28px", color: "#a39e9e" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function PricingCard({ type, price, id, features, bg }) {
  return (
    <Col xs="12" md="6" lg="4">
      <div className="pricing">
        <div
          className="pricing__header"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h3> {type} </h3>
        </div>
        <div className="pricing__price">
          <h2 className="mt-4 mb-2 mb-md-4">
            <sub>$</sub>
            {price}
            <sub>/MO</sub>
          </h2>
        </div>
        <div className="pricing__btn my-5 text-center">
          <a href="/"> Book Now </a>
        </div>
        <ul className="pricing__feature">
          {features.map((item) => (
            <li>
              {item.checked ? (
                <img
                  className="pricing__feature--checked me-2"
                  src="/images/pricing/check.png"
                  alt="checked"
                />
              ) : (
                <CloseIcon />
              )}

              <span> {item.name} </span>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  );
}

export default PricingCard;
