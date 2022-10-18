import Image from "next/image";

import Parallax from "../components/parallax.js";
import { ParallaxProvider } from "react-scroll-parallax";
import Register from "../components/register.js"

import Countdown from 'react-countdown';

import styles from "../styles/Home.module.css";
const CustomCountdown = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <h1>Let the hacking begin!</h1>;
  } else {
    // Render a countdown
    return (
    <div className={styles.content}>
      <h1 className = {styles.countdown}>Countdown</h1>
      <h2 className = {styles.countdown}>Days: {days} <br/>Hours :{hours} <br/>Minutes:{minutes} <br/>Seconds:{seconds}</h2>
    </div>
      );
  }
}
export default function Home() {
  let hackathonDay = new Date("December 25, 2022 23:15:00");
  console.log(hackathonDay.getTime() - Date.now())
  return (
    <>
      <div className={styles.container}>
        <ParallaxProvider scrollAxis="vertical">
          <Parallax speed="-30" classn={styles.nebula}>
            <Image
              src="/nebula.webp"
              alt="Nebula Galaxy Parallax Scroll"
              width="500"
              height="500"
            />
          </Parallax>
          <Parallax speed="20" classn={styles.hero}>
            <p>
              Centuari <br /> Hackathon
            </p>
          </Parallax>
        </ParallaxProvider>
      </div>

      <div className={styles.content}>
        <h1>
          Our Mission
        </h1>
        <p style = {{marginBottom:'50px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Register/>
      </div>
      <Countdown date={hackathonDay} renderer={CustomCountdown} />
      <div className = {styles.content}>
        <form>
          <label>Name:</label><br/>
          <input type = 'text'/><br/>
          <label>Email:</label><br/>
          <input type = 'email'/><br/>
          <label>Phone number:</label><br/>
          <input type = 'tel'/><br/>
          <input type = 'submit'/>
        </form>
      </div>
      
    </>
  );
}
