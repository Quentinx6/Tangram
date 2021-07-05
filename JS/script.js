var tangram = document.getElementsByClassName("tangram")[0];
var button_basic = document.getElementsByClassName("button--basic")[0];
var button_cat = document.getElementsByClassName("button--bateau1")[0];
var button_butterfly = document.getElementsByClassName("button--bateau2")[0];
var button_rabbit = document.getElementsByClassName("button--bateau3")[0];
var button_snake = document.getElementsByClassName("button--bateau4")[0];

button_basic.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--basic');
};
button_cat.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--bateau1');
};
button_butterfly.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--bateau2');
};
button_rabbit.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--bateau3');
};
button_snake.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--bateau4');
};