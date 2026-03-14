# Share Button Links React

React share buttons for websites, blogs, docs and landing pages.

## Installation

```bash
npm install share-button-links-react
```

or

```bash
yarn add share-button-links-react
```

## Exports

### Buttons

```ts
import {
  ButtonCopy,
  ButtonEmail,
  ButtonFacebook,
  ButtonLinkedIn,
  ButtonPinterest,
  ButtonPocket,
  ButtonReddit,
  ButtonTelegram,
  ButtonTumblr,
  ButtonTwitter,
  ButtonWhatsapp
} from "share-button-links-react";
```

### Icon Buttons

```ts
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
} from "share-button-links-react";
```

### Button Group

```ts
import { ButtonGroup } from "share-button-links-react";
```

## Styles

The package ships with compiled CSS and the original SCSS entry.

```css
@import "share-button-links-react/dist/share-button-links-react.css";
```

```scss
@use "share-button-links-react/dist/share-button-links-react.scss";
```

## Basic Usage

```tsx
import { ButtonFacebook, TwitterIcon, ButtonGroup } from "share-button-links-react";

export function Example() {
  return (
    <>
      <ButtonFacebook
        url="https://example.com/article"
        title="A shareable article"
        text="Facebook"
        hasIcon
        isRounded
        colorVariant="neutral"
      />

      <TwitterIcon
        url="https://example.com/article"
        title="A shareable article"
        isCircled
        colorVariant="flat"
      />

      <ButtonGroup
        url="https://example.com/article"
        title="A shareable article"
        message="Take a look at this"
        description="Reusable React share buttons"
        mediaUrl="https://example.com/cover.png"
        content="Extra text for Tumblr or email"
        subject="Check this out"
        isRounded
        colorVariant="neutral"
        facebookIcon
        twitterIcon
        telegramIcon
        whatsappIcon
        copyIcon
      />
    </>
  );
}
```

## Shared Visual Props

Most button and icon components support:

- `isRounded?: boolean`
- `isCircled?: boolean`
- `isBordered?: boolean`
- `colorVariant?: "brand" | "flat" | "neutral"`

Text buttons also support:

- `hasIcon?: boolean`

Icon buttons also support:

- `isAllWhite?: boolean`
- `isWhited?: boolean`

## Copy Button Props

`ButtonCopy` and `CopyIcon` support:

- `url?: string` to copy a specific URL.
- `copiedLabel?: string` to customize the success message.

## URL Safety Props

All share components support:

- `validateUrl?: boolean` to require absolute `http/https` URLs.
- `fallbackUrl?: string` used when validation is enabled and the provided URL is invalid.

## Network-Specific Props

Some components need extra data depending on the destination:

- `title` for Facebook, Twitter, Reddit, Pocket and Tumblr.
- `message` for WhatsApp and Telegram.
- `description` and `mediaUrl` for Pinterest.
- `to`, `subject` and `content` for Email.
- `content` for Tumblr.

## Local Development

The repository includes an isolated playground outside of the library build.

```bash
npm run dev
```

Useful commands:

- `npm run build` builds the library.
- `npm run build:playground` builds the playground.
- `npm test` runs the test suite.

## Documentation

Documentation site: [share-button-links-react-docs.vercel.app](https://share-button-links-react-docs.vercel.app/)
