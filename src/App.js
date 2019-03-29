import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const board =/* [
  ["#","#","#","#","#","#"," ","#","#","#","#","#","#"],
  ["#","#","#","#","#"," "," "," ","#","#","#","#","#"],
  ["#","#","#","#"," "," "," "," "," ","#","#","#","#"],
  ["#","#","#"," "," "," "," "," "," "," ","#","#","#"],
  ["#","#"," "," "," "," "," "," "," "," "," ","#","#"],
  ["#"," "," "," "," "," "," "," "," "," "," "," ","#"],
  [" "," "," "," "," "," "," "," "," "," "," "," "," "],
  ["#"," "," "," "," "," "," "," "," "," "," "," ","#"],
  ["#","#"," "," "," "," "," "," "," "," "," ","#","#"],
  ["#","#","#"," "," "," "," "," "," "," ","#","#","#"],
  ["#","#","#","#"," "," "," "," "," ","#","#","#","#"],
  ["#","#","#","#","#"," "," "," ","#","#","#","#","#"],
  ["#","#","#","#","#","#"," ","#","#","#","#","#","#"],
];*/

[
  ['#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
  ['#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
  ['#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
  ['#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#','#','#'],
  ['#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#','#'],
  ['#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#'],
  ['#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#','#'],
  ['#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#'],
  ['#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ','#','#','#','#','#','#','#','#'],
  ['#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#'],
  ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#'],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#'],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#'],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#'],
  ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#'],
  ['#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
  ['#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
  ['#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#'],
  ['#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#'],
  ['#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#'],
];

const spells = [
  {
    name : "jump",
    cost : 1,
    HPCost : 1,
    maxUses : -1,
    remainingUses : -1,
    POMin : 1,
    POMax : 1,
    inline : true,
    diag : false,
    move : true,
    attract : true
  },
  {
    name: "Super Jump",
    cost: 2,
    HPCost : 1,
    maxUses: 2,
    remainingUses: 2,
    POMin: 1,
    POMax: 2,
    inline: true,
    diag: false,
    move: true,
    attract : true
  },
  {
    name: "Staying alive",
    cost: 1,
    HPCost : 5,
    maxUses: 1,
    remainingUses: 1,
    POMin: 1,
    POMax: 1,
    inline: false,
    diag: true,
    move: false,
    attract : true,
    invulnerable : true
  }
];

const player = {
  x : 15,
  y : 15,
  HP : 50,
  PA: 10
};
const enemies = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coefX : 36,
      coefY : 17,
      runes : this.generateRunes(),
      player : JSON.parse(JSON.stringify(player)),
      enemies : JSON.parse(JSON.stringify(enemies)),
      spells : JSON.parse(JSON.stringify(spells)),
      lose : false,
      win : false,
      turn : 0
    }
  }


  render() {
    const { runes, player, enemies, spells, selectedSpell, lose, win, coefX, coefY } = this.state;
    const playerX = this.calcX(player.y,player.x) * coefX,
          playerY = this.calcY(player.y,player.x) * coefY;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to bolgrot online</h1>
        </header>
        {lose ?
          <div>
            <h2>YOU LOSE</h2>
            <button className={'end-btn'} onClick={this.reset}>Restart ?</button>
          </div>
          :
          (win ?
            <div>
              <h2>YOU WON</h2>
              <button className={'end-btn'} onClick={this.reset}>Restart ?</button>
            </div>
            :
          <div>
            <svg className={'board'} ref={'svg'}>
              {
                board
                  .map((row,indexRow) => row.map((cell,index) =>
                    {
                      const x = this.calcX(indexRow,index) * coefX,
                            y = this.calcY(indexRow,index) * coefY;

                      if(cell === "#") return null;
                      return (<polygon data-x={index} data-y={indexRow} className={"cell"} data-odd={!!((y/coefY) % 2)} points={[[x+coefX,y].join(' '),[x+coefX*2,y+coefY].join(' '),[x+coefX,y+coefY*2].join(' '),[x,y+coefY].join(' ')]}/>);
                    }
                  )
                )
              }

              {enemies.map(enemy => {
                const x = this.calcX(enemy.y,enemy.x) * coefX,
                      y = this.calcY(enemy.y,enemy.x) * coefY;

                  return (<polygon className={"spirit"} points={[[x+coefX,y].join(' '),[x+coefX*2,y+coefY].join(' '),[x+coefX,y+coefY*2].join(' '),[x,y+coefY].join(' ')]}/>);
                }
              )}

              {runes.map(rune => {
                  const x = this.calcX(rune.y,rune.x) * coefX,
                        y = this.calcY(rune.y,rune.x) * coefY;

                  return (<polygon data-x={rune.x} data-y={rune.y} className={"rune"} points={[[x+coefX,y].join(' '),[x+coefX*2,y+coefY].join(' '),[x+coefX,y+coefY*2].join(' '),[x,y+coefY].join(' ')]}/>);
                }
              )}

              {this.calcPossibilities(selectedSpell || null,player).map(obj => {
                const index = obj.x;
                const indexRow = obj.y;
                const x = this.calcX(indexRow,index) * coefX,
                      y = this.calcY(indexRow,index) * coefY;

                return <polygon className={"playableCell"} onClick={this.useSpellEvent({x : index, y : indexRow})} data-odd={!!((y/coefY) % 2)} points={[[x+coefX,y+coefY/4].join(' '),[x+coefX*2-coefX/4,y+coefY].join(' '),[x+coefX,y+coefY*2-coefY/4].join(' '),[x+coefX/4,y+coefY].join(' ')]}/>;
              })}

              <polygon className={"player"} data-odd={!!((playerY/coefY) % 2)} points={[[playerX+coefX,playerY].join(' '),[playerX+coefX*2,playerY+coefY].join(' '),[playerX+coefX,playerY+coefY*2].join(' '),[playerX,playerY+coefY].join(' ')]}/>
            </svg>



            <div className={'status-bar'}>
              <div className={'status'}>
                <p>
                  {this.state.player.HP}
                </p>
                <p>
                  {this.state.player.PA}
                </p>
              </div>
              {spells.map((spell,index) =>
                <div className={'spell'} onClick={this.selectSpellEvent(index)}>
                  <p>{spell.name}</p>
                  <p>{(spell.maxUses !== -1)?[spell.remainingUses,spell.maxUses].join('/'):"Infinite"}</p>
                </div>
              )}
              <button className={'end-btn'} onClick={this.endOfTurn}>End of turn</button>
            </div>
          </div>)
        }
      </div>
    );
  }

  componentDidMount(){
    const { svg } = this.refs;

    const coefX = Math.floor(svg.getBBox().width/board[0].length);
    const coefY = Math.floor(svg.getBBox().height/board.length);

    //console.log(svg.getBBox().width,board[0].length,svg.getBBox().width/board[0].length)
    console.log(board.length, board[0].length);

    //this.setState({coefX, coefY});
  }

  selectSpellEvent = (index) => {
    return () => {
      const { spells, player } = this.state;
      if(spells[index] && spells[index].remainingUses !== 0 && player.PA >= spells[index].cost)
        this.setState({selectedSpell : spells[index]});
    }
  };

  calcX = (x,y) => {
    //return x + Math.floor((board.length)/2) - y;
    return x + 14 - y;
  };

  calcY = (x,y) => {
    //return x + y - Math.floor(board[0].length/2);
    return x + y - 11;
  };

  calcPossibilities = (spell, playerPos) => {
    const result = [];
    if(spell) {
      for (let i = (spell.POMin); i <= spell.POMax; i++) {
        if(spell.inline) {
          if (board[playerPos.y] && board[playerPos.y][playerPos.x - i] === " ") result.push({
            x: playerPos.x - i,
            y: playerPos.y
          });
          if (board[playerPos.y] && board[playerPos.y][playerPos.x + i] === " ") result.push({
            x: playerPos.x + i,
            y: playerPos.y
          });
          if (board[playerPos.y - i] && board[playerPos.y - i][playerPos.x] === " ") result.push({
            x: playerPos.x,
            y: playerPos.y - i
          });
          if (board[playerPos.y + i] && board[playerPos.y + i][playerPos.x] === " ") result.push({
            x: playerPos.x,
            y: playerPos.y + i
          });
        }
        else if(spell.diag){
          if (board[playerPos.y - i] && board[playerPos.y - i][playerPos.x - i] === " ") result.push({
            x: playerPos.x - i,
            y: playerPos.y - i
          });
          if (board[playerPos.y - i] && board[playerPos.y - i][playerPos.x + i] === " ") result.push({
            x: playerPos.x + i,
            y: playerPos.y - i
          });
          if (board[playerPos.y + i] && board[playerPos.y + i][playerPos.x - i] === " ") result.push({
            x: playerPos.x - i,
            y: playerPos.y + i
          });
          if (board[playerPos.y + i] && board[playerPos.y + i][playerPos.x + i] === " ") result.push({
            x: playerPos.x + i,
            y: playerPos.y + i
          });
        }
      }
    }

    return result;
  };

  useSpell = (spell,target) => {
    const { player, enemies } = this.state;
    let newEnemies = enemies;

    if(spell.cost <= player.PA) {
      if (spell.move) {
        player.x = target.x;
        player.y = target.y;

        newEnemies = this.checkToKillEnemies(target,newEnemies);
      }

      player.PA -= spell.cost;
      player.HP -= spell.HPCost;

      if(player.HP <= 0) this.setState({lose : true});

      if(spell.remainingUses > 0)spell.remainingUses --;
      if(spell.remainingUses === 0 || player.PA < spell.cost)
        this.setState({selectedSpell : null});

      if(spell.attract)
        newEnemies = this.attractEnemies(target,newEnemies,spell.invulnerable);
    }

    this.setState({player , enemies : newEnemies});
  };

  useSpellEvent = (target) => {
    return _ => {
      const {selectedSpell} = this.state;
      this.useSpell(selectedSpell || null,target);
    }
  };

  checkToKillEnemies = (target,enemies) => {
    const { player, turn } = this.state;
    const index = enemies.findIndex((enemy) => target.x === enemy.x && target.y === enemy.y);
    if(index >= 0) {
      enemies.splice(index, 1);
      enemies = this.repulseAround(target,enemies);
      player.HP++;
    }

    if(turn >= 6 && enemies.length === 0)
      this.setState({win : true});

    this.setState({player});
    return enemies;
  };

  attractEnemies = (target,enemies, invulnarable = false) => {
    const { player } = this.state;

    for(const e of enemies.sort(
      (a,b) => ((Math.abs(target.x - a.x) + Math.abs(target.y - a.y)) > ((Math.abs(target.x - b.x) + Math.abs(target.y - b.y))))
    )){
      const dx = target.x - e.x;
      const dy = target.y - e.y;
      let newX = e.x, newY = e.y;

      if(Math.abs(dx) >= Math.abs(dy) && dx !== 0){
        newX = e.x + (dx/Math.abs(dx));
      }
      if(Math.abs(dx) <= Math.abs(dy) && dy !== 0){
        newY = e.y + (dy/Math.abs(dy));
      }

      if(player.x === newX && player.y === newY){
        if(!invulnarable)this.setState({lose : true});
      }
      else if(!enemies.find((enemy) => enemy.x === newX && enemy.y === newY)) {
        console.log(e, newX, newY);
        e.x = newX;
        e.y = newY;
      }
    }

    return enemies;
  };

  repulseAround = (target, enemies) => {
    for(const e of enemies.filter((obj) =>
      Math.abs(obj.x - target.x) <= 1 && Math.abs(obj.y - target.y) <= 1
    )){
      const dx = target.x - e.x;
      const dy = target.y - e.y;
      let newX = e.x, newY = e.y;

      if(Math.abs(dx) >= Math.abs(dy) && dx !== 0){
        newX = e.x - (dx/Math.abs(dx));
      }
      if(Math.abs(dx) <= Math.abs(dy) && dy !== 0){
        newY = e.y - (dy/Math.abs(dy));
      }

      if(!enemies.find((enemy) => enemy.x === newX && enemy.y === newY) && board[newY][newX] !== "#") {
        if(Math.abs(dx) === Math.abs(dy)) {
          if (!enemies.find((enemy) => enemy.x === newX && enemy.y === e.y) && !enemies.find((enemy) => enemy.x === e.x && enemy.y === newY) && board[newY][e.x] !== "#" && board[e.y][newX] !== "#") {
            e.x = newX;
            e.y = newY;
          }
        }
        else {
          e.x = newX;
          e.y = newY;
        }
      }
    }

    return enemies;
  };

  endOfTurn = () => {
    const { player, spells, turn, enemies } = this.state;

    player.HP--;
    player.PA = 10;
    for(const e of spells){
      e.remainingUses = e.maxUses;
    }

    this.createEnemies();
    const runes = (turn < 6)?this.generateRunes():[];

    this.setState({player, spells, runes, turn : turn + 1});

    if(turn >= 6 && enemies.length === 0)
      this.setState({win : true});
  };

  reset = () => {
    this.setState({
      runes : this.generateRunes(),
      player : JSON.parse(JSON.stringify(player)),
      enemies : JSON.parse(JSON.stringify(enemies)),
      spells : JSON.parse(JSON.stringify(spells)),
      lose : false,
      win : false,
      turn : 0
    });
  };

  getAllPossibleCouples = () => {
    const result = [];
    for(const i in board){
      for(const j in board[i]){
        if(board[i][j]!== "#") {
          result.push({
            x: parseInt(j),
            y: parseInt(i)
          });
        }
      }
    }


    return result
  };

  generateRunes = (total = 6) => {
    const result =[],indexTab = [];
    const possibleCells = this.getAllPossibleCouples();

    for(let i = 0; i < total; i++){
      let index;
      do {
        index = Math.floor(Math.random() * 1000000 % possibleCells.length);
      }while (indexTab.includes(index));

      console.log(index);

      indexTab.push(index);
      result.push(possibleCells[index]);
    }

    console.log(result);

    return result;
  };

  createEnemies (){
    const { runes, enemies, player } = this.state;

    for(const e of runes){
      if((e.x !== player.x || e.y !== player.y) && !enemies.find((obj) => obj.x === e.x && obj.y === e.y)){
        enemies.push({...e});
      }
    }

    this.setState({enemies});
  }
}

export default App;
