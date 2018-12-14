$(document).ready(function () {

    $("#amount").inputmask({ alias: "rubles" });
    var a_val = parseInt($("#amount").val().replace('  ₽', '').replace(' ', ''));
    $("#amount-slider").slider({
        value: a_val,
        max: 1000000,
        slide: function (event, ui) {
            $("#amount").val(ui.value);
        }
    });

    $("#due").inputmask({ alias: 'due' });
    var d_val = parseInt($("#due").val().replace('  месяцев', '').replace(' ', ''));
    $("#due-slider").slider({
        value: d_val,
        max: 60,
        slide: function (event, ui) {
            $("#due").val(ui.value);
        }
    });

    $("#payment").inputmask({ alias: 'payment' });
    var p_val = parseInt($("#payment").val().replace('  ₽/мес', '').replace(' ', ''));
    $("#payment-slider").slider({
        value: p_val,
        max: 100000,
        slide: function (event, ui) {
            $("#payment").val(ui.value);
        }
    });


    var text = {
        base: 'Посмотреть льготные условия',
        active: 'Скрыть льготные условия',
    };
    $('.toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle-content').slideToggle();
        $(this).text($(this).hasClass('active') ? text.active : text.base);
    })
});
