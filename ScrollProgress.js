// ScrollProgress.js

var ScrollProgress = (function() {
  // Default configuration
  var config = {
    color: '#ff5722',
    height: '4px',
    position: 'top'
  };

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
    function updateProgressBar() {
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (scroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }

    // Event listener for scroll
    window.addEventListener('scroll', updateProgressBar);

    // Initial call to set the progress bar
    updateProgressBar();
  }

  // Public method to update configuration
  function setConfig(newConfig) {
    if (newConfig && typeof newConfig === 'object') {
      config = Object.assign({}, config, newConfig);
    }
  }

  // Public method to destroy the progress bar
  function destroy() {
    var progressBar = document.getElementById('scroll-progress-bar');
    if (progressBar) {
      progressBar.parentNode.removeChild(progressBar);
      window.removeEventListener('scroll', updateProgressBar);
    }
  }

  // Expose public methods
  return {
    init: init,
    setConfig: setConfig,
    destroy: destroy
  };
})();
if(document.currentScript.dataset.autoload) ScrollProgress.init()