import { render } from "@testing-library/react";
import {
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
} from "@/components";

const getAnchor = (container: HTMLElement): HTMLAnchorElement => {
  const anchor = container.querySelector("a");

  if (!anchor) {
    throw new Error("Expected anchor element");
  }

  return anchor;
};

const getHrefUrl = (container: HTMLElement): URL => new URL(getAnchor(container).href);

describe("share links", () => {
  const shareUrl = "https://example.com/article?id=42";

  it("builds the Facebook share URL", () => {
    const { container } = render(<ButtonFacebook url={shareUrl} title="Great read" text="Share" />);
    const url = getHrefUrl(container);

    expect(`${url.origin}${url.pathname}`).toBe("https://facebook.com/sharer/sharer.php");
    expect(url.searchParams.get("u")).toBe(shareUrl);
    expect(url.searchParams.get("t")).toBe("Great read");
  });

  it("builds the Twitter share URL", () => {
    const { container } = render(<ButtonTwitter url={shareUrl} title="Great read" text="Share" />);
    const url = getHrefUrl(container);

    expect(`${url.origin}${url.pathname}`).toBe("https://twitter.com/intent/tweet/");
    expect(url.searchParams.get("url")).toBe(shareUrl);
    expect(url.searchParams.get("text")).toBe("Great read");
  });

  it("builds the LinkedIn share URL", () => {
    const { container } = render(<ButtonLinkedIn url={shareUrl} text="Share" />);
    const url = getHrefUrl(container);

    expect(`${url.origin}${url.pathname}`).toBe("https://www.linkedin.com/sharing/share-offsite/");
    expect(url.searchParams.get("url")).toBe(shareUrl);
  });

  it("builds the Pinterest share URL", () => {
    const { container } = render(
      <ButtonPinterest url={shareUrl} text="Share" description="Pin description" mediaUrl="https://example.com/media.png" />
    );
    const url = getHrefUrl(container);

    expect(`${url.origin}${url.pathname}`).toBe("https://pinterest.com/pin/create/button/");
    expect(url.searchParams.get("url")).toBe(shareUrl);
    expect(url.searchParams.get("description")).toBe("Pin description");
    expect(url.searchParams.get("media")).toBe("https://example.com/media.png");
  });

  it("builds the Pocket share URL", () => {
    const { container } = render(<ButtonPocket url={shareUrl} title="Pocket title" text="Save" />);
    const url = getHrefUrl(container);

    expect(`${url.origin}${url.pathname}`).toBe("https://getpocket.com/save");
    expect(url.searchParams.get("url")).toBe(shareUrl);
    expect(url.searchParams.get("title")).toBe("Pocket title");
  });

  it("builds the Reddit share URL", () => {
    const { container } = render(<ButtonReddit url={shareUrl} title="Reddit title" text="Share" />);
    const url = getHrefUrl(container);

    expect(`${url.origin}${url.pathname}`).toBe("https://reddit.com/submit/");
    expect(url.searchParams.get("url")).toBe(shareUrl);
    expect(url.searchParams.get("title")).toBe("Reddit title");
  });

  it("builds the Telegram share URL", () => {
    const { container } = render(<ButtonTelegram url={shareUrl} message="Look this" text="Share" />);
    const url = getHrefUrl(container);

    expect(`${url.origin}${url.pathname}`).toBe("https://t.me/share/url");
    expect(url.searchParams.get("url")).toBe(shareUrl);
    expect(url.searchParams.get("text")).toBe("Look this");
  });

  it("builds the Tumblr share URL", () => {
    const { container } = render(<ButtonTumblr url={shareUrl} title="Tumblr title" content="Tumblr content" text="Share" />);
    const url = getHrefUrl(container);

    expect(`${url.origin}${url.pathname}`).toBe("https://www.tumblr.com/widgets/share/tool");
    expect(url.searchParams.get("posttype")).toBe("link");
    expect(url.searchParams.get("title")).toBe("Tumblr title");
    expect(url.searchParams.get("caption")).toBe(shareUrl);
    expect(url.searchParams.get("content")).toBe("Tumblr content");
  });

  it("builds the WhatsApp share URL", () => {
    const { container } = render(<ButtonWhatsapp url={shareUrl} message="Read this" text="Share" />);
    const url = getHrefUrl(container);

    expect(`${url.origin}${url.pathname}`).toBe("https://api.whatsapp.com/send");
    expect(url.searchParams.get("text")).toBe(`Read this ${shareUrl}`);
  });

  it("builds the Email share URL", () => {
    const { container } = render(<ButtonEmail url={shareUrl} to="test@example.com" subject="Subject" content="Body" text="Email" />);
    const href = getAnchor(container).getAttribute("href");

    expect(href?.startsWith("mailto:?")).toBe(true);

    const params = new URLSearchParams((href ?? "").replace("mailto:?", ""));
    expect(params.get("to")).toBe("test@example.com");
    expect(params.get("subject")).toBe("Subject");
    expect(params.get("body")).toBe(`Body ${shareUrl}`);
  });

  it("uses a safe fallback URL when validation is enabled", () => {
    const { container } = render(
      <ButtonTwitter url="ftp://unsafe.example/path" title="Unsafe" text="Share" validateUrl fallbackUrl="https://safe.example/fallback" />
    );
    const url = getHrefUrl(container);

    expect(url.searchParams.get("url")).toBe("https://safe.example/fallback");
  });
});
