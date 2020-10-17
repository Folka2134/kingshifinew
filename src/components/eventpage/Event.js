import React from "react";
import "./event.css";

const EventPage = () => {
  return (
    <div className="tc eventContainer">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/kingshifi/"
        data-tabs="timeline"
        data-width="500"
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/kingshifi/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/kingshifi/">Kings Hi-Fi</a>
        </blockquote>
      </div>
    </div>
  );
};

export default EventPage;
