/*jogador01 (V)*/
var pontos=120, moedas=15, enfrentouChefe=true;
console.log("jogador01:", pontos>=100 && moedas>=5 && enfrentouChefe);

/*jogador02 (F)*/
var pontos=99, moedas=200, enfrentouChefe=false;
console.log("jogador02:", pontos>=100 && moedas>=5 && enfrentouChefe);

/*jogador03 (v)*/
var pontos=100, moedas=5, enfrentouChefe=true;
console.log("jogador03:", pontos<100 || moedas<5 || enfrentouChefe);

/*jogador04 (V)*/
var pontos= 101, moedas=4, enfrentouChefe=false;
console.log("jogador04:", pontos!=100 || moedas!=5 || enfrentouChefe);
