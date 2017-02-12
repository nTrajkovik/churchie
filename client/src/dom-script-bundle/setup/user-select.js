export default function(cb) {
  let selectEvent = document.body.addEventListener('mouseup', (e) => {
    if(window.getSelection().toString().length > 0) {
      let mark = document.createElement('mark');
      mark.setAttribute('id', 'my-mark')
      let text = window.getSelection().getRangeAt(0).surroundContents(mark);
      document.body.removeEventListener('mouseup', selectEvent);
      cb();
    }
  });
};
