// Simple language switching function
function toggleLanguage() {
  const currentPath = window.location.pathname;
  
  if (currentPath === '/' || currentPath === '') {
    // Currently on English page, go to Chinese
    window.location.href = '/zh/';
  } else if (currentPath === '/zh/' || currentPath === '/zh') {
    // Currently on Chinese page, go to English
    window.location.href = '/';
  }
}

// Set button text based on current page
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    const currentPath = window.location.pathname;
    if (currentPath === '/zh/' || currentPath === '/zh') {
      btn.textContent = 'English';
    } else {
      btn.textContent = '中文';
    }
  }
}); 