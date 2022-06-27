function scuberGreetingForFeet(feet)
{
  // Write your code here!
  if(feet <= 400)
  {
    return "This one is on me!";
  }
  if (feet <= 2000)
  {
    return "That will be twenty bucks."
  }
  if (feet > 2500)
  {
    return "No can do."
  }
  else
  {
    return "I will gladly take your thirty bucks."
  }
}


function ternaryCheckCity(city)
{
  // Write your code here!
  if(city == "NYC")
  {
    return "Ok, sounds good.";
  }
  
  return "No go.";
  
}

function switchOnCharmFromTip(tip)
{
  // Write your code here!
  switch(tip)
  {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}