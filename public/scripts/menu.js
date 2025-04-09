// 1) Toggle the nav menu on mobile:
document.querySelector('.hamburger')?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('expanded');
  });
  
  // 2) Switch language by rewriting the path:
  window.navigateLang = function(newLang) {
    // remove the first two segments (/en/...), then reassemble
    console.log("NOT IMPLEMENTED: navigateLang");
    const currentPath = window.location.pathname.split('/').slice(2).join('/') || '';
    const newPath = `/${newLang}/${currentPath}`;
    window.location.href = newPath;
  };
  
  document.addEventListener('DOMContentLoaded', function () {
    // On language <select> change, navigate to same page but new language
    document.getElementById("langSwitcher")?.addEventListener("change", function () {
      navigateLang(this.value);
    });
  });
  