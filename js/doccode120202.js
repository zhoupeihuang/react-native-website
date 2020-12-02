(function() {
  document.addEventListener('DOMContentLoaded', init);

  function detectmob() {
    if (window.innerWidth <= 1024) {
      return true;
    } else {
      return false;
    }
  }

  function init() {
    var articleContainer = document.querySelector('.post article');
    if (articleContainer) {
      var el = document.createElement('div');
      el.innerHTML =
        '<a href="https://pushy.reactnative.cn" target="_blank" style="display:block;padding:12px;background-color: #eee;color:#666;"><span style="font-weight: bold;color: #05a5d1;">国内独家极速热更新服务</span> 高速CDN稳定分发，差量更新极省流量。专人技术支持，可私有部署。 <span style="border:solid 1px #666; padding-left:4px; padding-right: 4px;padding-top:2px;padding-bottom:2px;margin-left: 8px;vertical-align:middle;">点此免费使用 &gt;</span></a>';

      articleContainer.insertBefore(el, articleContainer.firstChild);
    }

    if (location.href.indexOf('/getting-started') !== -1) {
      var onPageNav = document.querySelector('nav.onPageNav');
      if (onPageNav) {
        onPageNav.remove();
      }
    }
  }
})();
