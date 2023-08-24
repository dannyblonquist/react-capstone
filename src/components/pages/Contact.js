import "../../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us!</h1>
      <label>First</label>
      <input type="text" />
      <label>Last</label>
      <input type="text" />
      <label>Email</label>
      <input type="text" placeholder="someone@example.com" />
      <label>Message:</label>
      <textarea />
      <button>Submit</button>
    </div>
  );
};
export default Contact;
