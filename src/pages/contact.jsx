import React, { useState } from "react";
import "../css/contact.css"; // Your original CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    gender: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [responseMsg, setResponseMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for form submission
  const [formDisabled, setFormDisabled] = useState(false); // State to disable form after submission
  const [isSuccess, setIsSuccess] = useState(false); // Track if submission is successful

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate form before submitting
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.gender) errors.gender = "Gender selection is required.";
    if (!formData.message.trim()) errors.message = "Message cannot be empty.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg(""); // Clear previous response message
    if (!validateForm()) return;

    setIsSubmitting(true); // Set submitting state to true
    setFormDisabled(true); // Disable the form during submission

    console.log("Form Data Submitted:", formData);  // Debugging: Log form data

    const formDataEncoded = new URLSearchParams(formData).toString();
    console.log("Encoded Form Data:", formDataEncoded);  // Debugging: Log encoded form data

    try {
      const response = await fetch("http://localhost/config.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",  // Correct content type
        },
        body: formDataEncoded,
      });

      const result = await response.text(); // Ensure we're getting the response text properly
      console.log("Server Response:", result);  // Debugging: Log server response

      if (result === "success") {
        setIsSuccess(true); // Mark as successful submission
        setResponseMsg("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", gender: "", message: "" }); // Clear the form
      } else {
        setResponseMsg("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error connecting to the server:", error);  // Debugging: Log fetch error
      setResponseMsg("Error connecting to the server. Please try again later.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          ClickHunts Network aims to respond to all inquiries within the same day...
        </p>
      </div>

      <div className="contact-grid">
        <div className="company-info">
          <h2 className="info-title">Business Development</h2>
          <div className="company-name">ClickHunts LLC.</div>
          <div className="address">
            <p>30 N Gould Street Suite #41562,</p>
            <p>Sheridan, WY 82801,</p>
            <p>United States</p>
          </div>
        </div>

        <div className={`contact-form ${isSubmitting ? 'blur-sm' : ''}`}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                disabled={formDisabled}
                required
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                disabled={formDisabled}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                disabled={formDisabled}
                required
              />
              {errors.subject && <p className="error-message">{errors.subject}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Gender</label>
              <div className="gender-options">
                <label className="gender-option">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    disabled={formDisabled}
                    required
                  />
                  <span>Male</span>
                </label>
                <label className="gender-option">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                  <span>Female</span>
                </label>
                <label className="gender-option">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                  <span>Other</span>
                </label>
              </div>
              {errors.gender && <p className="error-message">{errors.gender}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                value={formData.message}
                onChange={handleChange}
                disabled={formDisabled}
                required
              ></textarea>
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className={`submit-button ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : ''}`}
              disabled={isSubmitting || formDisabled}
            >
              {isSubmitting ? (
                <div className="spinner-border animate-spin border-4 border-t-4 border-blue-500 rounded-full w-6 h-6"></div>
              ) : (
                "SUBMIT"
              )}
            </button>
          </form>

          {/* Response Message */}
          {responseMsg && (
            <p
              className={`response-message ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            >
              {isSuccess ? (
                <span>
                  <svg
                    className="inline-block w-6 h-6 text-green-700 mr-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.293 5.293a1 1 0 0 0-1.414 0L8 11.586 5.121 8.707a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {responseMsg}
                </span>
              ) : (
                responseMsg
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
