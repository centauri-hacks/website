import Image from "next/image";

import Link from "../components/link.js";
import Heading from "../components/heading.js";
import Layout from "../components/layout.js";
import Paragraph from "../components/paragraph.js";
import Parallax from "../components/parallax.js";
import { ParallaxProvider } from "react-scroll-parallax";

import galaxy from "../styles/galaxy.module.css";
import utils from "../styles/utils.module.css";

export default function Home() {
  return (
    <>
      <div className={galaxy.container}>
        <ParallaxProvider scrollAxis="vertical">
          <Parallax speed="-30" classn={galaxy.nebula}>
            <Image
              src="/nebula.webp"
              alt="Nebula Galaxy Parallax Scroll"
              width="500"
              height="500"
            />
          </Parallax>
          <Parallax speed="20" classn={galaxy.hero}>
            <p>
              Centuari <br /> Hackathon
            </p>
          </Parallax>
        </ParallaxProvider>
      </div>

      <div>
        <h1>
          Our Mission
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
}
