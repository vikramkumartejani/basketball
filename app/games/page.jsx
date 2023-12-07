import Hero from "../_components/Hero";
import Navbar  from "../_components/Navbar";

import Teams from "../_components/Teams";
import SeasonLeaders from "../_components/SeasonLeaders";
import SinglePlayer from "../_components/PlayerCard";

export default function Games() {
 
  return (
    <main>
      {/* <Hero/> */}
      <Teams/>
      {/* <SeasonLeaders/> */}
      <SeasonLeaders/>
    </main>
  )
}