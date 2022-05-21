import { useRouter } from "next/router";
import { NextPage } from "next";
import StreamList from "../components/StreamList";
import ChatBox from "../components/Chatbox";
import { useState } from "react";

const StreamPage: NextPage = () => {
  const router = useRouter();
  const { streamerList } = router.query;
  const [chatActive, setChatActive] = useState(true);

  const toggleChat = () => {
    setChatActive((prevState) => !prevState);
  };

  if (streamerList && streamerList instanceof Array) {
    const removeDupes = new Set(streamerList);
    const noDupesList = Array.from(removeDupes);

    return (
      <main>
        <div
          className={`grid  ${
            chatActive ? "grid-cols-[1fr_400px]" : "grid-cols-1"
          }  bg-black grid-rows-[1fr_40px]`}
        >
          <section className="flex row-span-1">
            <StreamList streamList={noDupesList}></StreamList>
          </section>
          <section
            className={`pl-1 row-span-1 ${chatActive ? "block" : "hidden"}`}
          >
            <ChatBox streamList={noDupesList}></ChatBox>
          </section>
          <button
            onClick={toggleChat}
            className="text-blue-500 col-span-2 border-2 border-blue-500 hover:bg-gray-900"
          >
            Toggle Chat
          </button>
        </div>
      </main>
    );
  }
  return <div></div>;
};

export default StreamPage;
