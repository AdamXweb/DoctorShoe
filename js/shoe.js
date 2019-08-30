var prevVal;
      $("#color").on("change",function(){
        var val = $(this).find('option:selected').val();
        $(".shoe").removeClass(`${prevVal}`).addClass(`${val}`);
        prevVal = val;
      })
var upperVal;
$("upper").on("change",function(){
  var uval = $(this).find('option:selected').val();
  $(".base").removeClass(`${upperVal}`).addClass(`${uval}`);
  upperVal = uval;
});