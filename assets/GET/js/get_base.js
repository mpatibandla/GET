$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
});
$(document).ready(function () {
        $('.nav li a[href="' + this.location.pathname + '"]').parent().addClass('active');
});