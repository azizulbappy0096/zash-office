// modules
import React, { useEffect, useReducer, useRef } from "react";
import mixitup from "mixitup";

// css
import "./Gallery.css";

// components
import LightBox from "./LightBox";

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
  const [{ show, initialIndex }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_SHOW":
          return {
            ...state,
            show: !state.show,
            initialIndex: action.idx,
          };
        default:
          return state;
      }
    },
    {
      show: false,
      initialIndex: 0,
    }
  );

  useEffect(() => {
    mixitup(galleryItems.current);
  }, []);

  const handleLightShow = (e, idx) => {
    e.preventDefault();

    dispatch({
      type: "SET_SHOW",
      idx: idx,
    });
  };

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
            <li data-filter="all"> All </li>
            <li data-filter=".coworking"> Coworking </li>
            <li data-filter=".virtualOffice"> Virtual Office </li>
            <li data-filter=".dedicatedDesk"> Dedicated Desk </li>
            <li data-filter=".privateOffice"> Private Office </li>
            <li data-filter=".meetingSpace"> Meeting Space </li>
          </ul>
        </div>
      </div>

      <div ref={galleryItems} className="row">
        {galleryMockData.map((data, idx) => (
          <div
            key={idx}
            className={`col-md-3 gallery__item mix ${data.category}`}
          >
            <img src={data.img} alt={data.category} />
            <a
              className="gallery__btn"
              href={data.img}
              onClick={(e) => handleLightShow(e, idx)}
            >
              <ExpandIcon />
            </a>
          </div>
        ))}
      </div>
      <LightBox show={show} initialIndex={initialIndex} dispatch={dispatch}>
        {galleryMockData.map((data, idx) => (
          <div key={idx}>
            <img className="lightBox__img" src={data.img} alt={data.category} />
          </div>
        ))}
      </LightBox>
    </div>
  );
}

export default Gallery;
