import React from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import "./style.css";
class ThankYou extends React.Component {
  render() {
    return (
      <div className="thankyou">
          <div className="thankyouCard">
          <Row style={{backgroundColor:'#ec5051'}}>
              <Col lg={16}>
              </Col>
              <Col className="topBar" lg={8}>
                <div>
                <p>00:23:58:20
                </p>
                <span>DAYS &nbsp;&nbsp; HR &nbsp;&nbsp; MIN &nbsp;&nbsp; SEC
                </span>
                </div>
              </Col>
          </Row>
          <Row className="cardBody">
             <Col className="leftSide" lg={10}>
             <center><p style={{fontSize:'16px',color:'gray'}}>4-Day/3-Night</p>
             <h2>$199 Williamsburg Vacation</h2>
             <p style={{fontSize:'16px', marginTop:'20px', fontWeight:'bold', color:'#4288be', letterSpacing:'2px'}}>OFFER DETAILS</p>
             </center>
             <div className="dataTable">
                 <div className="dataRow">
                     <p><strong>Destination:</strong> <span style={{marginLeft:'50px'}}>Williamsburg Virginia</span></p>
                 </div>
                 <div style={{backgroundColor:'#f9f9f9'}} className="dataRow">
                     <p><strong>Days & Nights:</strong> <span style={{marginLeft:'30px'}}>4-Day/3-Night</span></p>
                 </div>
                 <div className="dataRow">
                     <p><strong>Date of Travel:</strong> <span style={{marginLeft:'33px'}}>Open 12 months to book</span></p>
                 </div>
                 <div style={{backgroundColor:'#f9f9f9'}} className="dataRow">
                     <p><strong>Normal Price:</strong> <span style={{marginLeft:'40px'}}>$507 Per Family</span></p>
                 </div>
                 <div className="dataRow">
                     <p><strong>Orignal Price:</strong> <span style={{marginLeft:'40px'}}><strong>$159</strong> Per Family For All Three Nights</span></p>
                 </div>
                 <div style={{backgroundColor:'#f9f9f9'}} className="dataRow">
                     <p><strong>Bonus</strong> <span className="last_row" style={{marginLeft:'90px'}}><strong>$100 AMEX GIFT CARD or Attraction Tickets</strong></span></p>
                 </div>
             </div>
             </Col>
             <Col lg={2}></Col>
             <Col className="rightSide" lg={12}>
                 <h1>Wait, There's More!</h1>
                 <div className="bluePanel"><h2>Call Now & We'll Gift You A Cruise
                     </h2></div>
                     <Row>
                         <Col lg={10} className="details">
                         <img src={require("../../Images/vc-hero.jpg")}/>
                         </Col>
                         <Col lg={14} className="details">
                        <h3>3-night Cruise for two adults</h3>
                        <p>Receive a complimentary 3-night, fun-filled Cruise for two. All your faboulas meals and exciting ship-board entertainment are included during your cruise </p>
                         <Button>Call Now 407-801-5291</Button>
                         </Col>
                     </Row>
             </Col>
          </Row>
          <br/><br/>
          </div>
      </div>
    );
  }
}

export default ThankYou;
