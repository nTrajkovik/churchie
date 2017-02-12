const elements = document.getElementsByTagName('*');

// TODO: this value to be set
let selection;

for (let i = 0; i < elements.length; i += 1) {
  const element = elements[i];

  for (let j = 0; j < element.childNodes.length; j += 1) {
    const node = element.childNodes[j];

    if (node.nodeType === 3) {
      const text = node.nodeValue;
      if (text.indexOf(selection) >= 0) {
        const dataArr = text.split(selection);

        element.innerHTML = `${dataArr[0]} <mark>${selection}</mark> ${dataArr[1]}`;
        i = elements.length;
        j = element.childNodes.length;
      }
    }
  }
}
