"use client";

import { useState } from "react";
import Footer from "@/components/FooterSection";
import NavigationBar from "@/components/NavSection";
import { supabase } from "@/utils/supabaseClient";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendContact(e) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("contacts")
      .insert([{ name: name, email: email, message: message }]);

    if (error) {
      throw error;
    }
    if (!error) {
      alert("Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <div className="w-screen max-w-screen h-screen px-16 py-6 bg-white">
      <NavigationBar />

      <div className="w-screen max-w-screen h-fit mt-10">
        <div className="w-full grid grid-cols-2 gap-10">
          <div>
            <div className="flex flex-col justify-center w-full px-10 py-5">
              <h3 className="text-red-500 font-bold text-lg">
                Contact With Us
              </h3>
              <h1 className="text-black font-bold text-4xl py-6">
                Get in touch
              </h1>
              <h3 className="text-black font-normal text-sm">
                Your email address will not be published. Required fields are
                marked*
              </h3>
              <form className="mt-20" onSubmit={(e) => sendContact(e)}>
                <div class="mb-6">
                  <div className="grid grid-cols-2 gap-10">
                    <div class="relative">
                      <input
                        type="text"
                        id="floating_outlined"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label
                        for="floating_outlined"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Your name
                      </label>
                    </div>
                    <div class="relative">
                      <input
                        type="email"
                        id="floating_outlined"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label
                        for="floating_outlined"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Your email
                      </label>
                    </div>
                  </div>
                </div>
                <div class="mb-6">
                  <div class="relative mt-10">
                    <textarea
                      id="floating_outlined"
                      rows="6"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <label
                      for="floating_outlined"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Your message
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="px-10 py-5">
            <img
              src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/group-of-young-businesspeople-with-laptop-working-8SHTZUN.jpg"
              alt="about"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
