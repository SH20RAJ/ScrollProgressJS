/**
 * ScrollProgress.js
 * A JavaScript library to create a progress bar indicating scroll progress on the page.
 * Version: 1.0.0
 * Author: Your Name
 * License: MIT
 */

var ScrollProgress = (function() {
    // Default configuration
    var config = {
      color: '#ff5722',
      height: '4px',
      position: 'top'
    };
  
    // Function to update the progress bar
    function updateProgressBar(progressBar) {
      return function() {
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (scroll / height) * 100;
        progressBar.style.width = scrolled + '%';
      };
    }
  
    function init(customConfig) {
      // Merge custom configuration with default config
      if (customConfig && typeof customConfig === 'object') {
        config = Object.assign({}, config, customConfig);
      }
  
      // Create the progress bar element
      var progressBar = document.createElement('div');
      progressBar.id = 'scroll-progress-bar';
      progressBar.style.width = '0%';
      progressBar.style.height = config.height;
      progressBar.style.backgroundColor = config.color;
      progressBar.style.position = 'fixed';
      if (config.position === 'top') {
        progressBar.style.top = '0';
      } else if (config.position === 'bottom') {
        progressBar.style.bottom = '0';
      }
      progressBar.style.left = '0';
      progressBar.style.zIndex = '9999';
      progressBar.style.transition = 'width 0.3s';
  
      // Append the progress bar to the body
      document.body.appendChild(progressBar);
  
      // Function to update the progress bar
      var onScroll = updateProgressBar(progressBar);
  
      // Event listener for scroll
      window.addEventListener('scroll', onScroll);
  
      // Initial call to set the progress bar
      onScroll();
    }
  
    // Public method to update configuration
    function setConfig(newConfig) {
      ScrollProgress.destroy();
      if (newConfig && typeof newConfig === 'object') {
        config = Object.assign({}, config, newConfig);
      }
      init(config);
    }
  
    // Public method to destroy the progress bar
    function destroy() {
      var progressBar = document.getElementById('scroll-progress-bar');
      if (progressBar) {
        progressBar.parentNode.removeChild(progressBar);
        window.removeEventListener('scroll', updateProgressBar);
      }
    }
  
    // Auto-initialize if data-autoload is set to true
    if (document.currentScript && document.currentScript.dataset.autoload) {
      init();
    }
  
    // Expose public methods
    return {
      init: init,
      setConfig: setConfig,
      destroy: destroy
    };
  })();
  
  // Export for Node.js
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = ScrollProgress;
  }

  