import React from "react";
import "./GeneratedCardStyles.scss";
import { useLocation } from "react-router-dom";

function GeneratedCard() {
  const { state: userDetails } = useLocation();
  console.log(userDetails);
  const SavePdf = () => {
    window.print();
  };

  if (userDetails) {
    return (
      <div className="generatedCardDiv">
        <div
          className="box"
          style={{
            backgroundImage: `url(${`https://flagcdn.com/${userDetails.countryCode.toLowerCase()}.svg`})`,
            className: "bgImg",
          }}
        >
          <div className="flag">
            <img
              className="flagImg"
              src={`https://flagcdn.com/${userDetails.countryCode.toLowerCase()}.svg`}
            />

            <h1>Citizen Of {userDetails.country}</h1>
          </div>

          <div className="cardDetails1">
            <div className="LogoImg">
              <img src={userDetails.img} alt="user" />
            </div>
            <div className="section1">
              <div className="name">
                <p>Name: </p>
                <h5>
                  {userDetails.fName} {userDetails.lName}
                </h5>
              </div>
              <div className="section2">
                <div className="dob">
                  <p>DOB:</p>
                  <h5>{userDetails.dob}</h5>
                </div>
                <div className="gender">
                  <p>Gender: </p>
                  <h5>{userDetails.gender}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="cardDetails2">
            <div className="sign">
              <h1>{userDetails.fName}</h1>
            </div>
            <div className="afterSign">
              <div className="address">
                <p>Address:</p>
                <h5>{userDetails.address}</h5>
              </div>
              <div className="number">
                <p>Phone Number: </p>
                <h5>{userDetails.number}</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          className="box"
          style={{
            backgroundImage: `url(${`https://flagcdn.com/${userDetails.countryCode.toLowerCase()}.svg`})`,
          }}
        >
          <div className="cardDetails3">
            <div className="father">
              <p>Son/Daughter of:</p>
              <h5>{userDetails.child}</h5>
            </div>
            <div className="dob">
              <p>Date of Birth: </p>
              <h5> {userDetails.dob}</h5>
            </div>
          </div>

          <div className="cardDetails3">
            <div className="email">
              <p>Email: </p>
              <h5>{userDetails.email}</h5>
            </div>
          </div>
          <div className="cardDetails3">
            <div className="profession">
              <p>Profession: </p>
              <h5>{userDetails.profession}</h5>
            </div>
            <div className="experience">
              <p>Experience: </p>
              <h5>{userDetails.experience}</h5>
            </div>
          </div>
          <div className="cardDetails3">
            <div className="pincode">
              <p>Pincode: </p>
              <h5>{userDetails.pincode}</h5>
            </div>
            <div className="country">
              <p>Country: </p>
              <h5>{userDetails.country}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <>Card cannot be generated!!!</>;
  }
}

export default GeneratedCard;
