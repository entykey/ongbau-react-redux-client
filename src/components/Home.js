import React, { useState, useEffect } from "react";

import logo from '../assets/logo-subcri.png'
import MacTerminal from "./tailwindcomponents/MacTermnial";
import SimpleTerminal from "./tailwindcomponents/SimpleTerminal";
import TailwindInput from "./tailwindcomponents/TailwindInput";
import SampleCard from "./tailwindcomponents/SampleCard";
import UserService from "../services/user.service";
import TailwindForm from "./tailwindcomponents/TailwindForm";
import TailwindForm1 from "./tailwindcomponents/TailwindForm1";


const Home = () => {
  // const [content, setContent] = useState("");

  useEffect(() => {
    // UserService.getPublicContent().then(
    //   (response) => {
    //     setContent(response.data);
    //   },
    //   (error) => {
    //     const _content =
    //       (error.response && error.response.data) ||
    //       error.message ||
    //       error.toString();

    //     setContent(_content);
    //   }
    // );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron d-flex flex-column align-items-center">
        <h3 style={{margin:'auto',color:'orange'}}>Chào mừng bạn đến dịch vụ Ông Bầu Order</h3>

        <img src={logo} style={{margin: 'auto'}} />
        {/* <MacTerminal /> */}
        {/* <SampleCard /> */}
        {/* <SimpleTerminal /> */}
        {/* <TailwindInput /> */}
        {/* <TailwindForm /> */}
        {/* <TailwindForm1 /> */}
        
      </header>
    </div>
  );
};

export default Home;
