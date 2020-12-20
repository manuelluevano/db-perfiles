//DOM CONTENT LOADED
$(function(){

    alert("Funciona!!");
        
    //Refacciones

        $('.info .datos:first').show();
        $('nav.enlaces a:first').addClass('activo');
        $('nav.enlaces a').on('click', function(){
        $('.ocultar').hide();
        $('nav.enlaces a').removeClass('activo');
        $(this).addClass('activo');

        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        console.log(enlace);
        

        return false;
        
        });

});