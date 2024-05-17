import React from "react";
import { FaLocationArrow } from "react-icons/fa";

export default function ConnectionInfo({ webhookUrl, domainUrl }) {
  const linkDomainUrl = () => {
    window.open(domainUrl, "_blank");
  };
  return (
    <div>
      <div className=" text-sm py-1">Domain</div>
      {domainUrl && (
        <div className=" bg-white p-5 flex justify-between items-center h-[70px]">
          <div className=" flex items-center gap-5">
            <FaLocationArrow size={18} className=" text-blue-500" />
            <button
              className=" text-sm hover:text-blue-500"
              onClick={linkDomainUrl}
            >
              {domainUrl}
            </button>
          </div>
          <button
            className=" bg-zinc-200 rounded-md px-3 py-2 text-xs hover:bg-blue-200"
            onClick={linkDomainUrl}
          >
            접속하기
          </button>
        </div>
      )}
      <div className=" text-sm py-1 mt-8">WebHook</div>
      {webhookUrl && (
        <div className=" bg-white p-5 flex justify-between items-center h-[70px]">
          <div className=" flex items-center gap-5">
            <FaLocationArrow size={18} className=" text-blue-500" />
            <div className=" text-sm ">{domainUrl}</div>
          </div>
        </div>
      )}
    </div>
  );
}