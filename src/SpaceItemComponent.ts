import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";

// Template
import SpaceItemComponentTemplate from "./generated/templates/SpaceItemComponentTemplate.lit.js";

// Styles
import SpaceItemComponentCss from "./generated/themes/SpaceItemComponent.css.js";

/**
 * @public
 */
const metadata = {
	tag: "space-item-component",
	properties: /** @lends sap.ui.webc.SpacePackage.SpaceItemComponent.prototype */ {
		title: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	slots: /** @lends sap.ui.webc.SpacePackage.SpaceItemComponent.prototype */ {
		//
	},
	events: /** @lends sap.ui.webc.SpacePackage.SpaceItemComponent.prototype */ {
		//
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * <h3>Usage</h3>
 *
 * For the <code>ui5-space-item-component</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import SpacePackage/dist/SpaceItemComponent.js";</code>
 *
 * @constructor
 * @alias be.wl.SpaceLibrary.SpaceItemComponent
 * @extends sap.ui.webc.base.UI5Element
 * @tagname space-item-component
 * @public
 */
@customElement("space-item-component")
class SpaceItemComponent extends UI5Element {
	constructor() {
		super();
	}
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return SpaceItemComponentCss;
	}

	static get template() {
		return SpaceItemComponentTemplate;
	}

	static get dependencies() {
		return [];
	}

	static async onDefine() {

	}
}

SpaceItemComponent.define();

export default SpaceItemComponent;
