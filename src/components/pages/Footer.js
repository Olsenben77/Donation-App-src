import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div id="button"></div>
      <div id="container">
        <div id="cont">
          <div class="container">
            <div class="row">
              <div class="col m6 s12">
                <h5 style={{ color: "white" }}>Contact Us:</h5>
              </div>
              <div class="col m6 s12">
                <h5 class="white-text center">Meet The Engineers</h5>
                <div class="row">
                  <div class="col m3 s12">
                    <a href="https://github.com/ariehh1">
                      Ari <br></br> Horowitz
                      <img
                        className="teammate"
                        src="../../../assets/images/Ari.jpeg"
                        alt="Ari"
                      />
                    </a>
                  </div>
                  <div class="col m3 s12">
                    <a href="https://github.com/Vaughnsmcp">
                      Vaughn McPherson
                      <img
                        class="teammate"
                        src="../../../assets/images/Vaughn.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="col m3 s12">
                    <a href="https://github.com/FlashOTFR">
                      Randy Burgess
                      <img
                        class="teammate"
                        src="../../../assets/images/Randy.jpeg"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                  <div class="col m3 s12">
                    <a href="https://github.com/Issouf03">
                      Issouf <br></br> Kiema
                      <img
                        class="teammate"
                        src="../../../assets/images/Iss.JPG"
                        alt=""
                        srcset=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
                <p class="white-text text-lighten-3 center">
                  Copyright &copy; All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_center"></div>
      </div>
    </div>
  );
}
export default Footer;
