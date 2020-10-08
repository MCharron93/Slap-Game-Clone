let health = 100



// Note reduce health by 1 
// Alert health

function slap(){
  health -= 1

  update()
}

// Note update interface when value of health changes
function update(){
  let healthElem = document.getElementById("health")
  healthElem.innerText = health.toString()

}