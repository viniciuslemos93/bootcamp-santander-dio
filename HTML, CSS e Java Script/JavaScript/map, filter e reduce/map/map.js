/* Utilizando o parâmetro This
const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}

function mapComThis (arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;         
    
    }, thisArg);
}

const nums = [1, 2];
console.log(`This -> maca`, mapComThis(nums, maca));

console.log(`This -> laranja`, mapComThis(nums, laranja));
*/
//Sem usar o parâmetro this.

function mapSemThis (arr) {
    return arr.map(function(item) {
        return item * 2;
    })
}
const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));
console.log(nums);














/*Outro exemplo
const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());
 */

