import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast.error("Error: Invalid Inputs!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        return;
      } else if (name.length <= 1) {
        toast.error("Error: Invalid Name Input!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        setNameError(true);
        return;
      } else if (!email.match(/\w{2,}@[a-zA-Z]{4,}\.[a-z]{2,}/)) {
        toast.error("Error: Invalid Email Input!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        setEmailError(true);
        return;
      } else if (!contact.match(/\d{9,}/)) {
        toast.error("Error: Invalid Contact Input!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        setNumberError(true);
        return;
      } else if (message.length <= 5) {
        toast.error("Error: Invalid Message Input!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        setMessageError(true);
        return;
      }

      toast.success("Email Sent!", {
        position: "top-center",
        transition: "flip",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });

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
      <h2 className="text-blue-500 font-bold text-[2rem]">CONTACT ME</h2>
      <div className="flex w-full ">
        <form
          className="flex flex-col gap-6 w-full items-center "
          onSubmit={(e) => handleSendEmail(e)}
        >
          <div className="flex flex-col w-full items-center">
            <input
              className={`${
                (nameError || visible) && "border-red-500"
              }  border-gray-300 border-2 min-w-[15rem] w-[50%] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:drop-shadow-3xl`}
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
                (emailError || visible) && "border-red-500"
              }  border-gray-300 border-2 min-w-[15rem] w-[50%] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:drop-shadow-3xl`}
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
              className="border-2 min-w-[15rem] w-[50%] border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:drop-shadow-3xl"
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
                (messageError || visible) && "border-red-500"
              }  border-gray-300 border-2 min-w-[15rem] h-[30vh] w-[50%] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:drop-shadow-3xl`}
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
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded items-center w-[10rem]"
            type="submit"
          >
            Submit
          </button>
          <ToastContainer
            transition={Zoom}
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </div>
      <div className="bg-[#000000c0] min-h-[20vh] text-white font-bold text-[1rem] p-3 w-full text-center justify-center items-center flex flex-col gap-3 min-[1920px]:text-[2rem] ">
        <h2 className="hover:drop-shadow-3xl">
          Copyright © 2023. All rights are reserved
        </h2>
      </div>
    </div>
  );
};
