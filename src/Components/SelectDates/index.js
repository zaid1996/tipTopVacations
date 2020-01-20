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
    Button
} from "antd";
import {Link} from 'react-router-dom'
import "antd/dist/antd.css";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import axios from 'axios';

const {Step} = Steps;
const {Option} = Select;
const stepStyle = {
    marginBottom: 60,
    boxShadow: "0px -1px 0 0 #e8e8e8 inset",
    marginTop: "5%"
};

class SelectDates extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            first_name :'',
            last_name :'',
            phone_no:'',
            email :'',
            calander:true
        }
    }

    onPanelChange = (value, mode) => {
        console.log(value, mode);
    };

    handlerForm = (e) => {
       // console.log(this.state);
        axios
            .post(`https://vacationmarketing.tsmlabs.com/v1/graphql`,
                {
                    query: `mutation {
                    
                    createLead(first_name: "${this.state.first_name}", last_name: "${this.state.last_name}", email: "${this.state.email}", phone_number: "${this.state.phone_no}") {
                         id
                         first_name
                         last_name
                         email
                         phone_number
                        }
                     }
                 `,
                })
            .then(res => {
                alert('data inserted');
                console.log(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })

    };

    handlerFirstName = e => {
        this.setState({
            first_name : e.target.value
        })
    };

    handlerLastName = e => {
        this.setState({
            last_name : e.target.value
        })
    };

    handlerEmail = e => {
        this.setState({
            email : e.target.value
        })
    };

    handlerPhoneNo = e => {
        this.setState({
            phone_no : e.target.value
        })
    };

    onSwitchChange = e => {
      if(!e){
          console.log("d")
          document.getElementById("dates").style.display = "none"
          document.getElementById("days").style.display = "none"
          this.setState({
              calander:false
          })
      }
      else {
        console.log("d")
        document.getElementById("dates").style.display = "block"
        document.getElementById("days").style.display = "block"
        this.setState({
            calander:true
        })
      }
    }

    render() {
        var orderDetails = <Link style={{color:'black'}} to="/">Order Details</Link>
        var paymentDetails = <Link style={{color:'black'}} to="/checkOut">Payment Details</Link>
        const {getFieldDecorator} = this.props.form;
        const prefixSelector = getFieldDecorator("prefix", {
            initialValue: "86"
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );
        return (
            <div>
                <NavBar/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="selectDates">
                    <Row>
                        <Col lg={8}>
                            <h4 className="vacation-description">Cancun, MX</h4>
                            <p className="listing-title">Cancun Dream Vacation for 2</p>
                        </Col>
                        <Col lg={8}>
                            <div className="price-side-inner">
                                <div className="my-rating"></div>
                                <p style={{fontSize: "16px"}} className="retail-price">
                                    Compare From: <span class="original-price">$1799.99</span>
                                </p>
                                <p style={{fontSize: "16px", marginTop: "-10px"}}>
                                    <strong>Price per family</strong>
                                </p>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="price-side-inner">
                                <p
                                    style={{fontSize: "35px", color: "rgb(144, 14, 89)"}}
                                    class="checkout-retail-price"
                                >
                                    $249
                                </p>
                            </div>
                        </Col>
                        <Col lg={24}>
                            <Steps
                                type="navigation"
                                size="small"
                                current={0}
                                style={stepStyle}
                            >
                                <Step title={orderDetails} status="process"/>
                                <Step title={paymentDetails} status="completed"/>
                            </Steps>
                        </Col>
                        <Col style={{backgroundColor: "white", padding: "10px"}} lg={11}>
                            <div class="checkout-billing-info">
                                Have your dates?
                                <Switch
                                    style={{float: "right"}}
                                    checkedChildren="YES"
                                    unCheckedChildren="NO"
                                    defaultChecked
                                    onChange={this.onSwitchChange}
                                />
                            </div>
                            {this.state.calander?<span><Calendar id="calander" fullscreen={false} onPanelChange={this.onPanelChange}/><hr/></span>:
                            <div className="image-box">
                            <div
                              className="image-box__background"
                            ></div>
                            <div className="image-box__overlay"></div>
                            <div className="image-box__content">
                              <center><h1 style={{color:'white', backgroundColor:'rgba(0, 0, 0, 0.5)', letterSpacing:'8px'}}>BONUS CRUISE ACTIVATED</h1></center>
                            </div>
                          </div>
                            }
                            
                            <br/>
                            <Row id="dates">
                                <Col lg={12}>
                                    <h2 className="booking-days-title">Checkin Date</h2>
                                    <h2 className="booking-days-date">14 January</h2>
                                </Col>
                                <Col lg={12}>
                                    <h2 className="booking-days-title">Checkout Date</h2>
                                    <h2 className="booking-days-date">18 January</h2>
                                </Col>
                            </Row>
                            <Row id="days">
                                <Col lg={24}>
                                    <div className="booking-days-container">5 Days 4 Nights</div>
                                </Col>
                            </Row>
                            <hr/>
                            <br/><br/>
                            <Row>
                                <Col lg={24}>
                                    <h3 className="booking-contact-text">Need help? Contact us now </h3>
                                    <center><a className="booking-mail-contact"
                                               href="mailto:booking@tiptopvacation.com">booking@tiptopvacation.com</a>
                                    </center>
                                </Col>
                            </Row>
                            <br/><br/>
                            <hr/>
                            <Row>
                                <Col lg={24}>
                                    <div className="travel-now  d-flex justify-content-center">All bookings have a 14
                                        day money back guarantee and 12 months to travel.
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                        </Col>
                        <Col
                            style={{
                                backgroundColor: "white",
                                marginLeft: "30px",
                                padding: "10px"
                            }}
                            lg={12}
                        >
                            <div className="checkout-billing-info">Primary Traveller</div>
                            <Form style={{padding: "20px"}}>
                                <Row>
                                    <Col lg={12}>
                                        <span className="checkout-billing-title">First Name</span>
                                        <Input
                                            value={this.state.first_name}
                                            style={{width: "95%"}}
                                            placeholder="Full Name"
                                            onChange={this.handlerFirstName}
                                        />
                                    </Col>
                                    <Col lg={12}>
                                        <span className="checkout-billing-title">Last Name</span>
                                        <Input
                                            value={this.state.last_name}
                                            style={{width: "95%"}}
                                            placeholder="Full Name"
                                            onChange={this.handlerLastName}
                                        />
                                    </Col>
                                    <Col lg={24}>
                                        <br/>
                                        <span className="checkout-billing-title">Phone</span>
                                        <Input
                                            value={this.state.phone_no}
                                            style={{width: "97%"}}
                                            placeholder="Phone"
                                            onChange={this.handlerPhoneNo}
                                        />
                                    </Col>
                                    <Col lg={24}>
                                        <br/>
                                        <span className="checkout-billing-title">Email</span>
                                        <Input
                                            value={this.state.email}
                                            style={{width: "97%"}}
                                            placeholder="Phone"
                                            onChange={this.handlerEmail}
                                        />
                                        <span style={{fontSize: "12px"}}>
                                            We'll never share your email with anyone else.
                                        </span>
                                        <hr style={{marginTop: "10px"}}/>
                                    </Col>
                                    <Col lg={24}>
                                        <div class="checkout-billing-info">Number of Travelers</div>
                                    </Col>
                                    <Col style={{padding: "20px"}} lg={12}>
                                        <span style={{fontSize: "18px"}}>Adults</span>
                                        <br/>
                                        <Select defaultValue="0" style={{}}>
                                            <Option value="jack">0</Option>
                                            <Option value="lucy">1</Option>
                                            <Option value="Yiminghe">2</Option>
                                        </Select>
                                    </Col>
                                    <Col style={{padding: "20px"}} lg={12}>
                                        <span style={{fontSize: "18px"}}>Children</span>
                                        <br/>
                                        <Select defaultValue="0" style={{}}>
                                            <Option value="jack">0</Option>
                                            <Option value="lucy">1</Option>
                                            <Option value="Yiminghe">2</Option>
                                        </Select>
                                    </Col>
                                    <Col lg={24}>
                                        <center>
                                            <p style={{fontSize: "14px"}}>
                                                <Checkbox style={{marginRight: "10px"}}/>I have read
                                                and agree to the <a>Terms and Conditions</a> and{" "}
                                                <a>Privacy Policy</a>
                                            </p>
                                        </center>
                                    </Col>
                                    <Col lg={24}>
                                        <Button
                                            onClick={this.handlerForm}
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
                                            Continue Booking
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Form.create({name: "register"})(SelectDates);
