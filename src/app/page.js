
import Banner from "@/shared/Banner/Banner";
import Footer from "@/shared/footer/Footer";
import FeaturedSection from "@/pages/FeaturedSection/FeaturedSection";
import Services from "@/pages/Services/Services";
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
      <Footer />
      <Services></Services>
      <FeaturedSection></FeaturedSection>
    </div>
  );
}
