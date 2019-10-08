// Leather shoe
var prevVal;
$("#color").on("change", function () {
  var lval = $(this).find('option:selected').val();
  $(".texture").removeClass(`${prevVal}`).addClass(`${lval}`);
  prevVal = lval;
  $("#leacart").attr("data-lecoco", "Base: " + `${lval}`);
});
var textVal = 'baseshoe';
$("#selecttexture").on("change", function () {
  var teval = $(this).find('option:selected').val();
  $(".texture").removeClass(`${textVal}`).addClass(`${teval}`);
  textVal = teval;
  $("#leacart").attr("data-lecote", "Texture: " + `${teval}`);
});
var leastich;
$("#leastich").on("change", function () {
  var lestich = $(this).find('option:selected').val();
  $(".stiching").removeClass(`${leastich}`).addClass(`${lestich}`);
  leastich = lestich;
  $("#leacart").attr("data-lecost", "Stiching: " + `${lestich}`);
});
var lealaces;
$("#lealaces").on("change", function () {
  var lelaces = $(this).find('option:selected').val();
  $(".llaces").removeClass(`${lealaces}`).addClass(`${lelaces}`);
  lealaces = lelaces;
  $("#leacart").attr("data-lecola", "Laces: " + `${lelaces}`);
});
// Everyday shoe
var soleVal;
$("#selectsole").on("change", function () {
  var soval = $(this).find('option:selected').val();
  $(".sole").removeClass(`${soleVal}`).addClass(`${soval}`);
  soleVal = soval;
  $("#evcart").attr("data-evcoso", "Sole: " + `${soval}`);
});
var laceVal;
$("#selectlace").on("change", function () {
  var laval = $(this).find('option:selected').val();
  $(".lace").removeClass(`${laceVal}`).addClass(`${laval}`);
  laceVal = laval;
  $("#evcart").attr("data-evcola", "Laces: " + `${laval}`);
});
var upperVal;
$("#selectupper").on("change", function () {
  var upval = $(this).find('option:selected').val();
  $(".decor").removeClass(`${upperVal}`).addClass(`${upval}`);
  upperVal = upval;
  $("#evcart").attr("data-evcoup", "Upper: " + `${upval}`);
});
var baseVal;
$("#selectbase").on("change", function () {
  var baval = $(this).find('option:selected').val();
  $(".base").removeClass(`${baseVal}`).addClass(`${baval}`);
  baseVal = baval;
  $("#evcart").attr("data-evcoba", "Base: " + `${baval}`);
});

var testVal;
$("#selecttest").on("change", function () {
  var tval = $(this).find('option:selected').val();
  $(".base").removeClass(`${testVal}`).addClass(`${tval}`);
  testVal = tval;
});
// change attributes for sizes
$("#leasize").on("change", function () {
  var lesval = $(this).find('option:selected').val();
  $("#leacart").attr("data-ex", `${lesval}`);
});

$("#evsize").on("change", function () {
  var evsival = $(this).find('option:selected').val();
  $("#evcart").attr("data-ex", `${evsival}`);
});
// Pre Customisations WIP

var customVal;
$("#selectcustom").on("change", function () {
  var cval = $(this).find('option:selected').each(function () {
    $("select#color").val($(this).val());
  });
});

function terms() {
  alert("Viewing Terms and Conditions")
};

function privacy() {
  alert("Viewing Privacy Policy")
};

function sub() {
  if (document.getElementById("emailsub").value == null || document.getElementById("emailsub").value == "") {

    var email = document.getElementById("emailsub");
    email.addEventListener("input", function (event) {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter an email");
      } else {
        email.setCustomValidity("");
      }
    });
  } else {
    var message = document.getElementById("emailsub").value;
    subemail.innerHTML = message;
    $('#sub').modal('show');
  }
};