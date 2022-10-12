import Head from "next/head";
import Image from "next/image";
import Link from "../components/link.js";
import styles from "../styles/Home.module.css";
import Header from "../components/header.js";
import Heading from "../components/heading.js";
import Icon from "../components/icon.js";
import Card from "../components/card.js";
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
              src="https://media.discordapp.net/attachments/1028179635197976616/1028776622574293102/hyfZd0q.png?width=1282&height=1171"
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
                <Link href="https://github.com/orgs/centauri-hacks/people/BlueFalconHD">
                  BlueFalconHD (Web Developer)
                </Link>
              </li>
              <li>
                <Link href="https://github.com/orgs/centauri-hacks/people/AJPapi">
                  Alp (Designer)
                </Link>
              </li>
              <li>
                <li>
                  <Link href="https://github.com/orgs/centauri-hacks/people/Cdogo">
                    CDogo
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/orgs/centauri-hacks/people/dependra123">
                    Dependra123
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/orgs/centauri-hacks/people/Jack57832">
                    Jack57832
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/orgs/centauri-hacks/people/sir-sandwitch">
                    Sir Sandwitch
                  </Link>
                </li>
              </li>
              <li>
                <Link href="https://github.com/orgs/centauri-hacks/people/">
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
