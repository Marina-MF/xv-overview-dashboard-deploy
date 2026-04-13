(function() {
  let meta = {};
  try {
    meta = JSON.parse(localStorage.getItem('metaNav') || '{}');
  } catch (e) {
    console.warn('Invalid metaNav JSON in localStorage:', e);
  }

  const whiteLabel = meta?.WhitelabelName || 'Xv';
  const stylesId = 'brand-style';
  const faviconId = 'brand-favicon';
  let styles = document.getElementById(stylesId);
  let favicon = document.getElementById(faviconId);

  if (!styles) {
    styles = document.createElement('link');
    styles.id = stylesId;
    styles.rel = 'stylesheet';
    document.head.appendChild(styles);
  }

  if (!favicon) {
    favicon = document.createElement('link');
    favicon.id = faviconId;
    favicon.rel = 'shortcut icon';
    document.head.appendChild(favicon);
  }

  favicon.href = `assets-ng/favicon/${whiteLabel}.ico`;
  styles.href = `https://testxv.blob.core.windows.net/xv-styles/${whiteLabel}.css`;
})();
