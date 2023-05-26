import Footer from "@/components/FooterSection";
import NavigationBar from "@/components/NavSection";
import { supabase } from "@/utils/supabaseClient";

export const revalidate = 60;

export default async function Page({ params }) {
  const slug = params.slug;

  let { data: listings, error } = await supabase
    .from("listings")
    .select("title,long_desc,image_urls,organisations(name)")
    .eq("listing_id", slug);

  if (error) {
    throw error.message;
  }

  const listing = listings[0];

  return (
    <div className="w-screen max-w-screen h-screen px-16 py-6 bg-white">
      <NavigationBar />
      <div class="flex w-full mt-10">
        <div class="flex-col w-full">
          {/* Images */}
          <div class="grid grid-cols-4 gap-6">
            <div class="w-full col-span-3 bg-gray-600">
              <div
                id="gallery"
                class="relative w-full flex items-center"
                data-carousel="slide"
              >
                {/* <!-- Carousel wrapper --> */}
                <div class="relative h-56 overflow-hidden rounded-xl md:h-96">
                  {/* <!-- Item 1 --> */}
                  <div
                    class="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    <img
                      src="https://umarobsoldvzbogopefy.supabase.co/storage/v1/object/public/listing-img/english101-1.jpg"
                      class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt=""
                    />
                  </div>
                  {/* <!-- Item 2 --> */}
                  <div
                    class="hidden duration-700 ease-in-out"
                    data-carousel-item="active"
                  >
                    <img
                      src="https://umarobsoldvzbogopefy.supabase.co/storage/v1/object/public/listing-img/english101-2.jpg"
                      class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt=""
                    />
                  </div>
                </div>
                {/* <!-- Slider controls --> */}
                <button
                  type="button"
                  class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-white dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-white dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </div>

            <div class="w-full">
              <div class="w-full grid grid-rows-3 gap-y-3">
                <div class="w-full bg-black">
                  <img
                    src="https://umarobsoldvzbogopefy.supabase.co/storage/v1/object/public/listing-img/english101-1.jpg"
                    alt=""
                    class="h-full w-auto"
                  />
                </div>
                <div class="w-full bg-black">
                  <img
                    src="https://umarobsoldvzbogopefy.supabase.co/storage/v1/object/public/listing-img/english101-2.jpg"
                    alt=""
                    class="h-full w-auto"
                  />
                </div>
                <div class="w-full grid grid-cols-2 gap-0">
                  <div>
                    <img
                      src="https://uplive-co.vercel.app/assets/img/course-details.jpg"
                      alt=""
                      class="h-full w-auto"
                    />
                  </div>
                  <div>
                    <img
                      src="https://uplive-co.vercel.app/assets/img/course-details.jpg"
                      alt=""
                      class="h-full w-auto opacity-40"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div class="grid grid-cols-4 gap-6 mt-10">
            <div class="w-full col-span-3">
              <div class="py-3">
                <span class="text-left font-bold text-2xl px-4">
                  {listing.title}
                </span>
              </div>
              <div class="border-b-2 border-black py-3">
                <span class="text-left font-bold text-xl px-4">
                  Product Description
                </span>
              </div>
              <div class="flex mt-5 px-4">
                <span class="text-md font-normal">{listing.long_desc}</span>
              </div>
            </div>

            <div class="w-full h-fit mt-5 grid gap-4">
              <div class="flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded-xl text-md">
                <span class="font-normal">Organisation</span>
                <span class="font-bold">{listing.organisations.name}</span>
              </div>
            </div>
          </div>

          {/* Booking */}
          <div class="w-full flex mt-10">
            <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="sm:hidden">
                <label for="tabs" class="sr-only">
                  Select tab
                </label>
                <select
                  id="tabs"
                  class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
              </div>
              <ul
                class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
                id="fullWidthTab"
                data-tabs-toggle="#fullWidthTabContent"
                role="tablist"
              >
                <li class="w-full">
                  <button
                    id="stats-tab"
                    data-tabs-target="#stats"
                    type="button"
                    role="tab"
                    aria-controls="stats"
                    aria-selected="true"
                    class="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Monday
                  </button>
                </li>
                <li class="w-full">
                  <button
                    id="about-tab"
                    data-tabs-target="#about"
                    type="button"
                    role="tab"
                    aria-controls="about"
                    aria-selected="false"
                    class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Tuesday
                  </button>
                </li>
                <li class="w-full">
                  <button
                    id="faq-tab"
                    data-tabs-target="#faq"
                    type="button"
                    role="tab"
                    aria-controls="faq"
                    aria-selected="false"
                    class="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Wednesday
                  </button>
                </li>
                <li class="w-full">
                  <button
                    id="faq-tab"
                    data-tabs-target="#faq"
                    type="button"
                    role="tab"
                    aria-controls="faq"
                    aria-selected="false"
                    class="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Thursday
                  </button>
                </li>
                <li class="w-full">
                  <button
                    id="faq-tab"
                    data-tabs-target="#faq"
                    type="button"
                    role="tab"
                    aria-controls="faq"
                    aria-selected="false"
                    class="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Friday
                  </button>
                </li>
                <li class="w-full">
                  <button
                    id="faq-tab"
                    data-tabs-target="#faq"
                    type="button"
                    role="tab"
                    aria-controls="faq"
                    aria-selected="false"
                    class="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Saturday
                  </button>
                </li>
                <li class="w-full">
                  <button
                    id="faq-tab"
                    data-tabs-target="#faq"
                    type="button"
                    role="tab"
                    aria-controls="faq"
                    aria-selected="false"
                    class="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Sunday
                  </button>
                </li>
              </ul>
              <div
                id="fullWidthTabContent"
                class="border-t border-gray-200 dark:border-gray-600"
              >
                {/* Put "hidden" inside the class to hide this element */}
                <div
                  class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                  id="stats"
                  role="tabpanel"
                  aria-labelledby="stats-tab"
                >
                  {/* Session Timing Booking */}

                  <div class="grid grid-rows-4">
                    <div class="grid grid-cols-4 w-full pb-2">
                      <div class="col-span-1 w-full">
                        <h2 class="px-3 text-left text-md font-medium">
                          Session
                        </h2>
                      </div>
                      <div class="col-span-3 w-full">
                        <h2 class="px-1 text-left text-md font-medium">
                          Timing(s)
                        </h2>
                      </div>
                    </div>
                    <div class="grid grid-cols-4 border-b-2 border-gray-300 w-full py-5">
                      <div class="col-span-1 w-full">
                        <h2 class="px-3 text-left text-md font-normal">
                          Morning
                        </h2>
                      </div>
                      <div class="col-span-3 w-full">
                        <div class="w-full flex flex-row">
                          <button class="relative inline-flex items-center justify-center p-0.5 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              09 00 - 10 00
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-4 border-b-2 border-gray-300 w-full py-5">
                      <div class="col-span-1 w-full">
                        <h2 class="px-3 text-left text-md font-normal">
                          Afternoon
                        </h2>
                      </div>
                      <div class="col-span-3 w-full">
                        <div class="w-full flex flex-row">
                          <button class="relative inline-flex items-center justify-center p-0.5 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              14 00 - 15 00
                            </span>
                          </button>

                          <button class="relative inline-flex items-center justify-center p-0.5 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              14 00 - 15 00
                            </span>
                          </button>

                          <button class="relative inline-flex items-center justify-center p-0.5 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              14 00 - 15 00
                            </span>
                          </button>

                          <button class="relative inline-flex items-center justify-center p-0.5 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              14 00 - 15 00
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-4 w-full py-5">
                      <div class="col-span-1 w-full">
                        <h2 class="px-3 text-left text-md font-normal">
                          Evening/Night
                        </h2>
                      </div>
                      <div class="col-span-3 w-full">
                        <div class="w-full flex flex-row">NIL</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                  id="about"
                  role="tabpanel"
                  aria-labelledby="about-tab"
                >
                  <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    We invest in the world’s potential
                  </h2>
                </div>
                <div
                  class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                  id="faq"
                  role="tabpanel"
                  aria-labelledby="faq-tab"
                >
                  <div
                    id="accordion-flush"
                    data-accordion="collapse"
                    data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
