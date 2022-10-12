import styles from "../styles/blog.module.css"
import Link from "next/link";
import Heading from "../components/heading";
import Layout from "../components/layout";
import Details from "../components/details";
import {getAllDynamicPages} from "../lib/posts";
import { Detail } from "@styled-icons/boxicons-regular";

const date = {
  day: "9",
  month: "10",
  year: "2022",
};

export default function Home({allPostsData}) {
  console.log(allPostsData)
  
  return (
    <>
      <Layout title="Blog Posts" author="Centauri Hacks" date={{day:69, month:69, year:6969}}>
          {allPostsData.map(({ slug, date, title, author }) => (
            <Link href={`/posts/${slug}`} key={slug}>
              <div className={styles.post}>
                <Heading type="h2">
                  {title}
                </Heading>
                <Details year={date.year} month={date.month} day={date.day} author={author}/>
              </div>
            </Link>
          ))}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getAllDynamicPages(["title", "date", "author", "slug"])
  return {
    props: {
      allPostsData
    }
  }
}


