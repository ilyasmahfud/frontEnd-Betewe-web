
$("#tombolJawab").click(function() {
 
   var lable = $("#tombolJawab").attr("value");
 
  //alert(lable);

   if(lable == "Show") {
     $("#tombolJawab").attr("value", "Hide");
     $("#jawabPertanyaanIni").show();
   }
   else {
     $("#tombolJawab").attr("value", "Show");
     $("#jawabPertanyaanIni").hide();
   }
   
 });