import React, { useState } from "react";
import arrow from "../assets/img/arrow.png";

export default function MailInput() {
  const [mail, setMail] = useState("");

  const emailSend = () => {
    window.location = `mailto:${mail}`;
    setMail("");
  };

  return (
    <>
      <input
        className="mailInp"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        placeholder="youremail@address.com"
      />
      <span>
        <button onClick={emailSend}>
          <img width={25} src={arrow} />
        </button>
      </span>
    </>
  );
}
