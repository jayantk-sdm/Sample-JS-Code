$(document).ready(function(){
   // alert(2);
    var windowHt = $(window).height()-63+"px";
    $('#slimScrollContainer').slimscroll({
        height: windowHt
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});