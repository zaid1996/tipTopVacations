import React from "react";
import {
  Row,
  Col,
  Steps,
  Calendar,
  Switch,
  Form,
  Input,
  Select,
  Checkbox,
  Button, 
  Statistic
} from "antd";
import {Link} from "react-router-dom"
import "antd/dist/antd.css";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";

const { Step } = Steps;
const { Option } = Select;
const stepStyle = {
  marginBottom: 60,
  boxShadow: "0px -1px 0 0 #e8e8e8 inset",
  marginTop: "5%"
};
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

class Checkout extends React.Component {
  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  render() {
    var orderDetails = <Link style={{color:'black'}} to="/">Order Details</Link>
    var paymentDetails = <Link style={{color:'black'}} to="/checkOut">Payment Details</Link>
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    return (
      <div>
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <div className="selectDates">
          <Row>
            <Col lg={24}>
              <Steps
                type="navigation"
                size="small"
                current={1}
                style={stepStyle}
              >
                <Step title={orderDetails} status="completed" />
                <Step title={paymentDetails} status="process" />
              </Steps>
            </Col>
            <Col
              style={{
                backgroundColor: "white",
                padding: "10px"
              }}
              lg={12}
            >
              <div className="checkout-billing-info">Billing Info</div>
              <Form style={{ padding: "20px" }}>
                <Row>
                  <Col lg={24}>
                    <span className="checkout-billing-title">Your Address</span>
                    <Input style={{ width: "95%" }} placeholder="Address" />
                  </Col>
                  <Col lg={24}>
                    <br />
                    <span className="checkout-billing-title">
                      Billing Zip Code
                    </span>
                    <Input style={{ width: "95%" }} placeholder="Full Name" />
                  </Col>
                  <hr style={{ marginTop: "45%" }} />
                  <Col lg={24}>
                    <br />
                    <div className="checkout-billing-info">Payment Info</div>
                  </Col>
                  <Col lg={12}>
                    <br />
                    <span className="checkout-billing-title">
                      Credit Number
                    </span>
                    <Input style={{ width: "97%" }} placeholder="Phone" />
                  </Col>
                  <Col lg={12}>
                    <br />
                    <span className="checkout-billing-title">CVV</span>
                    <Input style={{ width: "97%" }} placeholder="Phone" />
                  </Col>
                  {/* <Col lg={24}>
                    <div class="checkout-billing-info">Number of Travelers</div>
                  </Col> */}
                  <Col style={{ padding: "20px" }} lg={12}>
                    <span style={{ fontSize: "18px" }}>Expiration Month</span>
                    <br />
                    <Select defaultValue="0" style={{}}>
                      <Option value="jack">0</Option>
                      <Option value="lucy">1</Option>
                      <Option value="Yiminghe">2</Option>
                    </Select>
                  </Col>
                  <Col style={{ padding: "20px" }} lg={12}>
                    <span style={{ fontSize: "18px" }}>Expiration Year</span>
                    <br />
                    <Select defaultValue="0" style={{}}>
                      <Option value="jack">0</Option>
                      <Option value="lucy">1</Option>
                      <Option value="Yiminghe">2</Option>
                    </Select>
                  </Col>
                  <Col lg={24}>
                    <center>
                      <img src={require("../../Images/creditCard.png")} />
                    </center>
                  </Col>
                  <Col lg={24}>
                    <Button
                      style={{
                        width: "100%",
                        backgroundColor: "#900e59",
                        color: "white",
                        height: "70px",
                        borderRadius: "10px",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                    >
                      Complete Booking
                    </Button>
                  </Col>
                  <Col lg={24}>
                    <center>
                      <br />
                      <p style={{ fontSize: "12px" }}>
                        All Bookings have a 14 day money back guarantee and 24
                        months to travel
                      </p>
                    </center>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col
              style={{ backgroundColor: "white", marginLeft: "30px" }}
              lg={11}
            >
              <div className="image-box">
                <div
                  className="image-box__background"
                ></div>
                <div className="image-box__overlay"></div>
                <div className="image-box__content">
                  <center><h1 style={{color:'white', backgroundColor:'rgba(0, 0, 0, 0.5)'}}>4 DAY ORLANDO THEME PARK ADVENTURE</h1></center>
                </div>
              </div>
              <div style={{padding:'25px'}}>
              <h3 style={{fontSize:'18px'}}>Limited Reservations</h3>
              <p style={{fontSize:'16px'}}>Reserved For:</p>
              <center> <Countdown value={deadline} format="HH:mm:ss" /></center>
              <center><p style={{fontSize:'16px'}}>The <strong>4 Day Orlando Theme Park</strong> is in high demand. No worries, we hae reserved booking for 10 minutes! </p></center>
              </div>
              <hr/>
              <br />
              <Row>
                <Col lg={24}>
                <h3 style={{fontSize:'18px', marginLeft:'40px'}}>Booking Review</h3>
                </Col>
                <Col lg={12}>
                  <ul className="pts">
                    <li><img src={require("../../Images/tick.png")} /><strong>Dates:</strong>   02/22/2019</li>
                    <li><img src={require("../../Images/tick.png")} /><strong>Days:</strong>   4 <strong>Night:</strong>  3 </li>
                    <li><img src={require("../../Images/tick.png")} /><strong>Name:</strong>   L  D</li>
                    <li><img src={require("../../Images/tick.png")} /><strong>Guests:</strong>   4 Adults 0 Kid</li>
                    <li><img src={require("../../Images/tick.png")} /><strong>Phone:</strong>   02232992</li>
                    <li><img src={require("../../Images/tick.png")} /><strong>Email:</strong>   id@tsmlabs.com</li>
                  </ul>
                </Col>
              </Row>
              <hr />
              <br />
              <br />
              <Row>
                <Col lg={24}>
                  <h3 className="booking-contact-text">
                    Need help? Contact us now{" "}
                  </h3>
                  <center>
                    <a
                      className="booking-mail-contact"
                      href="mailto:booking@tiptopvacation.com"
                    >
                      booking@tiptopvacation.com
                    </a>
                  </center>
                </Col>
              </Row>
              <br />
              <br />
              <hr />
              <Row>
                <Col style={{padding:'10px'}} lg={24}>
                  <img style={{width:'100%'}} src={require("../../Images/cc-accepted.png")}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Form.create({ name: "checkout" })(Checkout);
