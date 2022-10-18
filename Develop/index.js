var timeDisplay = $('#currentDay')
var today = moment().format('MMMM Do YYYY, h:mm:ss a')

$('saveBtn').on('click', function() {
    var time = $(this).parent().attr('id')
    var text = $(this).siblings(textarea).val()
    console.log(time, text)
    localStorage.setItem(time, text)
})

function displayTime() {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a')
    timeDisplay.text(today)
}

