
  let powder = 0;
  let blowSnow = 1;
  let autoBoosters = 0;
  
  let clickUpgrades = {
    SnowCat: {
      price: 20,
      quantity: 0,
      multiplier: 1,
      type: "click"
    },
    
    WaterTruck: {
      price: 100,
      quantity: 0,
      multiplier: 5,
      type: "click"
    },
    
    WaterSource: {
      price: 150,
      quantity: 0,
      multiplier: 4,
      type: "auto"
    },
    
    SnowStorm: {
      price: 600,
      quantity: 0,
      multiplier: 20,
      type: "auto"
    }
  };
  
  function snowBlower() {
    powder += blowSnow
    document.getElementById("powder").innerText = powder.toString()
  }
  
  function clickUpgrade(item) {
    let upgrades = clickUpgrades[item];
    
    if (powder >= upgrades.price) {
      powder -= upgrades.price
      upgrades.quantity++
      upgrades.price *= 2
      
      document.getElementById(item).innerText ="Another " + item + " booster while take " + (upgrades.price).toString() + " powder level"
      document.getElementById(item + "-count").innerText = (upgrades.quantity).toString()
      document.getElementById(item + "-booster").innerText = (upgrades.quantity * upgrades.multiplier).toString()
      document.getElementById("powder").innerText = powder.toString()
      
      if (upgrades.type == "click") {
        blowSnow += upgrades.multiplier
      } else {
        autoBoosters += upgrades.multiplier
      }
    }
  }
  
  function collectAutoUpgrades() {
    powder += autoBoosters
    document.getElementById("powder").innerText = powder.toString()
  }
  
  function startInterval() {
    let collectionInterval = setInterval(collectAutoUpgrades, 1500);
  }
  startInterval()

  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }