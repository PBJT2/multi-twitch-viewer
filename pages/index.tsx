import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PBJT Multi Twitch Player</title>
        <meta name="description" content="PBJT Multi Twitch Player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-black grid items-center justify-center">
        <div className="border-white border-2 max-w-lg rounded-lg px-2 py-1 text-white">
          <h1 className="text-center text-xl font-bold">
            PBJT Multi Twitch Player
          </h1>
          <p className="text-justify text-xs whitespace-pre-wrap">
            Welcome to the PBJT Multi Twitch Player! You can use this site to
            watch any number of&nbsp;
            <a href="" className="text-blue-500 cursor-pointer hover:underline">
              twitch.tv
            </a>
            &nbsp;streams at the same time (as long as your computer can handle
            it). Simply put the streams you want in the url. For example:&nbsp;
            <a
              href="/pbjt__/chlocakes"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              localhost:3000/pbjt__/chlocakes
            </a>
            . Happy streamwatching!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
