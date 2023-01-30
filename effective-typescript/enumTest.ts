enum Flavor {
  VANILLA = "vanilla",
  CHOCO = "choco",
  STRAWBERRY = "strawberry",
}

function scoop(f: Flavor) {
  console.log(f);
}

// in javascript
// scoop("vanilla"); // 정상




scoop("vanilla");
scoop(Flavor.VANILLA);
