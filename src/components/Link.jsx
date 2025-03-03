import React from "react";

const Link = ({ url, text }) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        className="hover:text-zinc-500 hover:dark:text-zinc-400 text-black dark:text-white"
      >
        {text}
      </a>
    </div>
  );
};

export default Link;
