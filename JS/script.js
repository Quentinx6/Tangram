var tangram = document.getElementsByClassName("tangram")[0];
var button_basic = document.getElementsByClassName("button--basic")[0];
var button_bateau1 = document.getElementsByClassName("button--bateau1")[0];
var button_bateau2 = document.getElementsByClassName("button--bateau2")[0];
var button_bateau3= document.getElementsByClassName("button--bateau3")[0];
var button_bateau4 = document.getElementsByClassName("button--bateau4")[0];
var button_Quentin = document.getElementsByClassName("button--Quentin")[0];
var button_Simon = document.getElementsByClassName("button--Simon")[0];

button_basic.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--basic');
};
button_bateau1.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--bateau1');
};
button_bateau2.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--bateau2');
};
button_bateau3.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--bateau3');
};
button_bateau4.onclick = function() {
	tangram.className =tangram.className.replace(/tangram--(\S*)/,'tangram--bateau4');

};
button_Quentin.onclick = function() {
	tangram.className =tangram.className.replace(/tangram--(\S*)/,'tangram--Quentin');

};
button_Simon.onclick = function() {
	tangram.className =tangram.className.replace(/tangram--(\S*)/,'tangram--Simon');

};