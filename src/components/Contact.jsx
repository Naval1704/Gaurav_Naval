import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_2xc65rg",
        "template_gr9s0ub",
        {
          from_name: form.name,
          to_name: "Gaurav Naval",
          from_email: form.email,
          to_email: "naval.2@iitj.ac.in",
          message: form.message,
        },
        "0nYia_SkhoUpSVwyO"
      )
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, (error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong.");
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white p-8 rounded-2xl shadow-lg"
      >
        <p className={`${styles.sectionSubText} text-black-100`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-black-200`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-gray-100 py-4 px-6 placeholder-gray-500 text-gray-700 rounded-lg outline-none border focus:border-blue-500 transition duration-300"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-gray-100 py-4 px-6 placeholder-gray-500 text-gray-700 rounded-lg outline-none border focus:border-blue-500 transition duration-300"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-gray-100 py-4 px-6 placeholder-gray-500 text-gray-700 rounded-lg outline-none border focus:border-blue-500 transition duration-300"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 py-3 px-8 rounded-lg outline-none w-fit text-white font-bold shadow-md hover:bg-blue-600 transition duration-300"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {submitted && (
            <p className="text-green-500 font-medium mt-4">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
