function question1() {
  var sumprice = 0;

  for (let i = 0; i < data.length; i++) {
    let product = data[i];
    let price = product.price;
    sumprice += price;
  }
  let avg = sumprice / data.length;
  console.log(avg.toFixed(2));

}
// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  data.forEach(function(element) {
    if (element.price <= 18 && element.price >= 14) {
      console.log(element.title);
    }
  });
}

//3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  data.forEach(function(element) {
    if (element.currency_code === "GBP") {
      console.log(element.title, element.price);
    }
  });
}

//4: Display a list of all items who are made of wood.
function question4() {
  data.forEach(function(element) {
    element.materials.forEach(function(mat) {
      if (mat === "wood") {
        console.log(element.title + " is made of wood");
      }
    });
  });
}

//5: Which items are made of eight or more materials?
// Display the name, number of items and the items it is made of.
function question5() {
  data.forEach(function(element) {
    if (element.materials.length >= 8) {
      console.log(element.title, element.materials.length, element.materials);
    }
  });
}


//6: How many items were made by their sellers?
//Answer:
function question6() {
  let val = 0;
  data.forEach(function(element) {
    if (element.who_made === "i_did") {
      val++
    }
  });
  console.log(val + " items were made by their sellers.");
}
