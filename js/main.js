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



        //Animaciones para los números
        $('.resumen-evento li:nth-child(1) p').animateNumber({number: 21}, 1200);

        $('.resumen-evento li:nth-child(2) p').animateNumber({number: 32}, 1200);

        $('.resumen-evento li:nth-child(3) p').animateNumber({number: 45}, 1200);

        $('.resumen-evento li:nth-child(4) p').animateNumber({number: 10}, 1200);

});