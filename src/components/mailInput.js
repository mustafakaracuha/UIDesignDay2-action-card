import React, { useState } from "react";
import arrow from "../assets/img/arrow.png";

export default function MailInput() {
  const [mail, setMail] = useState("youremail@address.com");

  return (
    <>
      <input
        className="mailInp"
        onChange={(e) => setMail(e.target.value)}
        placeholder={mail}
      />
      <span>
        <button onClick={() => (window.location = `mailto:${mail}`)}>
          <img width={25} src={arrow} />
        </button>
      </span>
    </>
  );
}