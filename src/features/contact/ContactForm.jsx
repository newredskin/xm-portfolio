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
          err?.message,
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
      className="flex flex-col items-center justify-center gap-6"
    >
      <div className="w-full rounded-2xl bg-teal-700/50 shadow-sm dark:bg-gray-300/50">
        <input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="block w-full rounded-xl bg-transparent px-3 py-2 transition-all duration-300 placeholder:text-orange-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700/70 dark:placeholder:text-orange-50/80"
        />
      </div>
      <div className="w-full rounded-2xl bg-teal-700/50 shadow-sm dark:bg-gray-300/50">
        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block w-full rounded-xl bg-transparent px-3 py-2 transition-all duration-300 placeholder:text-orange-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700/70 dark:placeholder:text-orange-50/80"
        />
      </div>
      <div className="w-full rounded-2xl bg-teal-700/50 p-[2px] shadow-sm dark:bg-gray-300/50">
        <textarea
          placeholder="Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="8"
          className="block w-full resize-y rounded-xl bg-transparent px-3 py-2 transition-all duration-300 placeholder:text-orange-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700/70 dark:placeholder:text-orange-50/80"
        />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <button className="rounded-xl bg-orange-100/50 p-3 px-5 py-3 text-red-700 outline outline-1 outline-red-700 transition-all duration-300 hover:bg-red-700 hover:text-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700/70 dark:bg-transparent dark:text-orange-50/90 dark:outline-orange-50/80 dark:hover:bg-red-700 lg:mt-12">
          Submit
        </button>
        <button
          className="flex items-center justify-center rounded-xl text-sm underline dark:text-orange-50/70 lg:mt-6 lg:text-lg"
          onClick={handleBackToHome}
        >
          Back to Home
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
