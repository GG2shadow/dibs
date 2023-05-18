import Image from "next/image";
import HeroImage from "../public/assets/image/Hero-Image.png";

import NavBar from "../components/NavSection.js";
import Footer from "../components/FooterSection.js";

export default function Home() {
  return (
    <div className="w-screen max-w-screen h-screen px-16 py-6 bg-white">
      <NavBar></NavBar>
      <div className="mt-10">
        <div className="w-full bg-gray-300 rounded-xl">
          <Image
            src={HeroImage}
            alt="welcome-to-dibs"
            className="w-full h-auto"
          />
        </div>
        <div className="grid grid-rows-2 gap-10 mt-10 w-full">
          <div className="grid grid-cols-2 min-h-[250px] gap-10">
            <div className="bg-blue-500 rounded-xl">
              <div></div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="bg-blue-500 rounded-xl"></div>
              <div className="bg-blue-500 rounded-xl"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 min-h-[250px] gap-10">
            <div className="grid grid-cols-2 gap-10">
              <div className="bg-blue-500 rounded-xl"></div>
              <div className="bg-blue-500 rounded-xl"></div>
            </div>
            <div className="bg-blue-500 rounded-xl">
              <div></div>
            </div>
          </div>

          <div class="mt-10">
            <div class="flex items-center">
              <h2 class="text-4xl font-bold text-left mr-10">Our partners</h2>
              <div class="border-t-2 border-black min-w-[900px]"></div>
            </div>

            <p class="mt-1">This is a sample text</p>
            <div class="relative flex overflow-x-hidden">
              <div class="py-8 animate-marquee whitespace-nowrap">
                <span class="text-4xl mx-4">Marquee Item 1</span>
                <span class="text-4xl mx-4">Marquee Item 2</span>
                <span class="text-4xl mx-4">Marquee Item 3</span>
                <span class="text-4xl mx-4">Marquee Item 4</span>
                <span class="text-4xl mx-4">Marquee Item 5</span>
              </div>
              <div class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
                <span class="text-4xl mx-4">Marquee Item 1</span>
                <span class="text-4xl mx-4">Marquee Item 2</span>
                <span class="text-4xl mx-4">Marquee Item 3</span>
                <span class="text-4xl mx-4">Marquee Item 4</span>
                <span class="text-4xl mx-4">Marquee Item 5</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 w-full">
          <div class="flex items-center">
            <h2 class="text-4xl font-bold text-left mr-10">New Products</h2>
            <div class="border-t-2 border-black min-w-[900px]"></div>
          </div>
          <p class="mt-1">This is a sample text</p>

          <div className="grid grid-cols-3 min-h-[100px] gap-10 w-full mt-10">
            <div class="w-full bg-white border border-gray-300 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://uplive-co.vercel.app/assets/img/course-1.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <div class="mb-4">
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    Languages
                  </span>
                </div>
                <div>
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    English 101
                  </h5>
                </div>
                <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-justify">
                  This English language course helps students improve their
                  reading, writing, and speaking skills in English, with a focus
                  on vocabulary, grammar, and pronunciation.
                </p>
                <button class="w-full flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
                  <span class="mr-4">Add to cart</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </span>
                </button>
                <div class="border-b-2 border-gray-300 mt-3 mb-5"></div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://uplive-co.vercel.app/assets/img/trainers/trainer-1.jpg"
                      alt="Rounded avatar"
                    />
                    <span class="ml-4 text-md font-medium">Danni</span>
                  </div>

                  <div class="flex items-center">
                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <span class="mr-5">50</span>

                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </span>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black"></div>
            <div className="bg-black"></div>
            <div className="bg-black"></div>
            <div className="bg-black"></div>
            <div className="bg-black"></div>
          </div>
        </div>
        <div class="mt-10">
          <div class="flex items-center">
            <h2 class="text-4xl font-bold text-left mr-10">Recent News</h2>
            <div class="border-t-2 border-black min-w-[900px]"></div>
          </div>
          <p class="mt-1">This is a sample text</p>

          <div className="grid grid-cols-3 min-h-[100px] gap-10 mt-10">
            <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="px-8 py-10">
                <div>
                  <h5 class="text-md font-medium tracking-tight text-gray-900 dark:text-white">
                    .April 24, 2021
                  </h5>
                </div>
                <div class="mt-3 mb-7">
                  <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    GameStop to Offer Up to $1 Billion in
                  </h5>
                </div>
                <div class="flex items-center justify-between border-t-2 border-gray-300 pt-6">
                  <button
                    href="#"
                    class="flex text-black bg-transparent font-medium rounded-lg text-sm px-5 pt-3 text-center"
                  >
                    <span>Read More</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-green-500"></div>
            <div className="bg-green-500"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
