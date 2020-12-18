//DOM CONTENT LOADED
$(function(){

    alert("Funciona!!");
        
    //Refacciones
        $('div.ocultar').hide();

        $('.info .datos:first').show();


        $('div.enlaces a').on('click', function(){

        var enlace = $(this).attr('href');

        console.log(enlace);
        

        });

});