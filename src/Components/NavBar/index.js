import React from "react";
import {Row, Col} from "antd";
import "antd/dist/antd.css";
import "./style.css";

class NavBar extends React.Component {
    render() {
        return (
            <div className="navWrapper">
                <Row className="topBar">
                    <Col lg={6} md={12} sm={12} xs={10}>
                        <img
                            className="logo"
                            src={require("../../Images/tiptopvacation_logo.png")}
                        />
                    </Col>
                    <Col className="navContact" lg={8} md={0} sm={0} xs={0}>
                        <div class="header-center ">
                            <div class="call-now">
                                <div class="contact-phone"><img alt="Call Now 1-702-707-6622"
                                                                src="https://tiptopvacation.com/img/phone-call.png"/>
                                </div>
                                <div class="more-info">
                                    <div class="need-help">Need Help Booking?</div><br/><br/>
                                    <div><a class="phone-link" href="tel:1-702-707-6622">1-702-707-6622</a></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={10} md={12} sm={12} xs={24}>
                        <button class="bonus-gift-button"><img src={require("../../Images/gift.png")}/>Bonus
                            Gift <br/><br/><br/> Activated!
                        </button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NavBar;
