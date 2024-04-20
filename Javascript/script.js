//JQuery mudando cores

var elementos = document.getElementsByClassName("item-1");

    for (var a = 0; a < elementos.length; a++) {
        
        elementos[a].style['background-color'] = "blue";
    }

    //---Esconder 

    $("#esconder").click(function(){
        $(".exemplo").css("display","none");
    });

    //---Mudar a cor

    $(".item-3").css("background-color", "#f9f9");

    $(".item-4").css("background-color", "#98f6");

    $(".item-5").css("background-color", "#d44");

    $(".item-6").css("background-color", "#a1a3");

    $(".item-7").css("background-color", "#1234");

    $(".item-8").css("background-color", "#321");

    $(".item-9").css("background-color", "#987");

    

