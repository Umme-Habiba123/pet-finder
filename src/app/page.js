// import Navbar from "@/shared/Navbar/Navbar";

import Banner from "@/shared/Banner/Banner";
import NavBar from "@/shared/Navbar/Navbar";
import RealPetTeamSlider from "@/shared/RealPetTeamSlider/RealPetTeamSlider";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <NavBar></NavBar>
      <Banner></Banner>
      <RealPetTeamSlider />
    </div>
  );
}
