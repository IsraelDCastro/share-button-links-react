import { useEffect, useRef, useState } from "react";
import { BooleanButtonOpts } from "@/components/shared/interfaces";
import { copyTextToClipboard, getButtonClassNames, resolveShareUrl, svgA11yProps } from "@/components/shared/utils";

interface ButtonCopyProps extends BooleanButtonOpts {
  text: string;
  url?: string;
  copiedLabel?: string;
}

export default function ButtonCopy({
  text = "Add text",
  url,
  copiedLabel = "Copied!",
  isRounded = false,
  hasIcon = false,
  isBordered = false,
  isCircled = false,
  colorVariant = "brand",
  validateUrl = false,
  fallbackUrl
}: ButtonCopyProps) {
  const [copied, setCopy] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      window.clearTimeout(timeoutRef.current);
    },
    []
  );

  const copyUrl = async () => {
    const valueToCopy = url
      ? resolveShareUrl(url, { validateUrl, fallbackUrl })
      : resolveShareUrl(typeof window !== "undefined" ? window.location.href : "", {
          validateUrl,
          fallbackUrl
        });
    const didCopy = await copyTextToClipboard(valueToCopy);

    if (!didCopy) {
      return;
    }

    setCopy(true);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopy(false), 1500);
  };

  return (
    <div className="copy-wrap">
      {copied && (
        <span className="copied-text" role="status" aria-live="polite">
          {copiedLabel}
        </span>
      )}
      <button
        type="button"
        className={getButtonClassNames("btn-link btn-link-copy", { isRounded, isBordered, isCircled, colorVariant })}
        title="Copy URL"
        aria-label="Copy URL to clipboard"
        onClick={copyUrl}
      >
        {text}
        {hasIcon && (
          <span>
            <svg
              {...svgA11yProps}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
            </svg>
          </span>
        )}
      </button>
    </div>
  );
}
