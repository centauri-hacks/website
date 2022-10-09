import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

      <div className={utils.bottom}></div>
    </>
  );
}
