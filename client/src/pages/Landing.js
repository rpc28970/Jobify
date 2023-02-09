import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            sapien ut magna eleifend mollis. Proin sem lorem, faucibus sit amet
            dictum eu, dictum quis purus. Quisque mollis nulla nisl, sit amet
            fringilla arcu faucibus quis. Maecenas dapibus molestie nibh vitae
            efficitur. Phasellus in sollicitudin nisi. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec mi tellus, aliquam vel
            hendrerit in, gravida at diam. Vestibulum at ipsum nec massa maximus
            maximus. In sit amet auctor felis, non elementum mi. Duis in ligula
            tristique est accumsan venenatis. Nunc pharetra ipsum vel diam
            consequat, in iaculis libero rhoncus. Fusce sit amet blandit diam.
            Etiam sit amet luctus purus. Donec ut libero eu odio tempor blandit
            et vel ex. Sed non dolor eleifend, venenatis lorem sit amet, euismod
            quam.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        {/* image */}
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
