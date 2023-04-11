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
	tag: "space-component",
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
		/**
		 * Defines the intro.
		 * <br><br>
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		logo: {
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
	// private intro: string = '';

	constructor() {
		super();
	}
	// static get observedAttributes() {
	// 	return ['intro','logo'];
	// }
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
	onAfterRendering() {
		const numStars = 100;

		// this.shadowRoot!.addEventListener('click', e => {
		// 	const event = new CustomEvent('doSomething', {
		// 		composed: true,
		// 		bubbles: true,
		// 		detail: { intro: this.intro }
		// 	});
		// 	this.shadowRoot!.dispatchEvent(event);
		// });
		const mainDiv = this.shadowRoot!.querySelector(".star-wars-intro") as HTMLElement;
		// For every star we want to display
		for (let i = 0; i < numStars; i++) {
			const star = document.createElement("div");
			star.className = "star";
			const xy = this.getRandomPosition(mainDiv);
			star.style.top = `${xy[0]}px`;
			star.style.left = `${xy[2]}px`;
			mainDiv.append(star);
		}
	}
	getRandomPosition(element: HTMLElement) {
		const y = element.offsetWidth;
		const x = element.offsetHeight;
		const randomX = Math.floor(Math.random() * x);
		const randomY = Math.floor(Math.random() * y);
		return [randomX, randomY];
	}
}

SpaceComponent.define();

export default SpaceComponent;
