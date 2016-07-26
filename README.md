# keystrokes

> Display OS-centric keystrokes in browser

Keystrokes will read the keystroke for a particular data attribute following the form `data-{OS slug}`. [See below](#supported-operating-systems) for a list of possible slugs.

## Quick Start

Put this in your source:

```html
<span class="keystroke" data-windows="Ctrl-W" data-macos="Cmd-W"></span>
```

and call this when you see fit:

```js
new Keystrokes();
```

When you browse your source in a browser, you'll see the customized version:

```html
<!-- On Windows -->
<span class="keystroke" data-windows="Ctrl-W" data-macos="Cmd-W"><code>Ctrl-W</code></span>

<!-- On MacOS -->
<span class="keystroke" data-windows="Ctrl-W" data-macos="Cmd-W"><code>Cmd-W</code></span>
```

## Supported Operating Systems

| OS      | Slug      |
| ------- | --------- |
| Windows | `windows` |
| Mac OS  | `macos`   |
| Linux   | `linux`   |
| Unix    | `unix`    |

Any other operating system will need to leverage the `default` data attribute.

## Options

- `selector` - (default: `.keystroke`) - The CSS selector to query for keystrokes
- `useCode` - (default: `true`) - Wraps the keystroke text in a `code` element

## License

This project is licensed under the MIT License. See [`LICENSE`](https://github.com/slogsdon/keystrokes/blob/master/LICENSE) for details.
