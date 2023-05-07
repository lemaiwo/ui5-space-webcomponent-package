# UI5con2023
## UI5WebComponent
### Project setup
- Generate UI5 WebComponent Package
```
npm init @ui5/webcomponents-package@1.11.0 -- --name SpacePackage --enable-typescript
```
- Provide the name for the first UI5 WebComponent, eg.: space-component
- Open Package in Code:
```
code SpacePackage
```
- Open bash terminal
- Install dependencies
```
npm i
```
- Run the generated Package with UI5WebComponent
```
npm start
```
### SpaceComponent
- Provide the template
```
<div class="star-wars-intro">
    <p class="intro-text">{{intro}}</p>

    <h2 class="main-logo">
        <img src="{{logo}}"/>
    </h2>

    <div class="main-content">
        <div class="title-content">
            <slot name="items"></slot>
        </div>
    </div>
</div>
```
- Change the alias, this needs to be the same as the library that consumes this UI5WebComponent
```
 * @alias demo.components.SpaceComponent
 //becomes
 * @alias be.wl.SpaceLibrary.SpaceComponent
```
- Include properties & slots
```
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
```
- Define properties
```
/**
	 * Defines the intro of the space component.
	 *
	 * @type {string}
	 * @name be.wl.SpaceLibrary.SpaceComponent.prototype.intro
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	intro!: string;

	/**
	 * Defines the logo of the space component.
	 *
	 * @type {string}
	 * @name be.wl.SpaceLibrary.SpaceComponent.prototype.logo
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	logo!: string;
```
- Define slot
```
	/**
	 * Defines the articles of the component.
	 *
	 * @type {be.wl.SpaceLibrary.SpaceItemComponent[]}
	 * @name be.wl.SpaceLibrary.SpaceComponent.prototype.items
	 * @slot items
	 * @public
	 */
	@slot({ type: HTMLElement, "default": true, individualSlots: true })
	items!: Array<SpaceItemComponent>;
```
- Implement generation of stars using onAfterRendering function
```
    onAfterRendering() {
		const numStars = 100;
		const mainDiv = this.shadowRoot!.querySelector(".star-wars-intro") as HTMLElement;

		// For every star we want to display
		for (let i = 0; i < numStars; i++) {
			const { top, left } = this.getRandomPosition(mainDiv);
			mainDiv.append(this.getRandomStar(top, left));
		}
	}
	getRandomStar(top: string, left: string) {
		const star = document.createElement("div");
		star.className = "star";
		star.style.top = top;
		star.style.left = left;
		return star;
	}
	getRandomPosition(element: HTMLElement) {
		return {
			top: `${this.getRandomNumber(element.offsetHeight)}px`,
			left: `${this.getRandomNumber(element.offsetWidth)}px`,
		};
	}
	getRandomNumber(value: number) {
		return Math.floor(Math.random() * value);
	}
```
- Apply css
```
:host {
    border: 2px solid var(--my-component-border-color);
    background-color: var(--sapBackgroundColor);
    color: var(--sapTextColor);
    display: block;
    /* width: 24rem; */
    /* height: 3rem; */
    text-align: center;
    vertical-align: middle;
    line-height: 3rem;
}
.star {
    position: absolute;
    width: 1px;
    height: 1px;
    background-color: white;
}

.star-wars-intro {
    /* background: url("img/stars-bg.jpg") center center; */
    width: 100%;
    height: 100%;
    font-family: "Droid Sans", arial, verdana, sans-serif;
    font-weight: 700;
    color: #EBD71C;
    background-color: #000;
    overflow: hidden;
    position: relative;
}

.star-wars-intro p.intro-text {
    position: relative;
    max-width: 16em;
    font-size: 200%;
    font-weight: 400;
    margin: 20% auto;
    color: #4ee;
    opacity: 0;
    z-index: 1;
    text-align: center;
    -webkit-animation: intro 2s ease-out;
    -moz-animation: intro 2s ease-out;
    -ms-animation: intro 2s ease-out;
    -o-animation: intro 2s ease-out;
    animation: intro 2s ease-out;
}

.star-wars-intro .main-content {
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    z-index: 3;
    width: 98%;
    height: 50em;
    bottom: 0;
    font-size: 80px;
    font-weight: bold;
    text-align: justify;
    overflow: hidden;
    transform-origin: 50% 100%;
    transform: perspective(350px) rotateX(25deg);
}

.star-wars-intro .main-content:after {
    position: absolute;
    content: ' ';
    top: 0;
    bottom: 60%;
    background-image: linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%);
    pointer-events: none;
}

/* Main Image Styles */
.star-wars-intro .main-logo {
    position: absolute;
    width: 2.6em;
    left: 50%;
    top: 20vh;
    font-size: 10em;
    text-align: center;
    margin-left: -1.3em;
    line-height: 0.8em;
    letter-spacing: -0.05em;
    color: #000;
    text-shadow: -2px -2px 0 #EBD71C, 2px -2px 0 #EBD71C, -2px 2px 0 #EBD71C, 2px 2px 0 #EBD71C;
    opacity: 0;
    z-index: 1;
    -webkit-animation: logo 5s ease-out 2.5s;
    -moz-animation: logo 5s ease-out 2.5s;
    -ms-animation: logo 5s ease-out 2.5s;
    -o-animation: logo 5s ease-out 2.5s;
    animation: logo 5s ease-out 2.5s;
}

.star-wars-intro .main-logo>img {
    max-width: 100%;
}

@-webkit-keyframes intro {
    0% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@-moz-keyframes intro {
    0% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@-ms-keyframes intro {
    0% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@-o-keyframes intro {
    0% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes intro {
    0% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@-webkit-keyframes logo {
    0% {
        -webkit-transform: scale(1);
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    100% {
        -webkit-transform: scale(0.1);
        opacity: 0;
    }
}

@-moz-keyframes logo {
    0% {
        -moz-transform: scale(1);
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    100% {
        -moz-transform: scale(0.1);
        opacity: 0;
    }
}

@-ms-keyframes logo {
    0% {
        -ms-transform: scale(1);
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    100% {
        -ms-transform: scale(0.1);
        opacity: 0;
    }
}

@-o-keyframes logo {
    0% {
        -o-transform: scale(1);
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    100% {
        -o-transform: scale(0.1);
        opacity: 0;
    }
}

@keyframes logo {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: scale(0.1);
        opacity: 0;
    }
}

@keyframes scroll {
    0% {
        top: 100%;
    }

    100% {
        top: -170%;
    }
}
```
### Space Item Component
- The component generator does not yet support TypeScript, so I'll make a copy of the SpaceComponent of the files:
    - SpaceComponent.hbs ==> SpaceItemComponent.hbs
    - SpaceComponent.ts ==> SpaceItemComponent.ts
    - SpaceComponent.css ==> SpaceItemComponent.css
