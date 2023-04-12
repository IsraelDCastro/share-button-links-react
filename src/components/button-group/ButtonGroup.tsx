import React from "react";
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
import { BooleanButtonOpts } from "@/components/shared/interfaces";

interface ButtonGroupProps extends BooleanButtonOpts {
  url: string;
  title?: string;
  message?: string;
  description?: string;
  mediaUrl?: string;
  content?: string;
  to?: string;
  subject?: string;

  facebookIcon?: boolean;
  whatsappIcon?: boolean;
  telegramIcon?: boolean;
  twitterIcon?: boolean;
  linkedInIcon?: boolean;
  redditIcon?: boolean;
  pinterestIcon?: boolean;
  tumblrIcon?: boolean;
  pocketIcon?: boolean;
  emailIcon?: boolean;
  copyIcon?: boolean;
  isAllWhite?: boolean;
}

export default function ButtonGroup({
  title,
  message,
  description,
  mediaUrl,
  content,
  to,
  subject,
  url = "#!",
  isRounded = false,
  isBordered = false,
  isCircled = false,
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
}: ButtonGroupProps) {
  return (
    <ul className="btn-link-group">
      {facebookIcon && (
        <li>
          <FacebookIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            isAllWhite={isAllWhite}
            title={title}
            url={url}
          />
        </li>
      )}
      {whatsappIcon && (
        <li>
          <WhatsappIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            isAllWhite={isAllWhite}
            message={message}
            url={url}
          />
        </li>
      )}
      {telegramIcon && (
        <li>
          <TelegramIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            isAllWhite={isAllWhite}
            message={message}
            url={url}
          />
        </li>
      )}
      {twitterIcon && (
        <li>
          <TwitterIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            isAllWhite={isAllWhite}
            title={title}
            url={url}
          />
        </li>
      )}
      {linkedInIcon && (
        <li>
          <LinkedInIcon isRounded={isRounded} isBordered={isBordered} isCircled={isCircled} isAllWhite={isAllWhite} url={url} />
        </li>
      )}
      {redditIcon && (
        <li>
          <RedditIcon isRounded={isRounded} isBordered={isBordered} isCircled={isCircled} isAllWhite={isAllWhite} title={title} url={url} />
        </li>
      )}
      {pinterestIcon && (
        <li>
          <PinterestIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            isAllWhite={isAllWhite}
            description={description}
            mediaUrl={mediaUrl}
            url={url}
          />
        </li>
      )}
      {tumblrIcon && (
        <li>
          <TumblrIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            isAllWhite={isAllWhite}
            title={title}
            content={content}
            url={url}
          />
        </li>
      )}
      {pocketIcon && (
        <li>
          <PocketIcon isRounded={isRounded} isBordered={isBordered} isCircled={isCircled} isAllWhite={isAllWhite} title={title} url={url} />
        </li>
      )}
      {emailIcon && (
        <li>
          <EmailIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            isAllWhite={isAllWhite}
            to={to}
            subject={subject}
            content={content}
            url={url}
          />
        </li>
      )}
      {copyIcon && (
        <li>
          <CopyIcon isRounded={isRounded} isBordered={isBordered} isCircled={isCircled} isAllWhite={isAllWhite} url={url} />
        </li>
      )}
    </ul>
  );
}
