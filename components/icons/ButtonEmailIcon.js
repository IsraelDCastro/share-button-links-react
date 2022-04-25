import React from "react";
import PropTypes from "prop-types";

ButtonEmailIcon.propTypes = {
  url: PropTypes.string.isRequired,
  to: PropTypes.string,
  subject: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isRounded: PropTypes.bool,
  isAllWhite: PropTypes.bool
};

ButtonEmailIcon.defaultProps = {
  url: "#!",
  to: "",
  subject: "Subject",
  content: "Add the content",
  isRounded: false,
  isAllWhite: false
};

export default function ButtonEmailIcon({ url, to, subject, content, isRounded, isAllWhite }) {
  return (
    <a
      href={`mailto:?subject=${subject}&to=${to}&body=${content}%20${url}`}
      className={`btn-link-icon btn-link-email-icon ${isRounded ? "is-rounded" : null} ${isAllWhite ? "is-whited" : null}`}
      title="Email"
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
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
    </a>
  );
}
