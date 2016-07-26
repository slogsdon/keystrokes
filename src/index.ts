export class Keystrokes {
    public static defaults: IOptions = {
        selector: ".keystroke",
        useCode:  true,
    };

    public options: IOptions;

    constructor(options: IOptions = {}) {
        this.options = this.applyOptions(Keystrokes.defaults, options);

        let keystrokes = document.querySelectorAll(this.options.selector);
        for (let i = 0; i < keystrokes.length; i++) {
            let keystroke = keystrokes[i];
            this.setContents(
                keystroke,
                this.getText(<HTMLElement> keystroke)
            );
        }
    }

    public getOS() {
        let os = "default";
        if (navigator.appVersion.indexOf("Win") !== -1) {
            os = "windows";
        }
        if (navigator.appVersion.indexOf("Mac") !== -1) {
            os = "macos";
        }
        if (navigator.appVersion.indexOf("X11") !== -1) {
            os = "unix";
        }
        if (navigator.appVersion.indexOf("Linux") !== -1) {
            os = "linux";
        }
        return os;
    };

    public getText(el: HTMLElement) {
        let text = el.textContent || el.innerText || "";
        const dflt = (<any> el.attributes)["data-default"];
        const attr = (<any> el.attributes)["data-" + this.getOS()] || dflt;
        if (attr) {
            text = attr.nodeValue;
        }
        return "" + text;
    };

    public applyOptions(source: IOptions, properties: IOptions) {
        let property: string;
        let destination: IOptions = {};

        if (!source) {
            source = {};
        }

        for (property in source) {
            if (source.hasOwnProperty(property)) {
                destination[property] = source[property];
            }
        }

        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                destination[property] = properties[property];
            }
        }

        return destination;
    }

    public setContents(el: Element, contents: string) {
        const text = document.createTextNode(contents);
        let node: Element | Text;
        if (this.options.useCode) {
            node = document.createElement("code");
            node.appendChild(text);
        } else {
            node = text;
        }

        if (el.firstChild) {
            el.replaceChild(node, el.firstChild);
        } else {
            el.appendChild(node);
        }
    }
}

export interface IOptions {
    [index: string]: string | boolean;
    selector?: string;
    useCode?: boolean;
}
