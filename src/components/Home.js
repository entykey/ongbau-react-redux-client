import React, { useState, useEffect } from "react";
import MacTerminal from "./tailwindcomponents/MacTermnial";
import SimpleTerminal from "./tailwindcomponents/SimpleTerminal";
import TailwindInput from "./tailwindcomponents/TailwindInput";


import UserService from "../services/user.service";
import TailwindForm from "./tailwindcomponents/TailwindForm";
import TailwindForm1 from "./tailwindcomponents/TailwindForm1";


const Home = () => {
  const [content, setContent] = useState("");

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
      <header className="jumbotron">
        <h3>{content}</h3>

        <MacTerminal />
        {/* <SimpleTerminal /> */}
        {/* <TailwindInput /> */}
        {/* <TailwindForm /> */}
        {/* <TailwindForm1 /> */}
        
      </header>
    </div>
  );
};

export default Home;
