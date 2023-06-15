/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import type UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
	import type SpaceComponent from "../../SpaceComponent.js";
	import type { ClassMapValue } from "@ui5/webcomponents-base/dist/types.js";
	
function block0 (this: SpaceComponent, context: UI5Element, tags: string[], suffix: string | undefined) { return html`<div class="star-wars-intro"><!-- Blue Intro Text --><p class="intro-text">${ifDefined(this.intro)}</p><!-- Logo Image or Text goes in here --><h2 class="main-logo"><img src="${ifDefined(this.logo)}"/></h2><!-- All Scrolling Content Goes in here --><div class="main-content"><div class="title-content"><slot></slot></div></div></div>`;}


export default block0;