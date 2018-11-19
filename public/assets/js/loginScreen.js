$(document).ready(function(){

    $(document).mousemove(function(event) {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        
        mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
        mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        
        $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%,   #84663a, #100e0d)');
      });

    $("#login-button").click(function () {
        location.pathname = '/jobs';
  
    });

})