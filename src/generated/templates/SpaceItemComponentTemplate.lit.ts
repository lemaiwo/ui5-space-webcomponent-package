/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import type UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
	import type SpaceItemComponent from "../../SpaceItemComponent.js";
	import type { ClassMapValue } from "@ui5/webcomponents-base/dist/types.js";
	
function block0 (this: SpaceItemComponent, context: UI5Element, tags: string[], suffix: string | undefined) { return html`<article class="space-article"><h2>${ifDefined(this.title)}</h2><p>${ifDefined(this.description)}</p><!-- button or link or whatever --><!--<a href="https://www.google.be" class="space-button">Download The Code Now!</a>--></article>`;}


export default block0;