import React, { useState } from "react";
import "./EventDetail.css";

function EventDetail(props) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="EventDetail">
      <div className="event-container">
        <div className="icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 12H12V17H17V12ZM16 1V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H18V1H16ZM19 19H5V8H19V19Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="event-detail-container">
          <p className="event-title">{props.name}</p>
          <p className="event-date">{props.date}</p>
          <p className="event-location">{props.address}</p>
          {showMore ? (
            <div>
              <div>
                <div className="person">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#6083FF" />
                  </svg>
                  <div className="name">
                    <p>Bob Jenkins</p>
                  </div>
                </div>
                <div className="person">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#6083FF" />
                  </svg>
                  <div className="name">
                    <p>Bob Jenkins</p>
                  </div>
                </div>
                <div className="person">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#6083FF" />
                  </svg>
                  <div className="name">
                    <p>Bob Jenkins</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="people-going">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#6083FF" />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#6083FF" />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#6083FF" />
              </svg>
              <p>+ going</p>
              <svg
                onClick={() => handleShowMore()}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.825 7.15833L10 10.975L6.175 7.15833L5 8.33333L10 13.3333L15 8.33333L13.825 7.15833Z"
                  fill="#56597B"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      {showMore ? (
        <div className="show-button-container">
          <svg
            onClick={() => handleShowMore()}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.175 12.8416L10 9.02496L13.825 12.8416L15 11.6666L10 6.66663L5 11.6666L6.175 12.8416Z"
              fill="black"
            />
          </svg>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EventDetail;
