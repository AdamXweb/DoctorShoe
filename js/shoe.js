var prevVal;
      $("#color").on("change",function(){
        var val = $(this).find('option:selected').val();
        $(".shoe").removeClass(`${prevVal}`).addClass(`${val}`);
        prevVal = val;
      });