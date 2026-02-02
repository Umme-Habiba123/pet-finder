// import Navbar from "@/shared/Navbar/Navbar";

import Banner from "@/shared/Banner/Banner";
import Footer from "@/shared/footer/Footer";
import NavBar from "@/shared/Navbar/Navbar";
import RealPetTeamSlider from "@/shared/RealPetTeamSlider/RealPetTeamSlider";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <NavBar></NavBar>
      <Banner></Banner>
      <RealPetTeamSlider />
      <Footer />
    </div>
  );
}
