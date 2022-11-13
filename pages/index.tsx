import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import CommentForm from "../components/home/CommentForm";
import Comments from "../components/home/Comments";
import { CommentsContext } from "../src/store";
import { CommentInterface } from "../types";

interface HomeProps {
  initialComments: CommentInterface[];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("http://localhost:3000/api/comments");
  const comments = response.data;
  return {
    props: {
      initialComments: comments,
    },
  };
};

const Home: NextPage<HomeProps> = ({ initialComments }) => {
  const { comments, setComments } = useContext(CommentsContext);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments, setComments]);

  return (
    <>
      <Head>
        <title>Comments</title>
        <meta name="description" content="Reactor Assignment - Comments App" />
      </Head>
      <main className="flex items-center justify-center h-screen">
        <div className="comments-section">
          <div className="comments-section-scrollbar">
            <div className="pr-2 pb-8 md:pr-4">
              <Comments comments={comments} />
            </div>
          </div>
          <div className="pr-2 md:pr-4">
            <CommentForm
              commentId={Math.floor(Math.random() * 100).toString()}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
