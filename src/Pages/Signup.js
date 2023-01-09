import React from "react";
import RegSlider from "../Components/RegSlider";
import "./Signup.css";
import RegisterDetails from "../Components/Widgets/RegisterDetails/RegisterDetails";
import { useState } from "react";
import { Otp } from "../Components/Widgets/RegisterDetails/Otp";
import { StepProgressBar } from "../Components/Widgets/StepProgressBar/StepProgressBar";
import { RegInfo } from "../Components/Widgets/RegisterDetails/RegInfo";
import axios from "axios";
import Login2 from "../Components/Login2";

export default function Signup() {
  const [index, setIndex] = useState(1);
  const [vCode, setVCode] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [pNumber, setPnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [response,setResponse] = useState("");
  const [resCode , setResCode] = useState(0);
  const sendOtp = () => {
    setOtpSent(true);
    next();
  };

  const user = {
    firstName: "11121",
    lastName: "121",
    contactNumber: "9507046486",
    email: "anan7272@gmail.com",
    password: "12345678",
    
  };
  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // const api = axios.create({
  //   baseURL: `http://localhost:3000/api/signup`,
  // });
  // api.post("", user).then((res) => console.log(res));
  const next = () => {
    setIndex(index + 1);
  };
  return (
    <div className="Register-Page grid md:grid-cols-2 grid-cols-1 h-screen ">
      <div className="first-p">
        <div
          className={
            otpSent ? "first-div-hidden" : " first-div"
          }
        >
          <RegisterDetails
            sendOTP={sendOtp}
            setFname={setFname}
            setLname={setLname}
            setPnumber={setPnumber}
            setEmail={setEmail}
            setPassword={setPassword}
            password={password}
            firstName={fName}
            lastName={lName}
            contactNumber={pNumber}
            email={email}
          />
          {/* <Login2
          sendOTP={sendOtp}
          setFname={setFname}
          setLname={setLname}
          setPnumber={setPnumber}
          setEmail={setEmail}
          setPassword={setPassword}
          password={password}
          firstName={fName}
          lastName={lName}
          contactNumber={pNumber}
          email={email}
          /> */}
        </div>
        <div className={otpSent ? "second-div" : "second-div-hidden"}>
          <Otp
            setOTP={setVCode}
            otp={vCode}
            fName={fName}
            lName={lName}
            pNumber={pNumber}
            email={email}
            password={password}
            next = {next}
            setResCode = {setResCode}
            setResponse = {setResponse}
          />
        </div>
      </div>
      <div className="second-p max-[768px]:hidden">
        <StepProgressBar step={index}/>
        <RegInfo index={index} pNumber={pNumber} response = {response} resCode = {resCode} />
      </div>
    </div>
  );
}
