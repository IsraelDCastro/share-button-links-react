import React from "react";
import PropTypes from "prop-types";
import {
  CopyIcon,
  EmailIcon,
  FacebookIcon,
  LinkedInIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon
} from "../icons";

ButtonGroup.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  mediaUrl: PropTypes.string,
  to: PropTypes.string,
  subject: PropTypes.string,
  isRounded: PropTypes.bool,
  facebookIcon: PropTypes.bool,
  whatsappIcon: PropTypes.bool,
  telegramIcon: PropTypes.bool,
  twitterIcon: PropTypes.bool,
  linkedInIcon: PropTypes.bool,
  redditIcon: PropTypes.bool,
  pinterestIcon: PropTypes.bool,
  tumblrIcon: PropTypes.bool,
  pocketIcon: PropTypes.bool,
  emailIcon: PropTypes.bool,
  copyIcon: PropTypes.bool,
  isAllWhite: PropTypes.bool
};

ButtonGroup.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  url: "#!",
  title: "",
  message: "",
  content: "",
  description: "",
  mediaUrl: "",
  to: "",
  subject: "",
  isRounded: false,
  facebookIcon: false,
  whatsappIcon: false,
  telegramIcon: false,
  twitterIcon: false,
  linkedInIcon: false,
  redditIcon: false,
  pinterestIcon: false,
  tumblrIcon: false,
  pocketIcon: false,
  emailIcon: false,
  copyIcon: false,
  isAllWhite: false
};



export default function ButtonGroup({
  title,
  message,
  description,
  mediaUrl,
  content,
  to,
  subject,
  url,
  isRounded,
  facebookIcon,
  whatsappIcon,
  telegramIcon,
  twitterIcon,
  linkedInIcon,
  redditIcon,
  pinterestIcon,
  tumblrIcon,
  pocketIcon,
  emailIcon,
  copyIcon,
  isAllWhite
}) {
  return (
    <ul className="btn-link-group">
      {facebookIcon && (
        <li>
          <FacebookIcon isRounded={isRounded} isAllWhite={isAllWhite} title={title} url={url} />
        </li>
      )}
      {whatsappIcon && (
        <li>
          <WhatsappIcon isRounded={isRounded} isAllWhite={isAllWhite} message={message} url={url} />
        </li>
      )}
      {telegramIcon && (
        <li>
          <TelegramIcon isRounded={isRounded} isAllWhite={isAllWhite} message={message} url={url} />
        </li>
      )}
      {twitterIcon && (
        <li>
          <TwitterIcon isRounded={isRounded} isAllWhite={isAllWhite} title={title} url={url} />
        </li>
      )}
      {linkedInIcon && (
        <li>
          <LinkedInIcon isRounded={isRounded} isAllWhite={isAllWhite} url={url} />
        </li>
      )}
      {redditIcon && (
        <li>
          <RedditIcon isRounded={isRounded} isAllWhite={isAllWhite} title={title} url={url} />
        </li>
      )}
      {pinterestIcon && (
        <li>
          <PinterestIcon isRounded={isRounded} isAllWhite={isAllWhite} description={description} mediaUrl={mediaUrl} url={url} />
        </li>
      )}
      {tumblrIcon && (
        <li>
          <TumblrIcon isRounded={isRounded} isAllWhite={isAllWhite} title={title} content={content} url={url} />
        </li>
      )}
      {pocketIcon && (
        <li>
          <PocketIcon isRounded={isRounded} isAllWhite={isAllWhite} title={title} url={url} />
        </li>
      )}
      {emailIcon && (
        <li>
          <EmailIcon isRounded={isRounded} isAllWhite={isAllWhite} to={to} subject={subject} content={content} url={url} />
        </li>
      )}
      {copyIcon && (
        <li>
          <CopyIcon isRounded={isRounded} isAllWhite={isAllWhite} url={url} />
        </li>
      )}
    </ul>
  );
}
