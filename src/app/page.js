
import Footer from "@/shared/footer/Footer";
import FeaturedSection from "@/pages/FeaturedSection/FeaturedSection";
import Services from "@/pages/Services/Services";
import NavBar from "@/shared/Navbar/Navbar";
import RealPetTeamSlider from "@/shared/RealPetTeamSlider/RealPetTeamSlider";
import Banner from "@/shared/Banner/Banner";
import PetCareHero from "@/pages/PetCreHero/PetCareHero";
import BlogSection from "@/pages/BlogSection/BlogSection";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <NavBar></NavBar>
      <Banner></Banner>
      <RealPetTeamSlider />
      <PetCareHero></PetCareHero>
      <Services></Services>
      <BlogSection></BlogSection>
      <FeaturedSection></FeaturedSection>
      <Footer />
    </div>
  );
}
