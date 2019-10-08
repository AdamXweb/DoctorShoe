// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function () {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];

  // Constructor
  function Item(name, price, count, desc, ex, id, evcoso, evcola, evcoup, evcoba, lecola, lecote, lecost, lecoco) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.desc = desc;
    this.ex = ex;
    this.id = id;
    this.evcoso = evcoso;
    this.evcola = evcola;
    this.evcoup = evcoup;
    this.evcoba = evcoba;
    this.lecola = lecola;
    this.lecote = lecote;
    this.lecost = lecost;
    this.lecoco = lecoco;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }


  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};

  // Add to cart
  obj.addItemToCart = function (name, price, count, desc, ex, id, evcoso, evcola, evcoup, evcoba, lecola, lecote, lecost, lecoco) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count, desc, ex, id, evcoso, evcola, evcoup, evcoba, lecola, lecote, lecost, lecoco);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (id) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  }

  // Count cart
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


// *****************************************
// Triggers / Events
// *****************************************
//, evcoso, evcola, evcoup, evcoba, lecola, lecote, lecost, lecoco
// Add item
$('.add-to-cart').click(function (event) {
  event.preventDefault();
  var name = $(this).data('name');
  var desc = $(this).data('desc');
  var ex = $(this).data('ex');
  var id = $(this).data('id');
  var evcoso = $(this).data('evcoso');
  var evcola = $(this).data('evcola');
  var evcoup = $(this).data('evcoup');
  var evcoba = $(this).data('evcoba');
  var lecola = $(this).data('lecola');
  var lecote = $(this).data('lecote');
  var lecost = $(this).data('lecost');
  var lecoco = $(this).data('lecoco');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1, desc, ex, id, evcoso, evcola, evcoup, evcoba, lecola, lecote, lecost, lecoco);
  $('#evShoe, #leathershoe, #Access').modal('hide');
  $('#cart').modal('show');
  displayCart();
});

// Clear items
$('.clear-cart').click(function () {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output +=
      "<tr>" +
      "<td>" + cartArray[i].name + "</td>" +
      "<td>(" + cartArray[i].desc + cartArray[i].evcoso + " " + cartArray[i].evcola + " " + cartArray[i].evcoup + " " + cartArray[i].evcoba + " " + cartArray[i].lecoco + " " + cartArray[i].lecola + " " + cartArray[i].lecost + " " + cartArray[i].lecote + ")</td>" +
      "<td>" + cartArray[i].ex + "</td>" +
      "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>" +
      " = " +
      "<td class='pri'>" + "$ " + cartArray[i].total + "</td>" +
      "<td><button class='minus-item btn btn-danger' data-id=" + cartArray[i].id + ">X</button></td>" +
      "</tr>";
  }
  $('.show-cart').html(output)
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button
$('.show-cart').on("click", ".minus-item", function (event) {
  var id = $(this).data('id')
  shoppingCart.removeItemFromCart(id);
  displayCart();
})

$('.show-cart').on("click", ".delete-item", function (event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
  var name = $(this).data('name');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();