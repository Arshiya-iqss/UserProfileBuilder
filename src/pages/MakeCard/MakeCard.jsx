import { useState } from "react";
import { Countries } from "../../resources/resources";
import "./MakeCardStyles.scss";
import { useNavigate } from "react-router-dom";

function MakeCard(props) {
  const [img, setImg] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [child, setChild] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState(Countries[0].country);
  const [countryCode, setCountryCode] = useState(
    Countries.find((data) => data.country === country)
  );
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");

  const navigate = useNavigate();

  function SubmitForm(e) {
    e.preventDefault();
    // console.log("country - ", country, Countries.indexOf(country));
    if (img !== "") {
      const userDetails = {
        img,
        fName,
        lName,
        email,
        child,
        dob,
        address,
        pincode,
        country,
        countryCode: Countries.find((data) => data.country === country).iso2,
        number,
        gender,
        profession,
        experience,
      };

      setCountryCode();
      console.log(userDetails);
      MoveToCard(userDetails);
      // console.log(Countries.find((data) => data.country === country));
    } else {
      alert("Please choose an image before proceeding further");
      return;
    }
  }

  const MoveToCard = (userDetails) => {
    navigate("card", { state: userDetails });
  };
  return (
    <>
      <div className="cardContainer">
        <h1>Generate Card</h1>
        <form className="formContainer" onSubmit={(e) => SubmitForm(e)}>
          <div className="fcardContainer">
            {/* <button className="fileUpload"> */}
            <label className="fileUpload" htmlFor="myFileInput">
              {img ? (
                <img
                  className="uploadImage"
                  src={img && img}
                  alt="Upload Image"
                />
              ) : (
                <img
                  className="uploadImagePlaceholder"
                  src={"../images/icons8-camera-50.png"}
                  alt="Upload Image"
                />
              )}
            </label>

            {/* <p className="pTag">+ Add Image</p> */}
            <input
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setImg(imageUrl);
                }
              }}
              id="myFileInput"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              hidden
            />

            {/* </button> */}
          </div>
          <div className="fieldItems">
            <div className="inputLine">
              <label htmlFor="fName">First Name</label>
              <input
                onChange={(e) => setFName(e.target.value)}
                type="text"
                placeholder="Please enter your first name"
                id="fName"
                required
              />
            </div>
            <div className="inputLine">
              <label htmlFor="lName">Last Name</label>
              <input
                onChange={(e) => setLName(e.target.value)}
                type="text"
                placeholder="Please enter your last name"
                id="lName"
                required
              />
            </div>
            <div className="inputLine">
              <label htmlFor="email">Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Please enter your email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="fieldItems">
            <div className="inputLine">
              <label htmlFor="child">Son/Daughter of</label>
              <input
                onChange={(e) => setChild(e.target.value)}
                type="text"
                placeholder="Son/Daughter of"
                id="child"
                required
              />
            </div>
            <div className="inputLine">
              <label htmlFor="dob">Date of Birth</label>
              <input
                onChange={(e) => setDob(e.target.value)}
                type="date"
                placeholder="Please enter your dob"
                id="dob"
                required
              />
            </div>
            <div className="inputLine">
              <label htmlFor="address">Address</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Please enter your Address"
                id="address"
                required
              />
            </div>
          </div>
          <div className="fieldItems">
            <div className="inputLine">
              <label htmlFor="pincode">Pin Code</label>
              <input
                onChange={(e) => setPincode(e.target.value)}
                type="number"
                placeholder="Please enter your Pincode"
                id="pincode"
                required
              />
            </div>
            <div className="inputLine">
              <label htmlFor="country">Country</label>
              <select
                onChange={(e) => {
                  setCountry(e.target.value);
                  // setCountryCode((prevState) =>
                  //   Countries.find((data) => data.country === country)
                  // );
                }}
                className="selectField"
                defaultValue={Countries[0].country}
              >
                {Countries.map((data, index) => {
                  return (
                    <option key={data.iso2 + index} defaultValue={data.country}>
                      {data.country}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="inputLine">
              <label htmlFor="number">Phone Number</label>
              <input
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Please enter your phone number"
                id="number"
                required
              />
            </div>
          </div>
          <div className="fieldItems">
            <div className="inputLine">
              <label htmlFor="gender">Gender</label>
              <select
                className="selectField"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male" selected>
                  Male
                </option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="inputLine">
              <label htmlFor="profession">Profession</label>
              <input
                onChange={(e) => setProfession(e.target.value)}
                type="text"
                placeholder="Please enter your Profession"
                id="profession"
                required
              />
            </div>
            <div className="inputLine">
              <label htmlFor="experience">Experience</label>
              <input
                onChange={(e) => setExperience(e.target.value)}
                type="number"
                placeholder="Please enter your experience in years"
                id="experience"
                required
              />
            </div>
          </div>

          <input type="submit" value="Generate Card" className="submitButton" />
        </form>
      </div>
    </>
  );
}

export default MakeCard;
