import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! I am <strong>Abhishek</strong>
        </p>
        <p>Welcome to my blog!</p>
        <p>
          This website was built using the awesome{" "}
          <a href="https://nextjs.org">Next.js</a> React framework.
        </p>
      </section>
    </Layout>
  );
}
