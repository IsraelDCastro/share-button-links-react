import React from "react";
import { BooleanButtonOpts } from "@/components/shared/interfaces";

interface ButtonTumblrProps extends BooleanButtonOpts {
  url: string;
  text: string;
  title: string;
  content?: string;
}

export default function ButtonTumblr({
  url = "#!",
  title,
  text,
  content,
  isRounded = false,
  hasIcon = false,
  isBordered = false,
  isCircled = false
}: ButtonTumblrProps) {
  return (
    <a
      href={`https://www.tumblr.com/widgets/share/tool?posttype=link&title=${title}&caption=${url}&content=${content}&canonicalUrl=${url}&shareSource=tumblr_share_button`}
      className={`btn-link btn-link-tumblr ${isRounded ? "is-rounded" : null} ${isBordered ? "is-bordered" : null} ${
        isCircled ? "is-circled" : null
      }`}
      title="Tumblr"
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      {text}
      {hasIcon && (
        <span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="tumblr-square"
            className="svg-inline--fa fa-tumblr-square fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-82.3 364.2c-8.5 9.1-31.2 19.8-60.9 19.8-75.5 0-91.9-55.5-91.9-87.9v-90h-29.7c-3.4 0-6.2-2.8-6.2-6.2v-42.5c0-4.5 2.8-8.5 7.1-10 38.8-13.7 50.9-47.5 52.7-73.2.5-6.9 4.1-10.2 10-10.2h44.3c3.4 0 6.2 2.8 6.2 6.2v72h51.9c3.4 0 6.2 2.8 6.2 6.2v51.1c0 3.4-2.8 6.2-6.2 6.2h-52.1V321c0 21.4 14.8 33.5 42.5 22.4 3-1.2 5.6-2 8-1.4 2.2.5 3.6 2.1 4.6 4.9l13.8 40.2c1 3.2 2 6.7-.3 9.1z"
            />
          </svg>
        </span>
      )}
    </a>
  );
}
