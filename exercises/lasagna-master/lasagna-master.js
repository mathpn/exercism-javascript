/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  switch (remainingTime) {
    case 0:
      return "Lasagna is done.";
    case undefined:
      return 'You forgot to set the timer.';
    default:
      return 'Not done, please wait.';
  };
}

export function preparationTime(layers, avgPreparationTime) {
  avgPreparationTime = avgPreparationTime || 2
  return layers.length * avgPreparationTime;
}

export function quantities(layers) {
  let quantities_obj = { 'noodles': 0, 'sauce': 0 }
  for (let layer of layers) {
    console.log(layer)
    if (layer == 'noodles') {
      quantities_obj.noodles += 50
    } else if (layer == 'sauce') {
      quantities_obj.sauce += 0.2
    }
  }
  return quantities_obj;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1));
}

export function scaleRecipe(recipe, portions) {
  let new_recipe = {}
  for (const ingredient in recipe) {
    new_recipe[ingredient] = recipe[ingredient] * portions / 2
  };
  return new_recipe;
}