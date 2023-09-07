import { useState } from "react";

import "../../styles/contact.scss";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">
      <h1>Contact Us!</h1>
      <label>First:</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleInput}
      />
      <label>Last:</label>
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleInput}
      />
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleInput}
        placeholder="someone@example.com"
      />
      <label>Message:</label>
      <textarea name="message" value={message} onChange={handleInput} />
      <button onClick={handleClear}>Submit</button>
    </div>
  );
};
export default Contact;
