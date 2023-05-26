import Image from "next/image";
import HeroImage from "../public/assets/image/Hero-Image.png";

import NavBar from "../components/NavSection.js";
import Footer from "../components/FooterSection.js";
import ListingCard from "@/components/ListingCard";

import { supabase } from "@/utils/supabaseClient";

export const revalidate = 60;

export default async function Home() {
  let { data: listings, error } = await supabase
    .from("listings")
    .select("title,short_desc,coverimg_url,listing_id, categories (name)")
    .eq("new_listing", true);

  if (error) {
    throw error.message;
  }

  console.log(listings);

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
