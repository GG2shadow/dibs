import Footer from "@/components/FooterSection";
import NavigationBar from "@/components/NavSection";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen max-w-screen h-screen px-16 py-6 bg-white">
      <NavigationBar />
      <div class="mt-10">
        <div class="grid grid-cols-4 gap-6">
          <div class="flex">
            <div class="grid gap-y-5">
              <div class="flex flex-col w-full h-fit rounded-xl py-5 px-3">
                <div class="flex flex-col items-start">
                  <span class="px-2 text-lg font-medium pb-3">Search</span>
                </div>
                <div>
                  <form>
                    <label
                      for="default-search"
                      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div class="relative flex items-center">
                      <input
                        type="search"
                        id="default-search"
                        class="block w-full p-3 pl-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Here"
                        required
                      />
                      <button
                        type="submit"
                        class="text-white ml-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2.5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
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
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div class="w-full border-t-2 border-black"></div>

              <div class="flex flex-col w-full h-fit rounded-xl py-5 px-3">
                <div class="flex flex-col items-start">
                  <span class="px-2 text-lg font-medium pb-3">Category</span>
                </div>
                <div class="w-full">
                  <ul class="w-full text-sm font-medium text-black rounded-lg">
                    <li class="w-full">
                      <div class="flex items-center pl-2">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="flex w-full py-3 pl-3 pr-1 items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <span>Accessories</span>
                          <span>(3)</span>
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center pl-2">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="flex w-full py-3 pl-3 pr-1 items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <span>Accessories</span>
                          <span>(3)</span>
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center pl-2">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="flex w-full py-3 pl-3 pr-1 items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <span>Accessories</span>
                          <span>(3)</span>
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center pl-2">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="flex w-full py-3 pl-3 pr-1 items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <span>Accessories</span>
                          <span>(3)</span>
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center pl-2">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="flex w-full py-3 pl-3 pr-1 items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <span>Accessories</span>
                          <span>(3)</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="w-full border-t-2 border-black"></div>

              <div class="flex flex-col w-full h-fit rounded-xl py-5 px-3">
                <div class="flex flex-col items-start">
                  <span class="px-2 text-lg font-medium pb-3">Brand</span>
                </div>
                <div class="w-full">
                  <ul class="w-full text-sm font-medium text-black rounded-lg">
                    <li class="w-full">
                      <div class="flex items-center pl-2">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="flex w-full py-3 pl-3 pr-1 items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <span>Apple</span>
                          <span>(2)</span>
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center pl-2">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="flex w-full py-3 pl-3 pr-1 items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <span>Apple</span>
                          <span>(3)</span>
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center pl-2">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="flex w-full py-3 pl-3 pr-1 items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <span>Apple</span>
                          <span>(3)</span>
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center pl-2">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="flex w-full py-3 pl-3 pr-1 items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <span>Apple</span>
                          <span>(3)</span>
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center pl-2">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="flex w-full py-3 pl-3 pr-1 items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <span>Apple</span>
                          <span>(3)</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="w-full border-t-2 border-black"></div>

              <div class="flex flex-col w-full h-fit rounded-xl py-5 px-3">
                <div class="flex flex-col items-start">
                  <span class="px-2 text-lg font-medium pb-3">
                    Choose Price
                  </span>
                </div>
                <div class="px-2">
                  <input
                    id="minmax-range"
                    type="range"
                    min="0"
                    max="10"
                    value="5"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="w-full flex col-span-3 ml-4 mt-4">
            <div class="w-full">
              <div class="w-full flex flex-row items-center justify-between px-2">
                <div class="text-2xl font-bold">Featured Products</div>
                <div>
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
                    type="button"
                  >
                    Sort By: Default{" "}
                    <svg
                      class="w-4 h-4 ml-2"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Default
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Rating
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Popularity
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Price
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="w-full grid grid-cols-3 gap-x-6 gap-y-10 mt-10">
                <div class="w-full bg-white border border-gray-300 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link href="/listing">
                    <img
                      class="rounded-t-lg"
                      src="https://uplive-co.vercel.app/assets/img/course-1.jpg"
                      alt=""
                    />
                  </Link>
                  <div class="p-5">
                    <div class="mb-4">
                      <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        Languages
                      </span>
                    </div>
                    <div>
                      <Link href="/listing">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          English 101
                        </h5>
                      </Link>
                    </div>
                    <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-justify">
                      This English language course helps students improve their
                      reading, writing, and speaking skills in English, with a
                      focus on vocabulary, grammar, and pronunciation.
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
                <div class="bg-black"></div>
                <div class="bg-black"></div>
                <div class="bg-black min-h-[400px]"></div>
                <div class="bg-black"></div>
                <div class="bg-black"></div>
                <div class="bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
