import React, { useState } from "react";
import "./PaymentPage.css";
import axios from "axios";
import { BASEURL } from "./Comman";

const PaymentPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

    if (!name) {
      formErrors.name = "Name is required.";
      isValid = false;
    }

    // Email validation
    if (!email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid.";
      isValid = false;
    }

    // WhatsApp number validation
    if (!whatsapp) {
      formErrors.whatsapp = "WhatsApp number is required.";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(whatsapp)) {
      formErrors.whatsapp = "WhatsApp number should be 10 digits.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    try {
      const payload = {
        name: name,
        whatsapp_no: whatsapp,
        receipt: null,
        amount: 199,
        email: email,
        transaction_id: "",
        payment_type: "UPI",
      };
      const response = await axios.post(
        `${BASEURL}/courses/book-seminar`,
        payload
      );
      if (response.data) {
        const redirectUrl = response.data.pay_page_url;
        window.location.href = redirectUrl;
      }
      // setIsFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = (e) => {
    setReceipt(e.target.files[0]);
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (receipt) {
      const data = new FormData();
      data.append("email", email);
      data.append("whatsappno", whatsapp);
      data.append("receipt", receipt);

      // const response = await axios.post(`${BASEURL}/`, data);
      alert("Receipt uploaded successfully.");
      setIsFormSubmitted(false);
      setEmail("");
      setWhatsapp("");
      setReceipt(null);
    } else {
      alert("Please upload a receipt before submitting.");
    }
  };
  return (
    <div className="payment-page ">
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <img
            src="/connecting-careers-final-logo02-1@2x.png"
            alt="GIGL Summaries Logo"
            className="logo"
          />
        </header>

        {/* Main Section */}
        <div className="main-content">
          {/* Left Section: Course Details */}
          <div className="course-details">
            <h2>What you will get:</h2>
            <ol>
              <li>Self-Discovery and Career Clarity</li>
              <li>Market Research and Understanding Current Trends</li>
              <li>Develop Your Expertise</li>
              <li>Network Effectively</li>
              <li>Create High-Quality Content</li>
              <li>Create a Compelling Personal Brand Story</li>
              <li>Build a Strong Online Presence</li>
              <li>Build Trust and Credibility</li>
              <li>Leverage Your Unique Selling Proposition (USP)</li>
              <li>Measure and Analyze Your Progress</li>
            </ol>
            <div className="share">
              <p>Share this on:</p>
              <div className="icons">
                {/* Icons for Facebook, X (Twitter), WhatsApp */}
                <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid025QdaEAPKZo5wWgDJbogKGeX8G79pT9M2w33p8xvWr5EDjBQzQB9mhe3c7SJ6owoHl&id=61564225852198">
                  <i
                    class="fa-brands fa-facebook"
                    style={{ fontSize: "30px", color: "black" }}
                  ></i>
                </a>
                <a href="https://www.instagram.com/p/C-pgbMLIFF9/?fbclid=IwY2xjawEpoUBleHRuA2FlbQIxMAABHT0XpbvQZgYldNPSnX_565dcZjBZnOTZtcwZj4mXt7jBq0_POVkC9Gd1-g_aem_LmqAG-93pG0EF7BlyEFwZw&img_index=4">
                  <i
                    class="fa-brands fa-instagram"
                    style={{ fontSize: "30px", color: "black" }}
                  ></i>
                </a>
                <a href="https://www.youtube.com/@ConnectingCareers">
                  <i
                    class="fa-brands fa-youtube"
                    style={{ fontSize: "30px", color: "black" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Payment Form */}
          {!isFormSubmitted ? (
            <div className="payment-form">
              <h2>Payment Details</h2>
              <form onSubmit={handleSubmit}>
                {/* Amount field */}
                <label htmlFor="amount">Amount</label>
                <input type="text" id="amount" value="₹199.00" readOnly />

                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}

                {/* Email field */}
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}

                {/* WhatsApp number field */}
                <label htmlFor="whatsapp">WhatsApp Number</label>
                <input
                  type="number"
                  id="whatsapp"
                  placeholder="Enter your WhatsApp number"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
                {errors.whatsapp && (
                  <span className="error-text">{errors.whatsapp}</span>
                )}

                {/* Submit button */}
                <button type="submit">Buy now ₹199.00</button>
              </form>
            </div>
          ) : (
            <div className="payment-details">
              <h2>Scan the QR Code to Pay</h2>
              <img
                src="/QR.jpeg" // Add your QR code image URL here
                alt="QR Code"
                className="qr-code"
              />
              {/* <p>
                Or pay via UPI ID: <strong>sifsayed@oksbi</strong>
              </p> */}
              <form
                onSubmit={handleFinalSubmit}
                className="receipt-upload-form mt-3"
              >
                <label htmlFor="receipt">
                  Upload Payment Receipt or Invoice
                </label>
                <input
                  type="file"
                  id="receipt"
                  onChange={handleFileUpload}
                  accept="image/*,application/pdf"
                />

                <button type="submit" className="submit-receipt-btn">
                  Submit Receipt
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <footer>
          <div className="contact-info">
            <p>Contact Us:</p>
            <p>
              <i className="fas fa-envelope"></i> hello@connectingdotsbs.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +91 9822666114
            </p>
          </div>
          <div className="terms"></div>
        </footer>
      </div>
    </div>
  );
};

export default PaymentPage;
