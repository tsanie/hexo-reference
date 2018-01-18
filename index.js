var renderFootnotes = require('./src/footnotes'),
    util = require('hexo-util'),
    ref = hexo.config.reference;

// Add CDN CSS resources
var css_link = ref.cdn || 'https://cdn.jsdelivr.net/hint.css/2.4.1/hint.min.css';

// Register footnotes filter
hexo.extend.filter.register('before_post_render', function(data) {
  data.content = renderFootnotes(data.content);
  return data;
});

hexo.extend.filter.register('after_post_render', function(data) {
  data.content =
      util.htmlTag('link', {rel: 'stylesheet', type: 'text/css', href: css_link}) +
      data.content;
  return data;
});