function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 2500) {
    return 'No can do.';
  } 
  else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.';
  } 
}


function ternaryCheckCity(city){
  let cityMessage;
  city === 'NYC' ? (cityMessage = "Ok, sounds good.") : (cityMessage = "No go.");
  return cityMessage;
}

function switchOnCharmFromTip(tip){
  let tipMessage;
  switch (tip) {
    case 'generous' :
      return tipMessage = "Thank you so much.";
    
    case 'not as generous' :
      return tipMessage = "Thank you.";

    case 'thanks for everything' :
      return tipMessage = "Bye.";

  }

}