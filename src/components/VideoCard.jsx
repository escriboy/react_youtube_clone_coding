import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";
  return (
    <li
      className={isList ? "flex gap-1 m-2" : ""}
      onClick={() => {
        // 리액트 라우터에서 부가적인 객체들을 전달할 때 두 번째 인자에 객체를 전달해주면 된다.
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
