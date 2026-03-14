import { ChangeEvent, ReactNode, useState } from "react";
import {
  ButtonCopy,
  ButtonEmail,
  ButtonFacebook,
  ButtonGroup,
  ButtonLinkedIn,
  ButtonPinterest,
  ButtonPocket,
  ButtonReddit,
  ButtonTelegram,
  ButtonTumblr,
  ButtonTwitter,
  ButtonWhatsapp,
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
} from "../src/components";

type Shape = "default" | "rounded" | "circled";
type Variant = "solid" | "bordered";
type ColorVariant = "brand" | "flat" | "neutral";

interface PlaygroundState {
  url: string;
  fallbackUrl: string;
  title: string;
  message: string;
  description: string;
  mediaUrl: string;
  content: string;
  to: string;
  subject: string;
  copiedLabel: string;
}

interface FieldProps {
  label: string;
  name: keyof PlaygroundState;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rows?: number;
}

interface SegmentedOption<T extends string> {
  label: string;
  value: T;
}

interface SegmentedControlProps<T extends string> {
  label: string;
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

const initialState: PlaygroundState = {
  url: "https://castro-dev.vercel.app/projects",
  fallbackUrl: "https://castro-dev.vercel.app",
  title: "Share Button Links React",
  message: "A lightweight React component library for social share links.",
  description: "Reusable React share buttons with text, icon-only variants and grouped layouts.",
  mediaUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  content: "Open-source share buttons for landing pages, blogs, docs and product marketing pages.",
  to: "hello@example.com",
  subject: "Check out this component library",
  copiedLabel: "Copied to clipboard"
};

const shapeOptions: SegmentedOption<Shape>[] = [
  { label: "Default", value: "default" },
  { label: "Rounded", value: "rounded" },
  { label: "Circled", value: "circled" }
];

const variantOptions: SegmentedOption<Variant>[] = [
  { label: "Solid", value: "solid" },
  { label: "Bordered", value: "bordered" }
];

const colorVariantOptions: SegmentedOption<ColorVariant>[] = [
  { label: "Brand", value: "brand" },
  { label: "Flat", value: "flat" },
  { label: "Neutral", value: "neutral" }
];

function Field({ label, name, value, onChange, rows }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="control-label">{label}</span>
      {rows ? (
        <textarea className="control-input min-h-24 resize-y" name={name} rows={rows} value={value} onChange={onChange} />
      ) : (
        <input className="control-input" name={name} value={value} onChange={onChange} />
      )}
    </label>
  );
}

function SegmentedControl<T extends string>({ label, options, value, onChange }: SegmentedControlProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      <span className="control-label">{label}</span>
      <div className="segmented-control">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={value === option.value ? "segment-button is-active" : "segment-button"}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
  description
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  description: string;
}) {
  return (
    <label className="toggle-row">
      <span>
        <span className="control-label">{label}</span>
        <span className="control-help">{description}</span>
      </span>
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
    </label>
  );
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="mb-5 flex flex-col gap-2">
      <span className="eyebrow">{eyebrow}</span>
      <div className="flex flex-col gap-1">
        <h2 className="playground-display text-2xl text-slate-950 sm:text-3xl">{title}</h2>
        <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">{copy}</p>
      </div>
    </div>
  );
}

