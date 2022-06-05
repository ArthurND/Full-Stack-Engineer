let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');
let readLess = document.getElementById('read-less');

// Write your code here:
function showInfo(){
  moreInfo.style.display = 'block';
}

function hideInfo(){
  moreInfo.style.display= 'none';
}
readMore.addEventListener('click', showInfo);
readLess.addEventListener('click', hideInfo);