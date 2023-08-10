# Facebook Hide Suggestions

A Chrome extension that hides specific elements on Facebook based on user-defined criteria.

## Description

This extension searches for elements with the text "Návrhy pro vás" (easily configurable) on Facebook and hides the element six levels up (configurable depth) from each identified element. It's especially useful for those who want a cleaner, distraction-free Facebook experience.

## Installation

1. Clone this repository:
```
git clone https://github.com/lukas-krecan/facebook-hide-suggestions.git$
```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" at the top right.
4. Click on "Load unpacked" and select the directory where you cloned this repository.
5. The extension should now be added to Chrome and active.

## Configuration

To adjust the text criteria or the depth of the element to hide:

1. Open `content.js`.
2. Modify the values of `targetText` and `divDepth` as needed.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Note
Completely genererated by [ChatGPT](https://chat.openai.com/share/f9b8aa9a-5615-450e-b21f-3f4f1118da05)
