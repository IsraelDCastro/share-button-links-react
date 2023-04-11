import React from "react";
import PropTypes from "prop-types";

ButtonFacebookIcon.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  isRounded: PropTypes.bool,
  isAllWhite: PropTypes.bool
};

ButtonFacebookIcon.defaultProps = {
  url: "#!",
  title: "",
  isRounded: false,
  isAllWhite: false
};

export default function ButtonFacebookIcon({ url, title, isRounded, isAllWhite }) {
  return (
    <a
      href={`https://facebook.com/sharer/sharer.php?u=${url}&t=${title}&quote=`}
      className={`btn-link-icon btn-link-facebook-icon ${isRounded ? "is-rounded" : null} ${isAllWhite ? "is-whited" : null}`}
      title="Facebook"
      rel="noreferrer nofollow noopener"
      target="_blank"
    >
      <svg fill="currentColor" className="bi bi-facebook" width="24" height="24" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
      </svg>
    </a>
  );
}
