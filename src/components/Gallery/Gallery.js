import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import mixitup from "mixitup";

function ExpandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
      />
    </svg>
  );
}

function Gallery() {
  const galleryItems = useRef(null);

  useEffect(() => {
    mixitup(galleryItems.current);
  }, []);

  let galleryMockData = [
    {
      img: "/images/gallery/1.jpg",
      category: "coworking",
    },
    {
      img: "/images/gallery/6.jpg",
      category: "coworking",
    },
    {
      img: "/images/gallery/2.jpg",
      category: "virtualOffice",
    },
    {
      img: "/images/gallery/7.jpg",
      category: "virtualOffice",
    },
    {
      img: "/images/gallery/3.jpg",
      category: "dedicatedDesk",
    },
    {
      img: "/images/gallery/8.jpg",
      category: "dedicatedDesk",
    },
    {
      img: "/images/gallery/4.jpg",
      category: "privateOffice",
    },
    {
      img: "/images/gallery/9.jpg",
      category: "privateOffice",
    },
    {
      img: "/images/gallery/5.jpg",
      category: "meetingSpace",
    },
    {
      img: "/images/gallery/10.jpg",
      category: "meetingSpace",
    },
  ];

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12">
          <ul className="gallery__controls">
            <li className="" data-filter="*">
              {" "}
              All{" "}
            </li>
            <li className="" data-filter=".coworking">
              {" "}
              Coworking{" "}
            </li>
            <li className="" data-filter=".virtualOffice">
              {" "}
              Virtual Office{" "}
            </li>
            <li className="" data-filter=".dedicatedDesk">
              {" "}
              Dedicated Desk{" "}
            </li>
            <li className="" data-filter=".privateOffice">
              {" "}
              Private Office{" "}
            </li>
            <li className="" data-filter=".meetingSpace">
              {" "}
              Meeting Space{" "}
            </li>
          </ul>
        </div>
      </div>

      <div ref={galleryItems} className="row">
        {galleryMockData.map((data, idx) => (
          <div key={idx} className={`col-md-3 gallery__item mix ${data.category}`}>
            <img src={data.img} alt={data.category} />
            <a className="gallery__btn" href={data.img}>
                <ExpandIcon />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
