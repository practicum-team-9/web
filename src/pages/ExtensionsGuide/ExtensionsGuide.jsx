import React from "react";
import { yandexBrowserInstructions } from "@/app/constants/extInstructions/yaBrowser";
import ExtInstructions from "@/widgets/ExtesionInstruction/ExtInstruction";
import { googleChromeInstructions } from "@/app/constants/extInstructions/chrome";

function ExtensionGuide({ browser }) {
  switch (browser) {
    case "GoogleChrome":
      return <ExtInstructions instructions={googleChromeInstructions}/>
    case "YandexBrowser":
      return <ExtInstructions instructions={yandexBrowserInstructions}/>
    default:
      return <ExtInstructions instructions={googleChromeInstructions}/>
  }
}

export default ExtensionGuide;
