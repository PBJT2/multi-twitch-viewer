import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
  host: string;
};

const Home: NextPage<Props> = ({ host }) => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
  }
  return (
    <>
      <Head>
        <title>PBJT Multi Twitch Player</title>
        <meta name="description" content="PBJT Multi Twitch Player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-black grid items-center justify-center">
        <div className="border-white border-2 max-w-lg rounded-lg px-2 py-1 text-white">
          <main>
            <h1 className="text-center text-xl font-bold">
              PBJT Multi Twitch Player
            </h1>
            <p className="text-justify text-xs whitespace-pre-wrap">
              Welcome to the PBJT Multi Twitch Player! You can use this site to
              watch any number of&nbsp;
              <a
                href="https://www.twitch.tv/"
                className="text-blue-500 cursor-pointer hover:underline"
              >
                twitch.tv
              </a>
              &nbsp;streams at the same time (as long as your computer can
              handle it). Simply put the streams you want in the url. For
              example:&nbsp;
              <Link href="/pbjt__/chlocakes">
                <a className="text-blue-500 cursor-pointer hover:underline">
                  {host}/pbjt__/chlocakes
                </a>
              </Link>
              . Happy streamwatching!
            </p>
          </main>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  let host;
  if (req) {
    host = req.headers.host;
  }
  return { props: { host } };
};

export default Home;
