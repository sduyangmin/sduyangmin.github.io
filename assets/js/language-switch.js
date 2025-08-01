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

// Set button text and update sidebar content based on current page
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    const currentPath = window.location.pathname;
    if (currentPath === '/zh/' || currentPath === '/zh') {
      btn.textContent = 'English';
      updateSidebarToChinese();
    } else {
      btn.textContent = '中文';
      updateSidebarToEnglish();
    }
  }
});

// Update sidebar content to Chinese
function updateSidebarToChinese() {
  // Update description
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', '专注于时空数据挖掘和基于LLM Agent的金融世界模拟');
  }
  
  // Update author bio
  const authorBio = document.querySelector('.author__bio');
  if (authorBio) {
    authorBio.textContent = '北京中关村学院 & 山东大学';
  }
  
  // Update location
  const location = document.querySelector('.author__location');
  if (location) {
    location.textContent = '杭州，中国';
  }
}

// Update sidebar content to English
function updateSidebarToEnglish() {
  // Update description
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', 'Focusing on spatiotemporal data mining and LLM Agent-based simulation systems for financial/economic modeling.');
  }
  
  // Update author bio
  const authorBio = document.querySelector('.author__bio');
  if (authorBio) {
    authorBio.textContent = 'Zhongguancun Academy & Shandong University';
  }
  
  // Update location
  const location = document.querySelector('.author__location');
  if (location) {
    location.textContent = 'Hangzhou, China';
  }
} 