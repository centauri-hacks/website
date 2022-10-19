import Image from "next/image";

import Parallax from "../components/parallax.js";
import { ParallaxProvider } from "react-scroll-parallax";
import Register from "../components/register.js"

import styles from "../styles/Home.module.css";
export default function Home() {
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
        <h1 style = {{textAlign:'center'}}>Sponsors</h1>
        <h5 style = {{textAlign:'center'}}>Want to become a sponsor? Email us at centauri.hacks@gmail.com</h5>
        <div className = {styles.sponsorContanier}>
          <img
            className={styles.sponsor}
            src= "/google-01.svg"/>
          <img
            className={styles.sponsor}
            src= "/google-01.svg"/>
          <img
            className={styles.sponsor}
            src= "/google-01.svg"/>
        </div>
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
