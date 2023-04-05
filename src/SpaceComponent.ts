import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";

// Template
import SpaceComponentTemplate from "./generated/templates/SpaceComponentTemplate.lit.js";

// Styles
import SpaceComponentCss from "./generated/themes/SpaceComponent.css.js";

import { PLEASE_WAIT } from "./generated/i18n/i18n-defaults.js";

const metadata = {
	tag: "ui5-space-component",
	properties: {
		/**
		 * Defines the intro.
		 * <br><br>
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		intro: {
			type: String,
		},
	},
	managedSlots: true,
	slots: {
		/**
		 * Defines the items.
		 * <br><br>
		 * <b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
		 *
		 * @type {HTMLElement[]}
		 * @slot
		 * @public
		 */
		items: {
			"type": HTMLElement,
			"individualSlots": false,
		},
	},
};
/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>space-component</code> component is a demo component that displays some text.
 *
 * @constructor
 * @alias be.wl.SpaceLibrary.SpaceComponent
 * @extends sap.ui.webc.base.UI5Element
 * @tagname space-component
 * @public
 */
@customElement("space-component")
class SpaceComponent extends UI5Element {
	static i18nBundle: I18nBundle;

	constructor() {
		super();
	}
	static get metadata() {
		return metadata;
	}
	static get render() {
		return litRender;
	}

	static get template() {
		return SpaceComponentTemplate;
	}

	static get styles() {
		return SpaceComponentCss;
	}

	static async onDefine() {
		SpaceComponent.i18nBundle = await getI18nBundle("SpacePackage");
	}

	get pleaseWaitText() {
		return SpaceComponent.i18nBundle.getText(PLEASE_WAIT);
	}
}

SpaceComponent.define();

export default SpaceComponent;
