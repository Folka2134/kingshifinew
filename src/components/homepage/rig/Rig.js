import React from "react";
import "./rig.css";
import Rig from "../../../imgs/boomboxes.jpg";

const RigPage = () => {
  return (
    <div className="tc rigContainer">
      <div className="rigTitle rig" id="sound">
        Sound System
      </div>
      <div className="rigText rig">
        <p data-aos="fade">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
          amet tellus est. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Integer feugiat mi nec
          metus fringilla sagittis. Maecenas sed dapibus urna, a ullamcorper mi.
          Vivamus in velit urna. Vestibulum vel commodo nisi. Curabitur egestas
          auctor consectetur. Mauris porttitor ac sem non vulputate. Curabitur
          vitae urna mauris. Cras malesuada facilisis malesuada.
        </p>
        <p data-aos="fade">
          Fusce at varius neque. Nam vitae ipsum ac odio blandit rutrum eu sit
          amet nisl. Nunc ut eros nec lorem laoreet blandit ac vel dolor. In nec
          tempus erat. Pellentesque sodales sit amet nibh ac varius. Aliquam
          purus ipsum, pretium in tempor ac, scelerisque ac dolor. Nam viverra
          ex leo, vel commodo tortor vehicula non. Ut gravida aliquam lobortis.
          Mauris velit risus, cursus quis scelerisque facilisis, pretium in
          felis.
        </p>
      </div>
      <div className="rigPic rig">
        <img alt="rig" src={Rig} />
      </div>
    </div>
  );
};

export default RigPage;
