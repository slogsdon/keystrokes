import {Keystrokes} from "../src/index";
import {assert} from "chai";

suite("Keystrokes", function () {
    let keystrokes: Keystrokes;

    const setAppVersion = function (appVersion: string) {
        if ((<any> navigator).__defineGetter__) {
            (<any> navigator).__defineGetter__("appVersion", function () {
                return appVersion;
            });
        } else if (Object.defineProperty) {
            Object.defineProperty(navigator, "appVersion", {
                get: function () {
                    return appVersion;
                },
            });
        }
    };

    setup(function () {
        keystrokes = new Keystrokes();
    });

    test("getOS", function () {
        setAppVersion("Windows");
        assert.equal(keystrokes.getOS(), "windows");

        setAppVersion("Mac OS");
        assert.equal(keystrokes.getOS(), "macos");

        setAppVersion("Linux");
        assert.equal(keystrokes.getOS(), "linux");

        setAppVersion("X11");
        assert.equal(keystrokes.getOS(), "unix");

        setAppVersion("Super Special");
        assert.equal(keystrokes.getOS(), "default");
    });
});
