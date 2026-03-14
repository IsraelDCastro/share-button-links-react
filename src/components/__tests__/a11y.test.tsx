import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { ButtonGroup, FacebookIcon } from "@/components";

describe("a11y", () => {
  it("has no critical accessibility violations for the icon button group", async () => {
    const { container } = render(
      <ButtonGroup
        url="https://example.com/post"
        title="Great read"
        message="Read this"
        description="Pin this"
        mediaUrl="https://example.com/media.png"
        content="Email body"
        facebookIcon
        whatsappIcon
        telegramIcon
        twitterIcon
        linkedInIcon
        redditIcon
        pinterestIcon
        tumblrIcon
        pocketIcon
        emailIcon
        copyIcon
      />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("marks icon SVGs as decorative when link has an explicit label", () => {
    const { container } = render(<FacebookIcon url="https://example.com/post" />);
    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("focusable", "false");
  });
});
