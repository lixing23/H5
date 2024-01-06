$('.text').focus(function() {
    $(this).parent().addClass('border-highlight');
});
$('.text').blur(function() {
    $(this).parent().removeClass('border-highlight');
});