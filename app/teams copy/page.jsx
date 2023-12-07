import Hero from "../_components/Hero";
import Navbar  from "../_components/Navbar";

// import Teams from "./components/Teams";
import SeasonLeaders from "../_components/SeasonLeaders";
import SinglePlayer from "../_components/PlayerCard";

export default function Teams() {
 
  return (
    <main>
      <Navbar />
      {/* <Hero/> */}
      {/* <Teams/> */}
      {/* <SeasonLeaders/> */}
      <SeasonLeaders/>
    </main>
  )
}