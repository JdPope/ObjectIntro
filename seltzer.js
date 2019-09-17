
function helloworld(){
  return console.log("hello world")
}
console.log(helloworld())

let seltzerWaters = {
 'LaCroix': {
   'Grapefruit': {
     'Rating': 1,
     'Feedback': 'I like my face unimploded.'
   },
   'Key Lime': {
     'Rating': 2.7,
     'Feedback': 'Tastes like it passed through an armpit after baking.'
   },
   'Lemon': {
     'Rating': 3,
     'Feedback': 'More pucker, less pout.'
   },
   'Lime': {
     'Rating': 3,
     'Feedback': 'Are these actually limes?'
   }
 },
 'buble': {
   'Grapefruit': {
     'Rating': 1,
     'Feedback': 'Pucker factor overload.'
   },
   'Key Lime': {
     'Rating': 2,
     'Feedback': 'Is this supposed to be musky?'
   },
   'Lemon': {
     'Rating': 5,
     'Feedback': 'Zesty.'
   },
   'Lime': {
     'Rating': 1,
     'Feedback': 'Would not wish this on my worst enemy.'
   }
 }
}

let seltzvalues = Object.values(seltzerWaters)
let ratingvalues = Object.values(seltzvalues)[0]
let rating = Object.values(ratingvalues)[0].Rating

console.log("seltzerWaters", seltzerWaters)
console.log("seltzvalues", seltzvalues)
console.log("ratingvalues", ratingvalues)
console.log("rating", rating)
