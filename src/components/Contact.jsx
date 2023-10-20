import { useEffect, useState } from "react";

const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validations, setValidations] = useState({
    name: true,
    email: true,
    message: true,
  });

  function validateName(nameInput) {
    if (nameInput.trim() === "" || !/[A-Za-z]/gi.test(nameInput)) {
      setValidations((prevState) => {
        return { ...prevState, name: false };
      });
    } else {
      setValidations((prevState) => {
        return { ...prevState, name: true };
      });
    }
  }

  function validateMessage(messageInput) {
    if (messageInput.trim() === "") {
      setValidations((prevState) => {
        return { ...prevState, message: false };
      });
    } else {
      setValidations((prevState) => {
        return { ...prevState, message: true };
      });
    }
  }

  function validateName(nameInput) {
    if (nameInput.trim() === "" || !/[A-Za-z]/gi.test(nameInput)) {
      setValidations((prevState) => {
        return { ...prevState, name: false };
      });
    }
  }

  return (
    <section
      id="contact"
      className="w-full px-10 mb-10 flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-thin mb-6  md:text-left">CONTACT US</h2>
      <form className="w-full flex flex-col gap-4 md:w-[50%] md:m-auto">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="border-b-2 bg-gray-200/30 placeholder:text-gray-700 placeholder:font-thin text-lg placeholder:text-lg px-2 py-1 text-black font-thin w-full"
            required
            placeholder="Your name..."
            onChange={(e) => {}}
          ></input>
          {validations.name ? null : (
            <p className="text-sm text-[tomato] italic text-center">
              Please enter a valid name
            </p>
          )}
          <input
            type="email"
            className="border-b-2 bg-gray-200/30 placeholder:text-gray-700 placeholder:font-thin text-lg placeholder:text-lg px-2 py-1 text-black font-thin w-full"
            required
            placeholder="Your email address..."
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, email: e.target.value };
              });
            }}
          ></input>
          <textarea
            rows={3}
            placeholder="Your message..."
            onChange={(e) => {
              setUserInput((prevState) => {
                return { ...prevState, message: e.target.value };
              });
            }}
            className="border-b-2 resize-none bg-gray-200/30 placeholder:text-gray-700 placeholder:font-thin text-lg placeholder:text-lg px-2 py-1 text-black font-thin w-full"
          ></textarea>
        </div>
        <button
          type="button"
          className=" border-2 border-black py-2 px-8 hover:bg-black hover:text-white m-auto"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
