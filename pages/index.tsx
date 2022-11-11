import { NextPage } from "next";
import Head from "next/head";
import CommentsSection from "../components/home/CommentsSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Comments</title>
        <meta name="description" content="Reactor Assignment - Comments App" />
      </Head>
      <main className="flex items-center justify-center h-screen">
        <CommentsSection />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
