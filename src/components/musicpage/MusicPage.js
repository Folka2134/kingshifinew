import React from "react";
import "./musicpage.css";
// import Record1 from "../../imgs/labelart/a2601922045_2.jpg";
// import Record2 from "../../imgs/labelart/nattywickedwhite.png";

function musicContainer() {
  return (
    <div className="musicContainer">
      <div className="tc musicGrid">
        <iframe
          title="testframe"
          style={{ border: "0", width: "300px", height: " 300px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=651376934/size=large/bgcol=333333/linkcol=FFBB1C/minimal=true/transparent=true/"
          seamless
        >
          <a href="http://kingshifi.bandcamp.com/album/no-love">
            No Love by Kings Hi-Fi Feat Ruben Da Silva
          </a>
        </iframe>
        <iframe
          title="testframe"
          style={{ border: "0", width: "300px", height: "300px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3040560096/size=large/bgcol=333333/linkcol=FFBB1C/minimal=true/transparent=true/"
          seamless
        >
          <a href="http://kingshifi.bandcamp.com/album/kings-hi-fi-tempo-riddim">
            Kings Hi-Fi Tempo Riddim by KINGS HI FI
          </a>
        </iframe>
        <iframe
          title="testframe"
          style={{ border: "0", width: "300px", height: "300px" }}
          src="https://bandcamp.com/EmbeddedPlayer/track=2477559240/size=large/bgcol=333333/linkcol=FFBB1C/minimal=true/transparent=true/"
          seamless
        >
          <a href="http://kingshifi.bandcamp.com/track/khf001-wicked-wild-ft-natty-campbell">
            KHF001 - Wicked &amp; Wild Ft. Natty Campbell by Don Zebz X Joy
          </a>
        </iframe>
      </div>
    </div>
  );
}

export default musicContainer;
