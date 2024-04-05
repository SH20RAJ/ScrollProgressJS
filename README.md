# ScrollProgressJS

[![Visitors](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FScrollProgressJS&labelColor=%23ff8a65&countColor=%2337d67a&labelStyle=upper&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FScrollProgressJS) [![](https://data.jsdelivr.com/v1/package/gh/SH20RAJ/ScrollProgressJS/badge)](https://www.jsdelivr.com/package/gh/SH20RAJ/ScrollProgressJS)

ScrollProgressJS is a lightweight JavaScript library that creates a customizable scroll progress indicator for web pages. It allows you to display a visual progress bar indicating how much of the page has been scrolled.

- [DEMO](https://sh20raj.github.io/ScrollProgressJS/demo.html)
- [GitHub](https://github.com/SH20RAJ/ScrollProgressJS/)
- [Dev.to](https://dev.to/sh20raj/create-scroll-progress-indicator-on-blogwebsite-4e6)

![ScrollProgressJS Demo](demo.gif)

## Features

- **Customizable Progress Bar**: Configure color, height, and position of the progress bar.
- **Auto-Initialization**: Automatically initializes if `data-autoload` attribute is set.
- **Responsive**: Adjusts dynamically as users scroll through the page.
- **Lightweight**: Simple and efficient library with no external dependencies.
- **Scroll Element Selector**: Specify the element to track for scroll progress.

## Installation

You can include ScrollProgressJS in your project via CDN, npm, or by downloading the script:

### CDN

```html
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/ScrollProgressJS@main/ScrollProgress.js"></script>
```

### npm

```bash
npm install scroll-progress-indicator
```

### Download

- [Download the latest release](https://github.com/SH20RAJ/ScrollProgressJS/releases)

## Usage

### Browser

#### Basic Initialization

To initialize ScrollProgressJS with default settings:

```html
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/ScrollProgressJS@main/ScrollProgress.js" data-autoload="true"></script>
```

#### Advanced Configuration

You can also customize the progress bar with your own configurations:

```html
<script src="scrollprogress.js"></script>
<script>
  // Custom initialization
  ScrollProgress.init({
    color: '#ff5722',   // Progress bar color
    height: '4px',      // Progress bar height
    position: 'bottom'  // Progress bar position ('top' or 'bottom')
  });
</script>
```

#### Updating Configuration

After initialization, you can update the configuration:

```javascript
ScrollProgress.setConfig({
  color: 'hotpink',  // Updated color
  height: '4px',     // Updated height
  position: 'top'    // Updated position
});
```

#### Destroying the Progress Bar

To remove the ScrollProgressJS and stop listening for scroll events:

```javascript
ScrollProgress.destroy();
```

#### Scroll Element Selector

You can specify the element to track for scroll progress using its selector:

```javascript
ScrollProgress.setScrollElement('.article'); // Example: Track scroll progress of the .article element
```

### Node.js

You can also use ScrollProgressJS in Node.js applications:

#### Installation

Install the library using npm:

```bash
npm install scroll-progress-indicator
```

#### Usage

```javascript
// Import ScrollProgress
const ScrollProgress = require('scroll-progress-indicator');

// Initialize
ScrollProgress.init();

// Update configuration (example)
ScrollProgress.setConfig({
  color: '#ff0000',
  height: '6px',
  position: 'bottom'
});

// Destroy
ScrollProgress.destroy();
```

## Examples

### Auto-Initialization

```html
<!-- Auto-initialize with default settings -->
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/ScrollProgressJS@main/ScrollProgress.js" data-autoload="true"></script>
```

### Custom Initialization

```html
<!-- Custom initialization -->
<script src="scrollprogress.js"></script>
<script>
  ScrollProgress.init({
    color: '#007bff',   // Blue color
    height: '3px',      // 3px height
    position: 'bottom'  // Progress bar at the bottom
  });
</script>
```

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a new Pull Request

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by the need for a simple and customizable scroll progress indicator.
- Built with ❤️ and JavaScript.

## Contact

For issues, suggestions, or feedback, please create an [issue](https://github.com/SH20RAJ/ScrollProgressJS/issues).

---

**Made with ❤️ by [SH20RAJ](https://github.com/sh20raj)**
