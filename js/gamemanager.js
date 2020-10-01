let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case "Fighter":
        player = new Player(classType, "Grace", 12, 4, 40, 10, 10);
      case "Paladin":
        player = new Player(classType, "Ulder", 16, 3, 160, 10, 10);
      case "Healer":
        player = new Player(classType, "Moana", 8, 2, 200, 10, 10);
      case "Berzerker":
        player = new Player(classType, "Draven", 8, 4, 0, 10, 10);
      case "Assassin":
        player = new Player(classType, "Carl", 6, 6, 20, 10, 10);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML =
      '<img src="img/avatars/' +
      classType.toLowerCase() +
      '.jpg" class="img-avatar"><div><h3>' +
      classType +
      "</h3><p>Name : " +
      player.name +
      "</p><p>Health : " +
      player.health +
      "</p><p>Strength : " +
      player.strength +
      "</p><p>Mana : " +
      player.mana +
      "</p><p>Agility :" +
      player.agility +
      "</p><p>Speed : " +
      player.speed +
      "</p></div>";
  },
  setPreFight: function () {},
};
