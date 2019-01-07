unction getFirstSelector(sel){
  return document.querySelector(sel)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')
  const l = lis.length
  for (let i = 0; i < l; i++){
    for (let j = 0; j < lis[i].children.length; j++){
      let newVal = parseInt(lis[i].children[j].innerHTML) + n
      lis[i].children[j].innerHTML = newVal.toString()
    }
  }
}

function deepestChild(){
  return document.querySelector( '#grand-node div div div div' )
}