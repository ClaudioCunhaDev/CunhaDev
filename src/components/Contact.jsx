import React, { useEffect, useState } from "react";
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
      <div className="flex w-full ">
        <form
          className="flex flex-col gap-6 w-full items-center "
          onSubmit={(e) => handleSendEmail(e)}
        >
          <div className="flex flex-col w-full items-center">
            <input
              className={`${
                nameError && "border-red-500"
              }  border-gray-300 border-2 min-w-[15rem] w-[50%] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              type="text"
              placeholder="Name/Company"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {nameError && (
              <span className=" text-red-500 h-1">
                Preenche o nome corretamente.
              </span>
            )}
          </div>
          <div className="flex flex-col w-full items-center">
            <input
              className={`${
                emailError && "border-red-500"
              }  border-gray-300 border-2 min-w-[15rem] w-[50%] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
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
          </div>
          <div className="flex flex-col w-full items-center">
            <input
              className="border-2 min-w-[15rem] w-[50%] border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
          </div>
          <div className="flex flex-col w-full items-center">
            <textarea
              className={`${
                messageError && "border-red-500"
              }  border-gray-300 border-2 min-w-[15rem] h-[30vh] w-[50%] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Write your message..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            {messageError && (
              <div className=" px-3 py-2 text-red-500">
                <h2>Preenche o campo com uma mensagem.</h2>
              </div>
            )}
          </div>
          {visible && (
            <div className=" text-red-500">
              <h2>Preenche todos os campos</h2>
            </div>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded items-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="bg-[#000000c0] min-h-[20vh] text-white font-bold text-[1rem] p-3 w-full text-center justify-center items-center flex flex-col gap-3 min-[1920px]:text-[2rem]">
        <h2 className="">Copyright © 2023. All rights are reserved</h2>
      </div>
    </div>
  );
};
