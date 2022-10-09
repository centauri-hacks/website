import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/header.js";
import Heading from "../components/heading.js";
import Icon from "../components/icon.js";
import Card from "../components/card.js";
import Layout from "../components/layout.js";

const date = {
  day: "9",
  month: "10",
  year: "2022",
}

export default function Home() {
  return (
    <>
      <Header />
      <Layout title="Test 1234" author="BlueFalconHD" date={date}>
        <Icon iconSet="faSolid" iconName="HandPeace" size="60" color="black" />
        <Heading type="h1">Hello!</Heading>
        <Heading type="h2">Hello!</Heading>
        <Heading type="h3">Hello!</Heading>
        <Heading type="h4">Hello!</Heading>
        <Heading type="h5">Hello!</Heading>
        <Card type="small">Hello TEST</Card>
        <Card type="regular">Hello TEST2</Card>
      </Layout>
    </>
  );
}
