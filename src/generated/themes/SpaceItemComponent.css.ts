import type { StyleData } from "@ui5/webcomponents-base/dist/types.js";
import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_fiori_3/parameters-bundle.css.js";
import defaultTheme from "./sap_fiori_3/parameters-bundle.css.js";

registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", async () => defaultThemeBase);
registerThemePropertiesLoader("SpacePackage", "sap_fiori_3", async () => defaultTheme);

const styleData: StyleData = {packageName:"SpacePackage",fileName:"themes\SpaceItemComponent.css",content:"/* .space-article {\r\n    position: absolute;\r\n    top: 100%;\r\n    animation: scroll 120s linear 4s forwards;\r\n} */\r\n\r\n.space-article>h2 {\r\n    text-align: center;\r\n}"};
export default styleData;
	