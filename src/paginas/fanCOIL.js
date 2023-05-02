import React from "react";
import fain_COIL from "../images/fan_coil.avif";
import CFM from "../images/f2.avif";
import YDFC from "../images/f4.avif";

const FanCOIL = () => {
  return (
    <>
      <div class="container">
        <h1 class="text-center">FAIN COIL DE AGUA FRÍA</h1>
        <div class="row ">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card" style={{ width: "100%" }}>
              <img src={fain_COIL} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">CFM: 250 to 1,200 CFM</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Más detalles
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card" style={{ width: "100%" }}>
              <img src={CFM} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">CFM: 600 to 2,000 CFM</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Más detalles
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card" style={{ width: "100%" }}>
              <img src={YDFC} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">YDFC</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Más detalles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FanCOIL;
