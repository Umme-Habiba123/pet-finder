
import Footer from "@/shared/footer/Footer";
import FeaturedSection from "@/pages/FeaturedSection/FeaturedSection";
import Services from "@/pages/Services/Services";
import RealPetTeamSlider from "@/shared/RealPetTeamSlider/RealPetTeamSlider";
import Banner from "@/shared/Banner/Banner";
import PetCareHero from "@/pages/PetCreHero/PetCareHero";
import BlogSection from "@/pages/BlogSection/BlogSection";
import TeamSection from "@/pages/TeamSection/TeamSection";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      
      <Banner></Banner>
      <RealPetTeamSlider />
      <PetCareHero></PetCareHero>
      <Services></Services>
      <BlogSection></BlogSection>
      <TeamSection></TeamSection>
      <FeaturedSection></FeaturedSection>
 
    </div>
  );
}
