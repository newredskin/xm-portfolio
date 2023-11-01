import { useState } from "react";
import toast from "react-hot-toast";

import supabase from "../../services/supabase";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase.from("contacts").upsert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    setFormData(initialState);

    if (error) {
      console.error(error);
      toast.error(
        "There was unknow error to send the message. Please try later." ||
          err?.message
      );
    } else {
      toast.success("Message successfully sent! Will get back to you soon.");
    }
  }

  function handleBackToHome(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 justify-center items-center"
    >
      <div className="rounded-2xl shadow-sm bg-orange-50/70 w-full">
        <input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="focus:ring-2 focus:ring-red-700/70 focus:ring-inset focus:outline-none bg-transparent w-full py-2 px-3 block rounded-xl transition-all duration-300"
        />
      </div>
      <div className="rounded-2xl shadow-sm bg-orange-50/70 w-full">
        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="focus:ring-2 focus:ring-red-700/70 focus:ring-inset focus:outline-none bg-transparent w-full py-2 px-3 block rounded-xl transition-all duration-300"
        />
      </div>
      <div className="rounded-2xl shadow-sm p-[2px] bg-orange-50/70 w-full">
        <textarea
          placeholder="Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="8"
          className="focus:ring-2 focus:ring-red-700/70 focus:ring-inset focus:outline-none bg-transparent w-full py-2 px-3 resize-y block rounded-xl transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-4 justify-between">
        <button className="hover:bg-red-700 hover:text-stone-100 text-red-700 p-3 outline outline-1 outline-red-700 transition-all duration-300 bg-orange-50/50 rounded-xl py-3 px-5 focus:ring-2 focus:ring-red-700/70 focus:ring-inset focus:outline-none">
          Submit
        </button>
        <button
          className="underline rounded-xl flex items-center justify-center text-sm"
          onClick={handleBackToHome}
        >
          Back to Home
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
