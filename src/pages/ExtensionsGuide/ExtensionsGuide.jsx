import React from "react";
import ChromeInstruction from "@/widgets/ExtesionInstruction/ChromeInstruction";
import YaBrowserInstruction from "@/widgets/ExtesionInstruction/YaBrowserInstruction";

function ExtensionGuide({ browser }) {
  switch (browser) {
    case "GoogleChrome":
      return <ChromeInstruction />
    case "YandexBrowser":
      return <YaBrowserInstruction />
    default:
      return <ChromeInstruction />
  }
}

export default ExtensionGuide;
