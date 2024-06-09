import "./About.css";
import React, { Component } from "react";
import ProfilePic from "../assets/profile-pic.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={ProfilePic}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Ryland Birchmeier</div>
              <div className="brief_description">
                {`
                  > Hi 👋 I'm Ryland Birchmeier, a rising 3rd year Rodman Scholar
                  @ UVA (University of Virginia) School of Engineering and Applied
                  Science. I'm a computer science major with minors in
                  entrepreneurship and data science. My biggest passions are ML
                  Engineering, Full Stack Development, Data Science, MLOps,
                  Computer Hardware, and making things that make people happy. I
                  spend a lot of time learning new technologies and writing songs
                  (RYGS on Spotify). I also run a lot, play pickleball, and listen
                  to music (mostly EDM and Pop). If you want to chat, collaborate,
                  or just say hi, please reach out - I love meeting new people 😊.
                `}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
