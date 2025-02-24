import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../assets/css/styles.css";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email) {
      setError("Fill in all fields and check the box above.");
      return;
    }

    const emailParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_waxv3qb", // Replace with your EmailJS Service ID
        "template_wzlxkb2", // Replace with your EmailJS Template ID
        emailParams,
        "mOJwSNyIEZELDts9n" // Replace with your EmailJS User ID
      )
      .then((response) => {
        alert("Email sent successfully!");
        onClose();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send email. Try again.");
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>* Your name</label>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <label>* Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {error && <p className="error">{error}</p>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
