function HashStorageFunc() {
  this.storage = new Map();

  this.addValue = function (key, value) {
    this.storage.set(key, value);
  };

  this.getValue = function (key) {
    return this.storage.get(key);
  };

  this.deleteValue = function (key) {
    if (this.storage.has(key)) {
      this.storage.delete(key);
      return true;
    } else {
      return false;
    }
  };

  this.getKeys = function () {
    let res = [];
    for (let k of this.storage.keys()) {
      res.push(k);
    }
    return res;
  };
}

info = new HashStorageFunc();

function addInfo() {
  let drink = prompt('Enter drink: ');
  let pr = prompt('Enter price: ');
  let alc = confirm('Does the drink contain alcohol?');
  let rcp = prompt('Enter recipe:');

  info.addValue(drink, { price: pr, alcohol: alc, recipe: rcp });
}

function check() {
  let drink = prompt('Enter the name of the drink to get info: ');
  let res = info.getValue(drink);
  if (res) {
    alert(
      `Drink: ${drink}\nPrice: ${res.price}\nContains alcohol: ${res.alcohol}\nRecipe: ${res.recipe}`
    );
  } else {
    alert('No information about the drink');
  }
}

function drinkInventory() {
  alert(info.getKeys());
}

function deleteDrink() {
  let drinkToDelete = prompt('Enter the name of the drink to delete: ');
  info.deleteValue(drinkToDelete)
    ? alert(`${drinkToDelete} deleted`)
    : alert(`${drinkToDelete} already not in storage`);
}
