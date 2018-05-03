chrome.storage.sync.get("enable", function(result) {
  console.log('Value currently is ' + result.enable)
  if (result.enable) {

console.log('Where\'s Tim???');
let filenames = [
  'img/tim1.jpg',
  'img/tim2.jpg',
  'img/tim3.jpg',
  'img/tim4.jpg',
  'img/tim5.jpg',
]
let imgs = document.getElementsByTagName('img');

for (imgElement of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = filenames[r];
  let url = chrome.runtime.getURL(file);
  imgElement.src = url;
  console.log(url);
}


let text = document.querySelectorAll('p,li,h1,h2,h3,h4,span,div,b');
for (element of text) {
  element.innerHTML = element.innerHTML.replace(/\b([A-Z]\w*)\b/g,'Tim!');
}

}
});
