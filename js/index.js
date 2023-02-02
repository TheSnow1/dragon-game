let health  = 50;
let count = 0;
let enemyNode = document.querySelector(`#enemy`);
let healthNode = document.querySelector(`#health`);
let dragonNode = document.querySelector(`#dragon`);

enemyNode.addEventListener(`click`, function (){
	health = health - 1;
	healthNode.innerHTML = `Здоровье: ` + health;
});

enemyNode.addEventListener(`click`, function (){
	count = count + 1;

	if (count == 1) {
		health = health - 1;
	} else if (count == 2) {
		health = health - 3;
	} else {
		health = health -10;
		count =0;
	}
	if (health > 0) {
		count = 0;
	} else {
         dragonNode.innerHTML = `<img class="wheel" src="assets/dragon-fruit.png" />`;
         healthNode.innerHTML = `<p>Поздравляю, ты победил дракона!</p>`
     }
});