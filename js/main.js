$(".success").click(function()
  {
    $("#dialog").dialog({modal:true,buttons:{"OK":function() {
      var $email=$("#email").val();
      var $phone=$("#phone").val();
      var $check_email=/^[a-zA-Z][a-z0-9A-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test($email);
      var $check_phone=/^\+38\(0[1-9]{2}\)[0-9]{7}$/.test($phone);
      if($check_email&&$check_phone)
         $(this).dialog("close");
      else if($check_email==false)
        alert("Unright email!");
      else 
        alert("Unright phone!");
  
    }}, width:500,height:360,title:"Pop-up form",  dialogClass: 'no-close success-dialog',hide:"explode"});

  $("#phone").mask("+38(099)9999999");

  return false;

  });