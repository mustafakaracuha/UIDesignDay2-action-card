import React from "react";
import MailInput from "./mailInput";
import Avatar from "./avatar";

export default function Card() {
  return (
    <>
      <div className="box">
        <div className="main">
          <div className="question">
            <h1>Already working together?</h1>
          </div>
          <div className="description">
            <p>Log in into your account and connect with your teammates!</p>
          </div>
          <div className="mailInput">
            <MailInput />
          </div>
          <Avatar />
        </div>
      </div>

    </>
  );
}
