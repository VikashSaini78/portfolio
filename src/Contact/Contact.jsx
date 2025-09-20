// import { Box, Link, Typography } from "@mui/material";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

// import React from "react";

// function Contact() {
//   return (
//     <div>
//       <div
//         className="min-h-screen flex items-center justify-center"
//         style={{ backgroundColor: "rgb(33, 36, 40)" }}
//       >
//         <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl grid md:grid-cols-2">
//           {/* Left Info Section */}
//           <div className="bg-gray-900 text-white p-8 rounded-l-2xl flex flex-col justify-center">
//             <h2 className="text-3xl font-bold mb-4">Vikash Saini</h2>
//             <p className="text-gray-300 mb-6">
//               MERN Stack Developer skilled in MongoDB, Express.js, React.js &
//               Node.js
//             </p>
//             <p className="mb-2">📞 +91-7878599144</p>
//             <p className="mb-6">✉ vikashbanskhoh@gmail.com</p>
//             <div className="flex space-x-4">
//               {/* FaFacebookF */}

//               <Link
//                 className=" text-white"
//                 href="https://www.facebook.com/your-facebook-profile"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <div className="contact-insta_icons">
//                   <FaFacebookF />
//                 </div>
//               </Link>

//               {/* instagram */}

//               <Link
//                 top={"/contact"}
//                 className=" text-white"
//                 href="https://www.instagram.com/developer__vicky?igsh=aWFweGxtZ3ltcHdp"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <div className="contact-insta_icons">
//                   <FaInstagram />
//                 </div>
//               </Link>
//               {/* GitHub */}
//               <Link
//                 className=" text-white"
//                 href="https://github.com/VikashSaini78"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <div className="contact-insta_icons">
//                   <FaGithub />
//                 </div>
//               </Link>

//               {/* LinkedIn */}

//               <Link
//                 className=" text-white"
//                 href="https://www.linkedin.com/in/vikash-saini-a6448226b/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <div className="contact-insta_icons">
//                   <FaLinkedin />
//                 </div>
//               </Link>
//               {/* <a href="#" className="hover:text-indigo-400">🌐</a>
//         <a href="#" className="hover:text-indigo-400">💼</a>
//         <a href="#" className="hover:text-indigo-400">📷</a> */}
//             </div>
//           </div>

//           {/* Right Contact Form */}
//           <form className="p-8 flex flex-col space-y-4">
//             <input
//               className="border p-3 rounded-lg"
//               type="text"
//               placeholder="Your Name"
//             />
//             <input
//               className="border p-3 rounded-lg"
//               type="email"
//               placeholder="Your Email"
//             />
//             <input
//               className="border p-3 rounded-lg"
//               type="text"
//               placeholder="Subject"
//             />
//             <textarea
//               className="border p-3 rounded-lg"
//               rows="4"
//               placeholder="Your Message"
//             ></textarea>
//             <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "rgb(33, 36, 40)" }}
      >
        <div className="bg-white w-full max-w-4xl grid md:grid-cols-2  shadow-2xl">
          {/* Left Info Section */}
          <div
            className="text-white p-8 flex flex-col justify-center "
            style={{ backgroundColor: "rgb(33, 36, 40)" }}
          >
            <h2 className="text-3xl font-bold mb-4">Vikash Saini</h2>
            {/* <h1>MERN Stack Developer</h1> */}
            <p className="text-gray-300 mb-6">
              MERN Stack Developer skilled in MongoDB, Express.js, React.js &
              Node.js
            </p>
            <p className="mb-2">📞 +91-7878599144</p>
            <p className="mb-6">✉ vikashbanskhoh@gmail.com</p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                className="text-white"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-insta_icons">
                  <FaFacebookF />
                </div>
              </a>

              {/* Instagram */}
              <a
                className="text-white"
                href="https://www.instagram.com/developer__vicky?igsh=aWFweGxtZ3ltcHdp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-insta_icons">
                  <FaInstagram />
                </div>
              </a>

              {/* GitHub */}
              <a
                className="text-white"
                href="https://github.com/VikashSaini78"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-insta_icons">
                  <FaGithub />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                className="text-white"
                href="https://www.linkedin.com/in/vikash-saini-a6448226b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-insta_icons">
                  <FaLinkedin />
                </div>
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <form className="p-8 flex flex-col space-y-4 rounded-tr-2xl md:rounded-br-none">
            <input
              className="border p-3 rounded-lg"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border p-3 rounded-lg"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="border p-3 rounded-lg"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="border p-3 rounded-lg"
              rows="4"
              placeholder="Your Message"
            ></textarea>
            <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
