import React from "react";
import arrow from "../assets/img/arrow.png";

export default function MailInput() {
  return (
    <>
      <input className="mailInp" placeholder="youremail@address.com" />
      <span>
        <button>
          <img width={25} src={arrow} alt="" />
        </button>
      </span>
    </>
  );
}
