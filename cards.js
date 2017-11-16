$(document).ready( function() {

  $('img').attr('src', 'cardassets/img.jpg')

 $('img').on('click', function() {
    var source = $(this).attr('alt')
    $(this).attr('src', 'cardassets/' + source )
 })
})
//i don't kniw if this code works//
// var sampleArr = ["card1.png", "card2.png", "card3.png", "card4.png", ]
// "card5.png", "card6.png", "card7.png", "card8.png", "card1.png",
// "card.png2", "card3.png", "card4.png", "card5.png",
// "card6.png", "card7.png", "card8.png" ]
// when page refreshes, all card go random
// var randArr = []
 //function getRandNum() {
//   var rand = Math.floor(Math.random() * 16 )
//   var aarVar = sampleArr[rand]
//   if (aarVar === undefined)
//     getRandNum()
//     else
//       randArr.push(aarVar)
//       delete sampleArr[rand]
 //}

// while (randArr.length < 16) {
//   getRandNum()
// }

// console.log(randArr)
