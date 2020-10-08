let pikachuAttacks = {
  thunder: {
    name: 'Thunder',
    modifier: 2,
    description: 'BZZZzzzzZZzzz'
  }
}

let dratini = {
  name: 'Dratini',
  health: 110,
  attacks: {
    punch: 6,
    kick: 11,
    slap: 2
  },
  hits: 0
}

let pikachu = {
  name: 'Pikachu',
  health: 100,
  attacks: {
    punch: 5,
    kick: 10,
    slap: 1
  },
  hits: 0,
  pikachuAttacks: []
}


//let health = 100
//let target = "pikachu"
//let hits = 0

// Note reduce health by 1 
// Alert health

function slap() {
  pikachu.health -= 1 + addMods()
  pikachu.hits++
  update()
}

function punch() {
  pikachu.health -= 5 + addMods()
  pikachu.hits++
  update()
}

function kick() {
  pikachu.health -= 10 + addMods()
  pikachu.hits++
  update()
}

function giveTMThunder() {
  pikachu.pikachuAttacks.push(pikachuAttacks.thunder)
}

function addMods() {
  let modifierTotal = 0

  for (let i = 0; i < pikachu.pikachuAttacks.length; i++) {
    let modifierIndex = pikachu.pikachuAttacks[i]
    let modifier = modifierIndex.modifier
    modifierTotal += modifier
  }
  return modifierTotal
}


// Note update interface when value of health changes
function update() {
  let healthElem = document.getElementById("health-pika")
  healthElem.innerText = pikachu.health.toString()

  let nameElem = document.getElementById("name-pika")
  nameElem.innerText = pikachu.name

  let hitsElem = document.getElementById("hits")
  hitsElem.innerText = pikachu.hits.toString()

}

update()