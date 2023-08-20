import React, { useEffect, useState } from "react";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiCopyAlt } from "react-icons/bi";
import { appUrl } from "../../utils/constants";

const LinkRow = ({ redirect }) => {
  const url = appUrl + redirect.src;

  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  }, [alert]);

  return (
    <tr>
      <td className="pr-7 border border-slate-500 px-4 py-2 relative">
        <a
          href={url}
          className="break-words"
          target="_blank"
          rel="noopener noreferrer"
        >
          {url.split("https://")[1]}
        </a>
        <span
          className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(url);
            setAlert(true);
          }}
        >
          {alert ? (
            <AiOutlineCheckCircle fill="green" size={24} />
          ) : (
            <BiCopyAlt fill="green" size={24} />
          )}
        </span>
      </td>
      <td className="border border-slate-500 px-4 py-2 break-words">
        {redirect.destination}
      </td>
    </tr>
  );
};

export default LinkRow;