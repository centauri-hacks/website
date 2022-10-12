import PrintMarkdown from "../../components/printMarkdown.js";
import {
  getDynamicPageContentBySlug,
  getAllDynamicPages,
} from "../../lib/posts.js";
import Layout from "../../components/layout.js";

export default function DynamicPage({ page }) {
  const { title, slug, date, author, content } = page;

  return (
    <Layout title={title} date={date} author={author}>
      <PrintMarkdown markdown={content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Pass in the fields that we want to get
  const page = getDynamicPageContentBySlug(slug, [
    "title",
    "date",
    "author",
    "slug",
    "content",
  ]);

  return {
    props: {
      page: {
        ...page,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllDynamicPages(["slug"]);
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
