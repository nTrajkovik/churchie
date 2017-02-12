export default function(cb) {
  const body = document.getElementsByTagName('body');
  const reactAnchor = document.createElement('div');

  reactAnchor.id = 'churchie-anchor';
  reactAnchor.setAttribute('data-churchie-anchor', true);
  body[0].insertBefore(reactAnchor, body[0].firstChild);

  cb({'top': document.body.scrollTop});
}
