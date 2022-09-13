class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard(this.el);
  }

  setupBoard(el) {
    const board = document.createElement("ul");
    board.style.display = "flex";
    board.style.flexWrap = "wrap";
    this.bindEvents(board)
    for (let i=0; i<9; i++) {
      const newLi = document.createElement("li");
      newLi.classList.add("cell");
      newLi.id = `${i}`;
      board.appendChild(newLi);
    }
    this.el.appendChild(board);
  }

  bindEvents(board) {
    board.addEventListener("click", this.handleClick.bind(this))
  }

  handleClick(e) {
    const GRID_POSITION = Array.from([[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]])
    const currentCell = e.target;
    if (!Array.from(currentCell.classList).includes("cell")){
      alert("Invalid move")
      return
    }
    const position = GRID_POSITION[currentCell.id];
    const player = this.game.currentPlayer;
    this.game.playMove(position);
    this.makeMove(currentCell, player);
    if (this.game.isOver()){
      const allBoxes = Array.from(document.querySelectorAll('li'))
      allBoxes.forEach ( box =>
        box.classList.add("lose"))
      const boxes = Array.from(document.getElementsByClassName(player))
      boxes.forEach ( box =>
        box.classList.add("win"));
    }
  }

  makeMove(square, player) {
    square.classList.add(player);
    square.classList.remove("cell");
    square.innerText = player;
  }
}

module.exports = View;
