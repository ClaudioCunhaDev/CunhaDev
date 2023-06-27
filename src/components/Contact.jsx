import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");

  const [visible, setVisible] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const handleSendEmail = async (e) => {
    setVisible(false);
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
    setNumberError(false);
    try {
      e.preventDefault();
      if (name === "" && email === "" && message === "" && contact === "") {
        setVisible(true);
        return;
      } else if (name.length <= 1) {
        setNameError(true);
        return;
      } else if (!email.match(/\w{2,}@[a-zA-Z]{4,}\.[a-z]{2,}/)) {
        setEmailError(true);
        return;
      } else if (!contact.match(/\d{9,}/)) {
        setNumberError(true);
        return;
      } else if (message.length <= 5) {
        setMessageError(true);
        return;
      }

      const templateParams = {
        from_name: name,
        message: message,
        email: email,
        contact: contact,
      };

      setVisible(false);
      const resp = await emailjs.send(
        "service_war92gl",
        "template_n6vj2w9",
        templateParams,
        "0rmH4hL65TAsg6hl9"
      );
      console.log(resp.status, resp.text);
      setName("");
      setEmail("");
      setMessage("");
      setContact("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="contact"
      className="bg-corFundo1 relative w-full pt-[10vh] flex flex-col items-center gap-5"
    >
      <h2 className="text-blue-500 font-bold text-[1.4rem] min-[1920px]:text-[2rem]">
        CONTACT ME
      </h2>
      <div className="flex">
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => handleSendEmail(e)}
        >
          <input
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500  "
            type="text"
            placeholder="Name/Company"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {nameError && (
            <div className=" px-3 py-2 text-red-500">
              <h2>Preenche o nome corretamente.</h2>
            </div>
          )}

          <input
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          {emailError && (
            <div className=" px-3 py-2 text-red-500">
              <h2>Preenche o campo com um email válido.</h2>
            </div>
          )}
          <input
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Phone number"
            onChange={(e) => setContact(e.target.value)}
            value={contact}
          />

          {numberError && (
            <div className=" px-3 py-2 text-red-500">
              <h2>Preenche o campo com um número válido.</h2>
            </div>
          )}

          <textarea
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 xl:h-[18vh] min-[2560px]:h-[30vh] min-[2560px]:w-[30rem]"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {messageError && (
            <div className=" px-3 py-2 text-red-500">
              <h2>Preenche o campo com uma mensagem.</h2>
            </div>
          )}
          {visible && (
            <div className=" px-3 py-2 text-red-500">
              <h2>Preenche todos os campos</h2>
            </div>
          )}

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <button className="border-2 bg-slate-300 pointer p-3 z-10">
        <a href="/CunhaCVPT.pdf" download>
          Download CV
        </a>
      </button>
      <div className="bg-[#000000c0] min-h-[20vh] text-white font-bold text-[1rem] p-3 w-full text-center justify-center items-center flex flex-col gap-3 min-[1920px]:text-[2rem]">
        <h2 className="">Copyright © 2023. All rights are reserved</h2>
        <div className="flex gap-3 text-[1.5rem] min-[1920px]:text-[2.5rem]">
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/claudionogueiradacunha/"
          >
            <FaLinkedin />
          </a>
          <a
            className="cursor-pointer"
            href="https://github.com/ClaudioCunhaDev"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
