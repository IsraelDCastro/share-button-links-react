import React from "react";
import { ButtonFacebook, ButtonWhatsapp } from "@/components/main";

export default function Buttons() {
  return (
    <div className="relative flex flex-wrap wrapper">
      <div className="bg-white content flex-1">
        <div id="installation" className="mb-8 p-8">
          <h1 className="mb-2 text-4xl">Buttons</h1>
          <h2 className="mb-5 text-2xl">Installation</h2>
          <p className="mb-2">
            You can install it using <span className="bg-gray-100 px-1">yarn add share-button-links-react</span> or{" "}
            <span className="bg-gray-100 px-1">npm install share-button-links-react</span>.
          </p>
          <p className="mb-2">To import it inside your components just add:</p>
          <p className="mt-4">
            To import the CSS or SCSS just add: <span className="bg-gray-100 px-1">{`@import 'share-button-links-react/main.css';`}</span>{" "}
            or <span className="bg-gray-100 px-1">{`@import 'share-button-links-react/main.scss';`}</span>.
          </p>
          <p>
            <span className="text-primary-600 font-semibold">Note:</span> Most of the svg icons in buttons belong to{" "}
            <a href="https://icons.getbootstrap.com/" target="_blank" rel="noreferrer nofollow noopener" className="link info">
              Bootstrap Icons.
            </a>{" "}
            and others to{" "}
            <a href="https://tablericons.com/" target="_blank" rel="noreferrer nofollow noopener" className="link info">
              Tabler Icons.
            </a>
          </p>
        </div>
        <ButtonFacebook text="hola" />
        <ButtonWhatsapp />
        {/* <Telegram /> */}
        {/* <Twitter /> */}
        {/* <LinkedIn /> */}
        {/* <Reddit /> */}
        {/* <Pinterest /> */}
        {/* <Tumblr /> */}
        {/* <Pocket /> */}
        {/* <Email /> */}
        {/* <Copy /> */}
      </div>
    </div>
  );
}
