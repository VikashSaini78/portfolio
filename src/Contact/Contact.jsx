import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",     // EmailJS service ID
        "your_template_id",    // EmailJS template ID
        form.current,
        "your_user_id"         // EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully! 🚀");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "rgb(33, 36, 40)" }}
      >
        <div className="bg-white w-full max-w-4xl grid md:grid-cols-2 shadow-2xl">
          {/* Left Info Section */}
          <div
            className="text-white p-8 flex flex-col justify-center"
            style={{ backgroundColor: "rgb(33, 36, 40)" }}
          >
            <h2 className="text-3xl font-bold mb-4">Vikash Saini</h2>
            <p className="text-gray-300 mb-6">
              MERN Stack Developer skilled in MongoDB, Express.js, React.js & Node.js
            </p>
            <p className="mb-2">📞 +91-7878599144</p>
            <p className="mb-6">✉ vikashbanskhoh@gmail.com</p>
            <div className="flex space-x-4">
              <a className="text-white" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="contact-insta_icons"><FaFacebookF /></div>
              </a>
              <a className="text-white" href="https://www.instagram.com/developer__vicky?igsh=aWFweGxtZ3ltcHdp" target="_blank" rel="noopener noreferrer">
                <div className="contact-insta_icons"><FaInstagram /></div>
              </a>
              <a className="text-white" href="https://github.com/VikashSaini78" target="_blank" rel="noopener noreferrer">
                <div className="contact-insta_icons"><FaGithub /></div>
              </a>
              <a className="text-white" href="https://www.linkedin.com/in/vikash-saini-a6448226b/" target="_blank" rel="noopener noreferrer">
                <div className="contact-insta_icons"><FaLinkedin /></div>
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-8 flex flex-col space-y-4 rounded-tr-2xl md:rounded-br-none"
          >
            <input className="border p-3 rounded-lg" type="text" name="user_name" placeholder="Your Name" required />
            <input className="border p-3 rounded-lg" type="email" name="user_email" placeholder="Your Email" required />
            <input className="border p-3 rounded-lg" type="text" name="subject" placeholder="Subject" required />
            <textarea className="border p-3 rounded-lg" name="message" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Toast Container Add */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default Contact;
