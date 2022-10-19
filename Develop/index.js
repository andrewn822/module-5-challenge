var timeDisplay = $('#currentDay')
var today = moment().format('MMMM Do YYYY, h:mm:ss a')

$('.saveBtn').on('click', function() {
    var time = $(this).parent().attr('id')
    var text = $(this).siblings('textarea').val()
    console.log(time, text)
    localStorage.setItem(time, text)
})

function displayTime() {
    var today = moment().format('MMMM Do YYYY, [at] h:mm:ss a')
    timeDisplay.text(today)
}

setInterval(displayTime, 1000)

var currentHour = moment().hour()

$('.time-block').each(function(){
    var blockHour = parseInt($(this).attr('id').split('hour')[1]);
   
    if (currentHour > blockHour){
        $(this).addClass('past')
        $(this).removeClass('present')
        $(this).removeClass('future');
    }

    else if(currentHour < blockHour){
        $(this).addClass('future')
        $(this).removeClass('present')
        $(this).removeClass('past'); 
    }

    else if (currentHour === blockHour){
        $(this).removeClass('past')
        $(this).removeClass('future')
        $(this).addClass('present')
    }
})

$(document).ready(function(){
    $('#hour8 textarea').val(localStorage.getItem('hour8'))
    $('#hour9 textarea').val(localStorage.getItem('hour9'))
    $('#hour10 textarea').val(localStorage.getItem('hour10'))
    $('#hour11 textarea').val(localStorage.getItem('hour11'))
    $('#hour12 textarea').val(localStorage.getItem('hour12'))
    $('#hour13 textarea').val(localStorage.getItem('hour13'))
    $('#hour14 textarea').val(localStorage.getItem('hour14'))
    $('#hour15 textarea').val(localStorage.getItem('hour15'))
    $('#hour16 textarea').val(localStorage.getItem('hour16'))
    $('#hour17 textarea').val(localStorage.getItem('hour17'))

})