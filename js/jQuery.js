//Скрипт для раскрытия-закрытия статей
$(function () {
    parameters = {
        duration: 400,
    }
    $('#talkbubble').click(function () {
        $('#content_station-text-detail').slideToggle(parameters);
    });
})

$(function () {
    parameters = {
        duration: 400,
    }
    $('#talkbubble-1').click(function () {
        $('#content_station-text-detail-1').slideToggle(parameters);
    });
})

$(function () {
    parameters = {
        duration: 400,
    }
    $('#talkbubble-2').click(function () {
        $('#content_station-text-detail-2').slideToggle(parameters);
    });
})

$(function () {
    parameters = {
        duration: 400,
    }
    $('#talkbubble-3').click(function () {
        $('#content_station-text-detail-3').slideToggle(parameters);
    });
})

$(function () {
    parameters = {
        duration: 400,
    }
    $('#talkbubble-4').click(function () {
        $('#content_station-text-detail-4').slideToggle(parameters);
    });
})

//-----------------------//

/*Скрипт для раскрытия-закрытия меню бургер*/
$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .header_burger-menu').toggleClass('active'); //Добавляем/убираем класс active по click
            $('body').toggleClass('lock');
    });
})