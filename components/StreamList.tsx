import React from "react";

type StreamListProps = {
  streamList: string[];
};

const StreamList: React.FC<StreamListProps> = ({
  streamList,
}: StreamListProps) => {
  return (
    <ul className="flex flex-wrap gap-1 bg-black grow">
      {streamList.map((streamer) => {
        return (
          <li className="grow" key={streamer}>
            <iframe
              src={`https://player.twitch.tv/?muted=true&channel=${streamer}&parent=${window.location.host}`}
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
