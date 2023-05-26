import Footer from "@/components/FooterSection";
import ListingCard from "@/components/ListingCard";
import NavigationBar from "@/components/NavSection";
import Link from "next/link";
import { supabase } from "@/utils/supabaseClient";

export default async function Page() {
  let { data: listings, error } = await supabase
    .from("listings")
    .select("title,short_desc,coverimg_url,listing_id, categories (name)");

  if (error) {
    throw error.message;
  }

  console.log(listings);

  // console.log(listings);

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
                {listings?.map((listing) => (
                  <ListingCard
                    title={listing.title}
                    short_desc={listing.short_desc}
                    category={listing.categories.name}
                    img={listing.coverimg_url}
                    slug={listing.listing_id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
