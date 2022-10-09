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

const date = {
  day: "9",
  month: "10",
  year: "2022",
};

export default function Home() {
  return (
    <>
      <Header />
      <Layout title="Test 1234" author="BlueFalconHD" date={date}>
        <Heading type="h1">Hello!</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          integer enim neque volutpat. Eget magna fermentum iaculis eu non. Eu
          sem integer vitae justo. Elementum sagittis vitae et leo duis ut.
          Venenatis a condimentum vitae sapien pellentesque habitant morbi
          tristique senectus. Augue eget arcu dictum varius duis at consectetur.
          Scelerisque purus semper eget duis at tellus at urna. In dictum non
          consectetur a erat. Faucibus a pellentesque sit amet porttitor eget
          dolor. Elit at imperdiet dui accumsan. Auctor augue mauris augue neque
          gravida in. Volutpat maecenas volutpat blandit aliquam etiam. Duis
          convallis convallis tellus id interdum velit laoreet id. Mattis
          pellentesque id nibh tortor id. Commodo odio aenean sed adipiscing
          diam donec adipiscing. Platea dictumst quisque sagittis purus sit amet
          volutpat consequat.
        </Paragraph>
      </Layout>
    </>
  );
}
