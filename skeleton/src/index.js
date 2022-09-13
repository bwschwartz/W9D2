const View = require('./ttt-view')
const Game = require('../ttt_node/game')

document.addEventListener("DOMContentLoaded", () => {
  // debugger
  const game = new Game();
  const container = document.getElementsByClassName("ttt")[0];
  const view = new View(game, container);
});
