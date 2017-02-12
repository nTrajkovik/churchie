export default new Promise((resolve, reject) =>{
  document.body.addEventListener('mouseup', (e) => {
    let text = '';
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== 'Control') {
      text = document.selection.createRange().text;
    }
    if (text) {
      const nodes = e.target.childNodes;
      nodes.forEach((node) => {
        if (node.nodeType === 3) {
          const innerText = node.nodeValue;
          const dataArr = innerText.split(text);
          e.target.innerHTML = `${dataArr[0]}<mark>${text}</mark>${dataArr[1]}`;
        }
      });
      resolve();
    }
  });
});
