import Image from "next/image";
import Upper from "./components/Upper";
import Middle from "./components/Middle";
import Lower from "./components/Lower";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col relative font-['Oswald']">
      {/* Divided whole application into multiple part */}
      <Upper />
      <Middle />
      <Lower />
      <Footer/>
      
    </div>
  );
}
