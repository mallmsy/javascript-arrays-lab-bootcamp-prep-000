var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return(kittens)
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}


function destructivelyRemoveLastKitten (name) {
  kittens.pop()
  return(kittens)
}