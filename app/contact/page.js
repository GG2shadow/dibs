import Footer from "@/components/FooterSection";
import NavigationBar from "@/components/NavSection";

export default function Page() {
  return (
    <div className="w-screen max-w-screen h-screen px-16 py-6 bg-white">
      <NavigationBar />
      <div>Contact Page</div>
      <Footer />
    </div>
  )
}
