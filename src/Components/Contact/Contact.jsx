import React from "react";
import "./Contact.css";
import message from "../../assets/msg-icon.png";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "70571834-6a2c-43c4-9401-3e3c5cf64e71");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message} alt="message" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sequi pariatur aspernatur, architecto ad hic aperiam, mollitia ex
          laborum impedit quod iste suscipit nisi qui iusto. Exercitationem
          officiis quas beatae sed veritatis aliquam commodi tempore modi
          provident!
        </p>
        <ul>
          <li>
            <img src={mail} alt="mail" />
            Contact@ofosh
          </li>
          <li>
            <img src={phone} alt="phone" /> +2 123-456-7890
          </li>
          <li>
            <img src={location} alt="location" />
            Block 203 Algeria Road Manhattan, USA
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your Message"
            required
          />
          <button className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
