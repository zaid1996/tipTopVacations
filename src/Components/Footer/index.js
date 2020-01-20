import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./style.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <hr />
        <Row style={{ marginLeft: "10%", marginRight: "10%", padding: "15px" }}>
          <Col lg={8}>
            <img
              className="logo"
              src={require("../../Images/tiptopvacation_logo.png")}
            />
          </Col>
          <Col lg={10}>
            <ul>
              <li>
                <a>Terms and Conditions</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col className="navContact" lg={6}>
            <div className="header-center ">
              <div className="call-now">
                <div className="contact-phone">
                  <img
                    alt="Call Now 1-702-707-6622"
                    src="https://tiptopvacation.com/img/phone-call.png"
                  />
                </div>
                <div className="more-info">
                  <div className="need-help">Need Help Booking?</div>
                  <div>
                    <a className="phone-link" href="tel:1-702-707-6622">
                      1-702-707-6622
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <hr style={{ marginTop: "60px" }} />
          <Col lg={6}>
            <div class="footer-col">
              <div class="footer-item">
                <span
                  style={{
                    fontSize: "18px",
                    color: "black",
                    fontWeight: "bold",
                    color: "#4a4a4a"
                  }}
                  class="vc-title"
                >
                  Reservation Dept Hours
                </span>
                <div class="item-box">
                  <span class="vc-address">Monday — Friday</span>
                  <br />
                  <span class="vc-address">10:00 AM to 9:00 PM (ET)</span>
                </div>
                <div class="item-box">
                  <span class="vc-address">Saturday</span>
                  <br />
                  <span class="vc-address">10:00 AM to 3:00 PM (ET)</span>
                </div>
              </div>
            </div>
          </Col>
          <Col className="social" lg={8}>
            <ul>
              <li>
                <span
                  style={{
                    fontSize: "18px",
                    color: "black",
                    fontWeight: "bold",
                    color: "#4a4a4a"
                  }}
                  class="vc-title"
                >
                  Contact Us
                </span>
              </li>
              <br />
              <br />
              <li>
                <img src={require("../../Images/mail.png")} />{" "}
                support@tiptopvacation.com
              </li>
              <br />
              <br />
              <li>
                <img src={require("../../Images/insta.png")} /> @tiptopvacation
              </li>
              <br />
              <br />
              <li>
                <img src={require("../../Images/fb.png")} /> @TipTopVacationCom
              </li>
              <br />
              <br />
              <li>
                <img src={require("../../Images/twitter.png")} />{" "}
                @tiptopvacation
              </li>
            </ul>
          </Col>
          <Col lg={10}>
            <span class="footer-terms">
              This advertising material is being used for the purpose of
              soliciting sales of vacation ownership interest or plans.
            </span>
            <br />
            <br />
            <span class="footer-terms-details">
              Your privacy and protection of your personal information is of our
              utmost importance, personal data is never shared to third parties
              and we use SSL encryption the highest level of security. By
              clicking button you consent to receive email, SMS texts and
              telemarketing calls from Automatic telephone dialing system on
              behalf of or its affiliates to the Cellular/Landline telephone you
              have provided regardless of that number being on any Do Not Call
              registry. Your consent does not require purchase, standard
              cellular rates apply.
            </span>
          </Col>
          <hr style={{marginTop:'20%'}} />
          <Col lg={24}>
              <center>
          <div class="copyright-footer">
            Copyright © 2019 TipTop Vacation | All Rights Reserved | ST42227
          </div>
          </center>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
