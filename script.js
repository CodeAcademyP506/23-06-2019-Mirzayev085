$(document).ready(function(){
    $(".add").click(function(){
        
        
    var Ftitle = $(".text").val();
    var Frating = $(".rating").val();
    var hazir = "<tr><td><input type='checkbox' name='sil'></td><td>" + Ftitle + "</td><td>" + Frating + "</td></tr>";          
    if(Ftitle != "" && Frating <= 10){

    
    $("table").append(hazir);

    } else if (Ftitle = ""){
        alert("Please add a Film name");
    } 
    
    else if(isNaN(Frating)) {
        alert("Please add a number");

    }else if (Frating > 10){
        alert("Please add a number between 0-10");
        
    }
    
    });

    $(".dlt").click(function(){
        $("table tbody").find('input[name=sil]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        })
    })
    
})

$(".srt").click(function(table, order){


var sorted = $('#myTable tbody tr').sort(function(a, b) {
    var a = $(a).find('td:first').text(), b = $(b).find('td:first').text();
    return a.localeCompare(b, false, {numeric: true})
  })
  
  $('#myTable tbody').html(sorted)

})