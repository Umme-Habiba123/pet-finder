
import FeaturedSection from "@/pages/FeaturedSection/FeaturedSection";
import Services from "@/pages/Services/Services";
import Banner from "@/shared/Banner/Banner";
import NavBar from "@/shared/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <NavBar></NavBar>
      <Banner></Banner>
      <Services></Services>
      <FeaturedSection></FeaturedSection>
    </div>
  );
}
