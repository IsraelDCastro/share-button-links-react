import React from "react";
import { BooleanButtonOpts } from "@/components/shared/interfaces";

interface ButtonEmailProps extends BooleanButtonOpts {
  url: string;
  text: string;
  to?: string;
  subject: string;
  content: string;
}

export default function ButtonEmail({
  url = "#!",
  to,
  subject = "Subject",
  content = "Add the content",
  text,
  isRounded = false,
  hasIcon = false,
  isBordered = false,
  isCircled = false
}: ButtonEmailProps) {
  return (
    <a
      href={`mailto:?subject=${subject}&to=${to}&body=${content}%20${url}`}
      className={`btn-link btn-link-email ${isRounded ? "is-rounded" : null} ${isBordered ? "is-bordered" : null} ${
        isCircled ? "is-circled" : null
      }`}
      title="Email"
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      {text}
      {hasIcon && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
        </span>
      )}
    </a>
  );
}
