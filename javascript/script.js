$('#mobile_bnt').on('click', function () {
    $('#mobile_menu').toggleClass('active');
    $(this).find('i').toggleClass('fa-bars fa-x');
});
