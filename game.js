let pikachu = {
  name: 'Pikachu',
  health: 1000,
  attacks: {
    punch: 5,
    kick: 10,
    slap: 1
  },
  hits: 0,
  pikachuAttacks: []
}

let dratini = {
  name: 'Dratini',
  health: 1200,
  attacks: {
    punch: 6,
    kick: 11,
    slap: 2
  },
  hits: 0,
  dratiniAttacks: []
}

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
// 

// function kick() {
//   pikachu.health -= 10 
//   pikachu.hits++
//   update()
// }

function pikachuHitCounter(){
pikachu.hits++
}

function dratiniHitCounter(){
  dratini.hits++
  }


function useThunder() {
  let hit = hitChance()
  
  if(hit > 60){
    pikachu.pikachuAttacks.push(pikachuAttacks.thunder)
    dratini.health -= 85 + pikachuAddMods() 
    pikachuHitCounter()
  } 
  update()
}

function useQuickAttack(){
  let hit = hitChance()
  
  if(hit > 0){
    pikachu.pikachuAttacks.push(pikachuAttacks.quick)
    dratini.health -= 15 + pikachuAddMods() 
    pikachuHitCounter()
  } 
  update()
}

function useThunderWave(){
  let hit = hitChance()
  
  if(hit > 20){
    pikachu.pikachuAttacks.push(pikachuAttacks.wave)
    dratini.health -= 10 + pikachuAddMods() 
    pikachuHitCounter()
  } 
  update()
}

function useElectroBall(){
  let hit = hitChance()
  
  if(hit > 35){
    pikachu.pikachuAttacks.push(pikachuAttacks.ball)
    dratini.health -= 20 + pikachuAddMods() 
    pikachuHitCounter()
  } 
  update()
}

function pikachuAddMods() {
  let modifierTotal = 0

  for (let i = 0; i < pikachu.pikachuAttacks.length; i++) {
    let modifierIndex = pikachu.pikachuAttacks[i]
    let modifier = modifierIndex.modifier
    modifierTotal += modifier
  }
  return modifierTotal
}

function useDragonRage(){
  let hit = hitChance()
  
  if(hit > 30){
    dratini.dratiniAttacks.push(dratiniAttacks.rage)
    pikachu.health -= 35 + dratiniAddMods() 
    dratiniHitCounter()
  } 
  update()
}

function useWrap(){
  let hit = hitChance()
  
  if(hit > 0){
    dratini.dratiniAttacks.push(dratiniAttacks.wrap)
    pikachu.health -= 8 + dratiniAddMods() 
    dratiniHitCounter()
  } 
  update()
}

function useDragonTail(){
  let hit = hitChance()
  
  if(hit > 10){
    dratini.dratiniAttacks.push(dratiniAttacks.tail)
    pikachu.health -= 20 + dratiniAddMods() 
    dratiniHitCounter()
  } 
  update()
}

function useHyperBeam(){
  let hit = hitChance()

  if(hit > 60){
    dratini.dratiniAttacks.push(dratiniAttacks.beam)
    pikachu.health -= 150 + dratiniAddMods() 
    dratiniHitCounter()
  } 


  update()
}

function dratiniAddMods(){
  let modifierTotal = 0

  for (let i = 0; i < dratini.dratiniAttacks.length; i++) {
    let modifierIndex = dratini.dratiniAttacks[i]
    let modifier = modifierIndex.modifier
    modifierTotal += modifier
  }
  return modifierTotal
}

function hitChance(){
  let randomNumber = Math.floor(Math.random() * 100)

  return randomNumber
}


// Note update interface when value of health changes
function update() {
  let pikachuHealthElem = document.getElementById("health-pika")
  pikachuHealthElem.innerText = pikachu.health.toString()

  let pikachuNameElem = document.getElementById("name-pika")
  pikachuNameElem.innerText = pikachu.name

  let dratiniHitsElem = document.getElementById("dratini-hits")
  dratiniHitsElem.innerText = dratini.hits.toString()

  let pikachuHitsElem = document.getElementById("pikachu-hits")
  pikachuHitsElem.innerText = pikachu.hits.toString()

  let dratiniHealthElem = document.getElementById("health-dratini")
  dratiniHealthElem.innerText = dratini.health.toString()

  let dratiniNameElem = document.getElementById("name-dratini")
  dratiniNameElem.innerText = dratini.name
}

update()
