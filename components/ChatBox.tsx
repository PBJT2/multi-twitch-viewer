import { useState } from "react";

type ChatBoxType = {
  streamList: string[];
};

const ChatBox: React.FC<ChatBoxType> = ({ streamList }: ChatBoxType) => {
  const [activeChat, setActiveChat] = useState(streamList[0]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex bg-gray-900 text-blue-500 border-b-2 border-blue-600">
        <label htmlFor="activeChat">Active Chat:</label>
        <select
          id="activeChat"
          onChange={(e) => {
            setActiveChat(e.target.value);
          }}
          className="grow bg-inherit text-center hover:bg-gray-700"
        >
          {streamList.map((streamer) => {
            return (
              <option key={streamer} value={streamer}>
                {streamer}
              </option>
            );
          })}
        </select>
      </div>
      {streamList.map((streamer) => {
        return (
          <iframe
            className={activeChat === streamer ? "block" : "hidden"}
            key={streamer}
            src={`https://www.twitch.tv/embed/${streamer}/chat?parent=${window.location.host}&darkpopout`}
            height="100%"
            width="100%"
          ></iframe>
        );
      })}
    </div>
  );
};

export default ChatBox;
