import Footer from "@/components/FooterSection";
import NavigationBar from "@/components/NavSection";

export default function Page() {
  return (
    <div className="w-screen max-w-screen h-screen px-16 py-6 bg-white">
      <NavigationBar />
      <div className="w-screen max-w-screen h-fit mt-10">
        <div className="w-full grid grid-cols-2 gap-10">
          <div>
            <div className="flex flex-col justify-center w-full px-10 py-5">
              <h3 className="text-red-500 font-bold text-lg">Welcome To Phlox</h3>
              <h1 className="text-black font-bold text-4xl py-6">Who We Are ?</h1>
              <p className="text-justify text-md text-block font-normal">
                When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me . when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence .
              </p>

              <button type="button" class="w-fit text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-10 py-3 my-9 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Contact Us</button>
            </div>
          </div>
          <div className="px-10 py-5">
            <img src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/group-of-young-businesspeople-with-laptop-working-8SHTZUN.jpg" alt="about" />
          </div>

        </div>
      </div>
      <Footer />
    </div>
    
  )
}
