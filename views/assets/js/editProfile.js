// CEK USERNAME

$("#input-displayName").on("keyup",function () {
    let user = $("#input-displayName").val();
    if (user == "" ) {
        $("#btnSimpan").css("background-color","#BCBCBC")
        $("#btnSimpan").attr("disabled", true);
        return false
    } 
  
});