function PreviewSurface({ title, tone = "light", children }: { title: string; tone?: "light" | "dark"; children: ReactNode }) {
  return (
    <div className={tone === "dark" ? "preview-surface preview-surface-dark" : "preview-surface"}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{title}</h3>
      </div>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

export default function App() {
  const [state, setState] = useState(initialState);
  const [shape, setShape] = useState<Shape>("rounded");
  const [variant, setVariant] = useState<Variant>("solid");
  const [colorVariant, setColorVariant] = useState<ColorVariant>("neutral");
  const [withButtonIcons, setWithButtonIcons] = useState(true);
  const [whiteIcons, setWhiteIcons] = useState(false);
  const [validateUrl, setValidateUrl] = useState(true);

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setState((current) => ({
      ...current,
      [name]: value
    }));
  };

  const shapeProps = {
    isRounded: shape === "rounded",
    isCircled: shape === "circled",
    isBordered: variant === "bordered",
    colorVariant,
    validateUrl,
    fallbackUrl: state.fallbackUrl
  };

  const textButtonProps = {
    ...shapeProps,
    hasIcon: withButtonIcons
  };

  const iconButtonProps = {
    ...shapeProps,
    isAllWhite: whiteIcons,
    isWhited: whiteIcons
  };

  return (
    <div className="relative isolate">
      <div className="playground-orb playground-orb-coral" />
      <div className="playground-orb playground-orb-sky" />

      <div className="mx-auto grid min-h-screen w-full max-w-[1480px] gap-6 px-4 py-5 lg:grid-cols-[360px_minmax(0,1fr)] lg:px-8 lg:py-8">
        <aside className="playground-panel lg:self-start">
          <div className="mb-6 flex flex-col gap-3">
            <span className="eyebrow">Playground</span>
            <div className="space-y-3">
              <h1 className="playground-display text-4xl leading-none text-slate-950 sm:text-5xl">
                Share buttons, now with a real sandbox.
              </h1>
              <p className="text-sm leading-6 text-slate-600">
                This app is isolated from the library build. Use it to try every component, switch between shapes and variants, and verify
                share payloads without touching `dist/`.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <SegmentedControl label="Shape" options={shapeOptions} value={shape} onChange={setShape} />
            <SegmentedControl label="Variant" options={variantOptions} value={variant} onChange={setVariant} />
            <SegmentedControl label="Palette" options={colorVariantOptions} value={colorVariant} onChange={setColorVariant} />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Toggle
                label="Text button icons"
                checked={withButtonIcons}
                onChange={setWithButtonIcons}
                description="Show the icon beside the label in full-size buttons."
              />
              <Toggle
                label="Validate URLs"
                checked={validateUrl}
                onChange={setValidateUrl}
                description="Fallback to the safe URL when an invalid link is entered."
              />
              <Toggle
                label="White icon mode"
                checked={whiteIcons}
                onChange={setWhiteIcons}
                description="Preview icon buttons on dark surfaces using the white style."
              />
            </div>

            <div className="space-y-4">
              <Field label="Share URL" name="url" value={state.url} onChange={handleFieldChange} />
              <Field label="Fallback URL" name="fallbackUrl" value={state.fallbackUrl} onChange={handleFieldChange} />
              <Field label="Title" name="title" value={state.title} onChange={handleFieldChange} />
              <Field label="Message" name="message" value={state.message} onChange={handleFieldChange} rows={3} />
              <Field label="Description" name="description" value={state.description} onChange={handleFieldChange} rows={3} />
              <Field label="Media URL" name="mediaUrl" value={state.mediaUrl} onChange={handleFieldChange} />
              <Field label="Content" name="content" value={state.content} onChange={handleFieldChange} rows={4} />
              <Field label="Email recipient" name="to" value={state.to} onChange={handleFieldChange} />
              <Field label="Email subject" name="subject" value={state.subject} onChange={handleFieldChange} />
              <Field label="Copied label" name="copiedLabel" value={state.copiedLabel} onChange={handleFieldChange} />
            </div>
          </div>
        </aside>

        <main className="space-y-6 pb-6">
          <section className="playground-panel overflow-hidden">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-5">
                <span className="eyebrow">Live preview</span>
                <div className="space-y-4">
                  <h2 className="playground-display max-w-3xl text-4xl leading-[0.95] text-slate-950 sm:text-6xl">
                    A brighter, smoother showcase for every share button variant.
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-slate-600">
                    The library keeps the same public API, but the visual system is softer: rounded surfaces, cleaner borders, more
                    controlled hover states, and stronger focus visibility.
                  </p>
                </div>
                <div className="hero-meta-grid">
                  <div className="hero-stat">
                    <span className="hero-stat-label">Current shape</span>
                    <strong className="hero-stat-value capitalize">{shape}</strong>
                  </div>
                  <div className="hero-stat">
                    <span className="hero-stat-label">Current variant</span>
                    <strong className="hero-stat-value capitalize">{variant}</strong>
                  </div>
                  <div className="hero-stat">
                    <span className="hero-stat-label">URL validation</span>
                    <strong className="hero-stat-value">{validateUrl ? "On" : "Off"}</strong>
                  </div>
                  <div className="hero-stat">
                    <span className="hero-stat-label">Palette</span>
                    <strong className="hero-stat-value capitalize">{colorVariant}</strong>
                  </div>
                </div>
              </div>

              <div className="preview-surface bg-[linear-gradient(160deg,rgba(255,247,237,0.96),rgba(255,255,255,0.8))]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Featured stack</h3>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <ButtonFacebook {...textButtonProps} url={state.url} title={state.title} text="Facebook" />
                  <ButtonTwitter {...textButtonProps} url={state.url} title={state.title} text="Twitter" />
                  <ButtonWhatsapp {...textButtonProps} url={state.url} message={state.message} text="WhatsApp" />
                  <ButtonCopy {...textButtonProps} url={state.url} text="Copy link" copiedLabel={state.copiedLabel} />
                </div>
              </div>
            </div>
          </section>

          <section className="playground-panel">
            <SectionHeader
              eyebrow="Text buttons"
              title="Every full-size button in one pass"
              copy="Use the controls on the left to verify icons, outlined variants, circular styles and payload changes without editing the component source."
            />

            <PreviewSurface title="Primary canvas">
              <ButtonFacebook {...textButtonProps} url={state.url} title={state.title} text="Facebook" />
              <ButtonWhatsapp {...textButtonProps} url={state.url} message={state.message} text="WhatsApp" />
              <ButtonTelegram {...textButtonProps} url={state.url} message={state.message} text="Telegram" />
              <ButtonTwitter {...textButtonProps} url={state.url} title={state.title} text="Twitter" />
              <ButtonLinkedIn {...textButtonProps} url={state.url} text="LinkedIn" />
              <ButtonReddit {...textButtonProps} url={state.url} title={state.title} text="Reddit" />
              <ButtonPinterest
                {...textButtonProps}
                url={state.url}
                mediaUrl={state.mediaUrl}
                description={state.description}
                text="Pinterest"
              />
              <ButtonTumblr {...textButtonProps} url={state.url} title={state.title} content={state.content} text="Tumblr" />
              <ButtonPocket {...textButtonProps} url={state.url} title={state.title} text="Pocket" />
              <ButtonEmail
                {...textButtonProps}
                url={state.url}
                to={state.to}
                subject={state.subject}
                content={state.content}
                text="Email"
              />
              <ButtonCopy {...textButtonProps} url={state.url} text="Copy" copiedLabel={state.copiedLabel} />
            </PreviewSurface>
          </section>

          <section className="playground-panel">
            <SectionHeader
              eyebrow="Icon buttons"
              title="Compact actions and grouped layouts"
              copy="The dark surface below helps verify the white icon treatment and grouped social sets in the exact same environment."
            />

            <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
              <PreviewSurface title="Icon-only preview" tone={whiteIcons ? "dark" : "light"}>
                <FacebookIcon {...iconButtonProps} url={state.url} title={state.title} />
                <WhatsappIcon {...iconButtonProps} url={state.url} message={state.message} />
                <TelegramIcon {...iconButtonProps} url={state.url} message={state.message} />
                <TwitterIcon {...iconButtonProps} url={state.url} title={state.title} />
                <LinkedInIcon {...iconButtonProps} url={state.url} />
                <RedditIcon {...iconButtonProps} url={state.url} title={state.title} />
                <PinterestIcon {...iconButtonProps} url={state.url} mediaUrl={state.mediaUrl} description={state.description} />
                <TumblrIcon {...iconButtonProps} url={state.url} title={state.title} content={state.content} />
                <PocketIcon {...iconButtonProps} url={state.url} title={state.title} />
                <EmailIcon {...iconButtonProps} url={state.url} to={state.to} subject={state.subject} content={state.content} />
                <CopyIcon {...iconButtonProps} url={state.url} copiedLabel={state.copiedLabel} />
              </PreviewSurface>

              <div className="preview-surface bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,244,245,0.84))]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">ButtonGroup</h3>
                </div>
                <ButtonGroup
                  {...shapeProps}
                  isAllWhite={whiteIcons}
                  url={state.url}
                  title={state.title}
                  message={state.message}
                  description={state.description}
                  mediaUrl={state.mediaUrl}
                  content={state.content}
                  to={state.to}
                  subject={state.subject}
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
