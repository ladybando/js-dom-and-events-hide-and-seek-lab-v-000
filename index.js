function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')
  const l = lis.length
  for (let i = 0; i < l; i++){
    for (let j = 0; j < lis[i].children.length; j++){
      let val = parseInt(lis[i].children[j].innerHTML) + n
      lis[i].children[j].innerHTML = val.toString()
    }
  }
}

function deepestChild(){
  return document.querySelector( '#grand-node div div div div' )
}