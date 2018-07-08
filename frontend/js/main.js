$(document).ready(function () {

    // dropdown arrow

    $('#collapseExample').on('show.bs.collapse', function () {
        $('i.arrow-bottom').addClass('arrow-top').removeClass('arrow-bottom');
    });
    $('#collapseExample').on('hide.bs.collapse', function () {
        $('i.arrow-top').addClass('arrow-bottom').removeClass('arrow-top');
    })

});