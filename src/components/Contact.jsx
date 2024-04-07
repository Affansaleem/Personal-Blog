import { useState } from "react";
import "../styles/Contact.scss";
import ParticlesComponent from "./Particles";
import Lottie from "lottie-react";
import ContactUs from "../assets/contact.json";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message }); // Example: Log form data
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-section">
      <ParticlesComponent id="particles" />
      <div className="contact-container">
        {" "}
        <div className="contact-card">
          {/* <img
            src="src/assets/naran1.jpg"
            alt="Contact"
            className="contact-image"
          /> */}
          <div className="contact-image">
            <Lottie animationData={ContactUs} loop={true} />
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Get in Touch</h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
