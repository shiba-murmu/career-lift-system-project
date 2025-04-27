import React from 'react';

function Contact() {
  return (
    <>
      <div className="contact">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below or reach out to us using the information provided.</p>
        
        <div className="contact-info">
          <h2>Our Contact Information</h2>
          <p><strong>Address:</strong> Flat no.8 jamuna apartment niranjan singh complex, dimna road mango jamshedpur , India</p>
          <p><strong>Phone:</strong> +91 (987) 654-3210</p>
          <p><strong>Email:</strong> CareerLift@company.com</p>
        </div>

        <form>
          <h2>Send Us a Message</h2>
          <label>Name:</label>
          <input type="text" name="name" placeholder="Your Name" /><br />
          <label>Email:</label>
          <input type="email" name="email" placeholder="Your Email" /><br />
          <label>Subject:</label>
          <input type="text" name="subject" placeholder="Subject" /><br />
          <label>Message:</label>
          <textarea name="message" rows="6" placeholder="Your Message"></textarea><br />
          <input type="submit" value="Send Message" />
        </form>

        <div className="map">
          <h2>Find Us Here</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.488678796111!2d86.21266487498262!3d22.82150572609147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3d9ed582513%3A0xda0061948646c337!2sKaya%20Kalp!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        .contact {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
          background-color: #f9f9f9;
        }

        h1, h2 {
          text-align: center;
          color: #333;
        }

        p {
          color: #555;
          line-height: 1.6;
        }

        .contact-info {
          margin-bottom: 30px;
          background-color: #fff;
          padding: 15px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #333;
        }

        input, textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }

        input[type="submit"] {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        input[type="submit"]:hover {
          background-color: #45a049;
        }

        .map {
          margin-top: 30px;
        }

        iframe {
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

export default Contact;