- Include it in the bundle.esm.js
```
import "./dist/SpaceItemComponent.js";
```
- Provide the template
```
<article class="space-article">
    <h2>{{title}}</h2>
    <p>{{description}}</p>
</article>
```
- Provide the class
```
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";

// Template
import SpaceItemComponentTemplate from "./generated/templates/SpaceItemComponentTemplate.lit.js";

// Styles
import SpaceItemComponentCss from "./generated/themes/SpaceItemComponent.css.js";

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
	/**
	 * Defines the title of the space item component.
	 *
	 * @type {string}
	 * @name be.wl.SpaceLibrary.SpaceItemComponent.prototype.title
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	title!: string;

	/**
	 * Defines the description of the space item component.
	 *
	 * @type {string}
	 * @name be.wl.SpaceLibrary.SpaceItemComponent.prototype.description
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	description!: string;

	constructor() {
		super();
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
```
- Provide css
```
.space-article>h2 {
    text-align: center;
}
```

- Resolve dependency in SpaceComponent for SpaceItemComponent
```
import SpaceItemComponent from "./SpaceItemComponent.js";
```

### Test page
- Provide test page
```
<space-component id="myFirstComponent" intro="Hell UI5con!" logo="./img/star-wars-intro.png">
    <space-item-component slot="items" title="EPISODES IV-VI" description="After years of galactic silence, civilization is on the brink of a new Star Wars release. Now, with the Force preparing to awaken, the people of Earth seek solace in films of old. With nowhere to turn, they gather in great numbers and watch the original trilogy without rest. Three films. 6 hours. 24 minutes. Popcorn. Slushies. Total elation."></space-item-component>
    <space-item-component slot="items" title="Episode V: The Empire Strikes Back Opener" description="It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space"></space-item-component>
</space-component>
```
- Copy logo image
- Start test page
```
npm start
```