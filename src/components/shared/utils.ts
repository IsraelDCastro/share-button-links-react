import { BooleanButtonIconOpts, BooleanButtonOpts } from "./interfaces";

type CssClass = string | false | null | undefined;

const shapeClassNames = ({
  isRounded = false,
  isBordered = false,
  isCircled = false
}: Pick<BooleanButtonOpts, "isRounded" | "isBordered" | "isCircled">) =>
  classNames(isRounded && "is-rounded", isBordered && "is-bordered", isCircled && "is-circled");

const colorVariantClassNames = ({ colorVariant = "brand" }: Pick<BooleanButtonOpts, "colorVariant">) =>
  classNames(colorVariant === "flat" && "is-flat", colorVariant === "neutral" && "is-neutral");

export const classNames = (...classes: CssClass[]): string => classes.filter(Boolean).join(" ");

export const getButtonClassNames = (baseClassName: string, opts: BooleanButtonOpts): string =>
  classNames(baseClassName, shapeClassNames(opts), colorVariantClassNames(opts));

export const getIconButtonClassNames = (baseClassName: string, opts: BooleanButtonIconOpts): string =>
  classNames(baseClassName, shapeClassNames(opts), colorVariantClassNames(opts), (opts.isAllWhite || opts.isWhited) && "is-whited");

export const getShareLabel = (network: string): string => `Share on ${network}`;

export const SAFE_FALLBACK_URL = "https://example.com";

type ShareParamValue = string | null | undefined;

interface ShareUrlValidationOpts {
  validateUrl?: boolean;
  fallbackUrl?: string;
}

const isValidAbsoluteHttpUrl = (value: string): boolean => {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (error) {
    return false;
  }
};

export const resolveShareUrl = (url: string | undefined, opts: ShareUrlValidationOpts = {}): string => {
  const normalizedUrl = url?.trim() ?? "";
  const fallbackUrl = opts.fallbackUrl?.trim() ?? SAFE_FALLBACK_URL;

  if (!opts.validateUrl) {
    return normalizedUrl || fallbackUrl;
  }

  if (isValidAbsoluteHttpUrl(normalizedUrl)) {
    return normalizedUrl;
  }

  if (isValidAbsoluteHttpUrl(fallbackUrl)) {
    return fallbackUrl;
  }

  return SAFE_FALLBACK_URL;
};

export const buildShareUrl = (baseUrl: string, params: Record<string, ShareParamValue>): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, value);
    }
  });

  const query = searchParams.toString();

  return query ? `${baseUrl}?${query}` : baseUrl;
};

export const joinTextParts = (...values: ShareParamValue[]): string =>
  values
    .map((value) => value?.trim())
    .filter((value): value is string => Boolean(value))
    .join(" ");

export const svgA11yProps = {
  "aria-hidden": true,
  "focusable": "false"
} as const;

export async function copyTextToClipboard(value: string): Promise<boolean> {
  if (!value) {
    return false;
  }

  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch (error) {
      // Fallback handled below for browsers that reject clipboard API.
    }
  }

  if (typeof document === "undefined") {
    return false;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    const didCopy = document.execCommand("copy");
    document.body.removeChild(textarea);
    return didCopy;
  } catch (error) {
    document.body.removeChild(textarea);
    return false;
  }
}
