function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var doc = document.querySelectorAll('.ranked-list')

  for(var i = 0; i < doc.length; i ++) {
    doc[i].innerHTML = parseInt(doc[i].innerHTML) + n
  }
}

//  Define a function deepestChild() that pulls out the most deeply nested child
//  from div#grand-node. (Remember, you can iterate over elements and call querySelector()
//  and querySelectorAll() on them. This is challenging to implement correctly, but not
//  beyond your ability!)

function deepestChild() {
  var current = document.getElementById('grand-node')

  while current.querySelector('div') {
    current = current.querySelector('div') 
  }
  return current
}
