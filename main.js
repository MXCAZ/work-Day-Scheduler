
let currentDate = $('#currentDay');

currentDate.text(moment().format('MMMM Do YYYY, h:mm '));


let nineAm = $('#9AM');
let tenAm = $('#10AM');
let elevenAm = $('#11AM');
let twelveAm = $('#12AM');
let onePm = $('#1PM');
let twoPm = $('#2PM');
let threePm = $('#3PM');
let fourPm = $('#4PM');
let fivePm = $('#5PM');

let hourBackground =[ nineAm, tenAm, elevenAm, twelveAm, onePm, twoPm, threePm, fourPm, fivePm];

//change background during the time and add real time to the header 
function activities (){

    currentDate.text(moment().format('MMMM Do YYYY, h:mm '));

    let currentTime = moment().format('kk')

    for( i = 0; i < hourBackground.length; i++ ){

    hourBackground[i].removeClass('future past present');

    if(currentTime > hourBackground[i].data('hour') ){

        hourBackground[i].addClass('past');
}

else if( currentTime === hourBackground[i].attr('data-hour')){
    hourBackground[i].addClass('present')
}
else{
    hourBackground[i].addClass('future')
}


}}

getText();
activities();
setInterval(activities, 1000);



//save to local storage 
let userInput;
let hourSpan;

$('.saveButton').on('click', function(event){

    event.preventDefault();

    userInput = $(this).siblings('.form-control').val();
    hourSpan = $(this).siblings('.col-2').text()
    localStorage.setItem(hourSpan,JSON.stringify(userInput))


})

// set the textarea text to the textarea 
function getText(){

    var text9am = JSON.parse(localStorage.getItem('9AM'))
    nineAm.val(text9am);
    var text10am = JSON.parse(localStorage.getItem('10AM'))
    tenAm.val(text10am);
    var text11am = JSON.parse(localStorage.getItem('11AM'))
    elevenAm.val(text11am);
    var text12am = JSON.parse(localStorage.getItem('12AM'))
    twelveAm.val(text12am);
    var text1PM = JSON.parse(localStorage.getItem('1PM'))
    onePm.val(text1PM);
    var text2PM = JSON.parse(localStorage.getItem('2PM'))
    twoPm.val(text2PM);
    var text3PM = JSON.parse(localStorage.getItem('3PM'))
    threePm.val(text3PM);
    var text4PM = JSON.parse(localStorage.getItem('4PM'))
    fourPm.val(text4PM);
    var text5PM = JSON.parse(localStorage.getItem('5PM'))
    fivePm.val(text5PM);
   

    
    };

    // clear the local storage with a button 

    let clearButton = $('#buttonClear')

    clearButton.on('click', function(){
        localStorage.clear()
        getText()


    })



    

   






