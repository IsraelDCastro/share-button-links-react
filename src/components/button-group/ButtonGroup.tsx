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
  colorVariant = "brand",
  validateUrl = false,
  fallbackUrl,
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
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            title={title}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
      {whatsappIcon && (
        <li>
          <WhatsappIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            message={message}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
      {telegramIcon && (
        <li>
          <TelegramIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            message={message}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
      {twitterIcon && (
        <li>
          <TwitterIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            title={title}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
      {linkedInIcon && (
        <li>
          <LinkedInIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
      {redditIcon && (
        <li>
          <RedditIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            title={title}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
      {pinterestIcon && (
        <li>
          <PinterestIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            description={description}
            mediaUrl={mediaUrl}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
      {tumblrIcon && (
        <li>
          <TumblrIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            title={title}
            content={content}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
      {pocketIcon && (
        <li>
          <PocketIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            title={title}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
      {emailIcon && (
        <li>
          <EmailIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            to={to}
            subject={subject}
            content={content}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
      {copyIcon && (
        <li>
          <CopyIcon
            isRounded={isRounded}
            isBordered={isBordered}
            isCircled={isCircled}
            colorVariant={colorVariant}
            isAllWhite={isAllWhite}
            url={url}
            validateUrl={validateUrl}
            fallbackUrl={fallbackUrl}
          />
        </li>
      )}
    </ul>
  );
}
