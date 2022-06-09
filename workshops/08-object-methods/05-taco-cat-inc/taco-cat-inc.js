let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,
};

// YOUR CODE BELOW
//lets create a new key currentInventory, whose value is a function
tacoCatInc.currentInventory = function () {
  let totalValue = 0;

  // lets loop through all the keys in current object
  for (let key in this) {
    // value at each key
    let fstLevelValue = this[key];
    // because the value is also an object
    // lets loop through keys in that value also
    for (let iKey in fstLevelValue) {
      // getting the inner value
      let sndLevelValue = fstLevelValue[iKey];
      // now this value is the last level object
      // which has the keys 'cost' and 'quantity'
      // to get totalValue, we have to add cost x quantity to existing totalValue
      totalValue += sndLevelValue.cost * sndLevelValue.quantity;
    }
  }

  //now lets return the final value
  return totalValue;
};

//lets create a sale method on our object
//that takes an order object
tacoCatInc.sale = function (order) {
  //we need to return price of the order
  let price = 0;

  //TODO
  /*
  1. updates the inventory of the purchased items
 
  the order is of the format
  {
    gourmetShell: 'hard treat shell',
    gourmetFishFilling: 'salmon'
  };
  */
  //lets loop through the order
  for (let key in order) {
    let curValue = order[key];
    //The item is inventory[key][curValue]
    let item = this[key][curValue];
    //item is object in the format {cost: 2, quantity: 100}
    //so price needs to increase by cost
    price += item.cost;
    //inventory needs to reduce by 1
    item.quantity--;
  }

  /*
  2. adds the price of the order to the company's cash property
  */
  this.cash += price;

  return price;
};
