import React from "react";
import PropTypes from "prop-types";

ButtonPocket.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hasIcon: PropTypes.bool,
  isRounded: PropTypes.bool
};

ButtonPocket.defaultProps = {
  url: "#!",
  text: "Add text",
  title: "Add title",
  hasIcon: false,
  isRounded: false
};

export default function ButtonPocket({ url, title, text, isRounded, hasIcon }) {
  return (
    <a
      href={`https://getpocket.com/save?url=${url}&title=${title}`}
      className={`btn-link btn-link-pocket ${isRounded ? "is-rounded" : null}`}
      title="Pocket"
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
            data-icon="get-pocket"
            className="svg-inline--fa fa-get-pocket fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z"
            />
          </svg>
        </span>
      )}
    </a>
  );
}
