import React from "react";

type StreamListProps = {
  streamList: string[];
};

const StreamList: React.FC<StreamListProps> = ({
  streamList,
}: StreamListProps) => {
  return (
    <ul className="flex flex-wrap min-h-screen w-full gap-1 bg-black">
      {streamList.map((streamer) => {
        return (
          <li className="grow basis-[400px]" key={streamer}>
            <iframe
              src={`https://player.twitch.tv/?muted=true&channel=${streamer}&parent=localhost`}
              height="100%"
              width="100%"
              allowFullScreen
            ></iframe>
          </li>
        );
      })}
    </ul>
  );
};

export default StreamList;
