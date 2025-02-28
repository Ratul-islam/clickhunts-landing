import React from 'react'
import "../css/contact.css"
const Contact = () => {
  return (
    <>
         <div class="contact-container">
        <div class="contact-header">
            <h1 class="contact-title">Contact Us</h1>
            <p class="contact-subtitle">
                ClickHunts Network aims to respond to all inquiries within the same day. We believe that effective communication is crucial for business, so if we're not talking, we're not getting any business done! Please explore the contact options below – we would be more than happy to hear from you.
            </p>
        </div>

        <div class="contact-grid">
            <div class="company-info">
                <h2 class="info-title">Business Development</h2>
                <div class="company-name">ClickHunts LLC.</div>
                <div class="address">
                    <p>30 N Gould Street Suite #41562,</p>
                    <p>Sheridan, WY 82801,</p>
                    <p>United States</p>
                </div>
            </div>

            <div class="contact-form">
                <form action="#" method="POST">
                    <div class="form-group">
                        <label class="form-label" for="name">Your Name</label>
                        <input type="text" id="name" name="name" class="form-input" required/>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="email">Your Email</label>
                        <input type="email" id="email" name="email" class="form-input" required/>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" class="form-input" required/>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Gender</label>
                        <div class="gender-options">
                            <label class="gender-option">
                                <input type="radio" name="gender" value="male" required/>
                                <span>Male</span>
                            </label>
                            <label class="gender-option">
                                <input type="radio" name="gender" value="female"/>
                                <span>Female</span>
                            </label>
                            <label class="gender-option">
                                <input type="radio" name="gender" value="other"/>
                                <span>Other's</span>
                            </label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="message">Your Message</label>
                        <textarea id="message" name="message" class="form-input form-textarea" required></textarea>
                    </div>

                    <button type="submit" class="submit-button">SUBMIT</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact