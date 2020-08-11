canvas = document.getElementById("canvas");
//コンテキストの取得
context = canvas.getContext("2d");
//円を描く
var x = 100,
   y = 100,
   radius = 100,
   startAngle = 0,
   endAngle = 360,
   anticlockwise = 0;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
context.fillStyle = '#B6B6B6';
context.fill();


//mousedownチェック用
var mouseDown = false;
//マウス座標保存用
var wbound = 0;
var stX = 0;
var stY = 0;
var x = 0;
var y = 0;
//canvas要素保存用
var canvas;
var context;
//描画の開始
function startDraw(event){
//マウスボタンが押された
mouseDown = true;
//canvasの絶対座標を取得
wbound = event.target.getBoundingClientRect() ;
//マウスの座標（始点）をセット
stX = event.clientX - wbound.left;
stY = event.clientY - wbound.top;}

function Draw(event){
//マウスボタンが押されていれば描画
if (mouseDown){

//マウスの座標(終点）を取得
x = event.clientX - wbound.left;
y = event.clientY - wbound.top;

//パスの開始
context.beginPath();
//線の太さセット
context.lineWidth = 10;
//線端の形状セット
context.lineCap = "round";
context.globalCompositeOperation = "destination-out";
context.moveTo(stX,stY);
context.lineTo(x,y);
context.stroke();
//座標（始点）の切替
stX = x;
stY = y;}}

//描画の終了
function endDraw(event){
//マウスボタンが押されていれば描画
if (mouseDown){
//マウスボタンが離された
mouseDown = false;}}
context.lineTo(x,y);
context.stroke();
//座標（始点）の切替
stX = x;
stY = y;}}

//描画の終了
function endDraw(event){
//マウスボタンが押されていれば描画
if (mouseDown){
//マウスボタンが離された
mouseDown = false;}}
