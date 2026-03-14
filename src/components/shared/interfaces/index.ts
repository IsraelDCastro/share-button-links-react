export type ColorVariant = "brand" | "flat" | "neutral";

export interface BooleanButtonOpts {
  hasIcon?: boolean;
  isRounded?: boolean;
  isCircled?: boolean;
  isBordered?: boolean;
  colorVariant?: ColorVariant;
  validateUrl?: boolean;
  fallbackUrl?: string;
}

export interface BooleanButtonIconOpts {
  isRounded?: boolean;
  isCircled?: boolean;
  isBordered?: boolean;
  colorVariant?: ColorVariant;
  isAllWhite?: boolean;
  isWhited?: boolean;
  validateUrl?: boolean;
  fallbackUrl?: string;
}
