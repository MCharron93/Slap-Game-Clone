let pikachuAttacks = {
  thunder: {
    name: 'Thunder',
    modifier: 50,
    description: 'BZZZzzzzZZzzz'
  },
  quick: {
    name: 'Quick Attack',
    modifier: 1,
    description: 'ZOOM'
  },
  wave: {
    name: 'Thunder Wave',
    modifier: 1,
    description: 'ZZZZZZZZZZZZZZ!'
  },
  ball:{
    name: 'Electro Ball',
    modifier: 10,
    description: 'Catch!'
  }
}

let dratiniAttacks = {
  rage: {
    name: 'Dragon Rage',
    modifier: 5,
    description: "RRRAAWRRR!"
  },
  wrap: {
    name: 'Wrap',
    modifier: 1,
    description: 'kshasghks'
  },
  tail: {    
    name: 'Dragon Tail',
  modifier: 1,
  description: 'Yeehaw'
  },
  beam: {
    name: 'Wrap',
    modifier: 100,
    description: '1-Hit KO!'
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
  hits: 0,
  dratiniAttacks: []
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


// Note reduce health by 1 
// Alert health

// function slap() {
//   pikachu.health -= 1 
//   pikachu.hits++
//   update()
// }

// function punch() {
//   pikachu.health -= 5 
//   pikachu.hits++
//   update()
// }

// function kick() {
//   pikachu.health -= 10 
//   pikachu.hits++
//   update()
// }

function useThunder() {
  pikachu.pikachuAttacks.push(pikachuAttacks.thunder)
  dratini.health -= 10 + addMods()
  update()
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
  let pikachuHealthElem = document.getElementById("health-pika")
  pikachuHealthElem.innerText = pikachu.health.toString()

  let pikachuNameElem = document.getElementById("name-pika")
  pikachuNameElem.innerText = pikachu.name

  let hitsElem = document.getElementById("hits")
  hitsElem.innerText = pikachu.hits.toString()

  let dratiniHealthElem = document.getElementById("health-dratini")
  dratiniHealthElem.innerText = dratini.health.toString()

  let dratiniNameElem = document.getElementById("name-dratini")
  dratiniNameElem.innerText = dratini.name
}

update()