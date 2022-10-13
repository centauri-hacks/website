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

      <div className={utils.bottom}>
        <Layout
          title="Welcome to Centauri"
          author="Centuari Hacks"
          date={{ month: "10", day: "10", year: "2022" }}
        >
          <Heading type="h1">About Us</Heading>
          <Paragraph>
            Hello, world! We are Centauri Hacks, a team of developers who are
            creating a hackathon. Some members of our team include:
            <ul>
              <li>
                <Link href="https://github.com/BlueFalconHD">
                  BlueFalconHD (Web Developer)
                </Link>
              </li>
              <li>
                <Link href="https://github.com/AJPapi">
                  Alp (Designer)
                </Link>
              </li>
              <li>
                <li>
                  <Link href="https://github.com/Cdogo">
                    CDogo
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/dependra123">
                    Dependra123
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Jack57832">
                    Jack57832
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/sir-sandwitch">
                    Sir Sandwitch
                  </Link>
                </li>
              </li>
              <li>
                <Link href="https://github.com/">
                  Many others...
                </Link>
              </li>
            </ul>
          </Paragraph>
        </Layout>
      </div>
    </>
  );
}
