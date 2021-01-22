
function kilometerToMeter(meter) {
    var meter = meter * 1000;
    // 1 kilometer =1000 meter
   return meter;
}
var result = kilometerToMeter(9);
console.log(result);


function megaFriend(name){
  var friend = name.match(/\w[a-z]{0,}/gi);
  var result = friend[0];
  for(var i = 1 ; i < friend.length ; i++)
  {
    if(result.length < friend[i].length)
    {
    result = friend[i];
    } 
  }
  return result;
}
 var result= megaFriend('asif, arif, harun, lokman, ashab, mahabub');
console.log(result);


function hotelCost(day) {
  var moneyCost = 0;
  if (day<=10) {
    moneyCost = day * 100;
  } else if (day<=20) {
      var firstPart = 10 * 100;
      var totelCost = day -10;
      var scondPart = totelCost * 80;    
      moneyCost = firstPart + scondPart;
  } else {
      var firstPart = 10 * 100;
      var scondPart = 10 * 80;
      var totelCost = day - 20;
      var thirdPart = totelCost * 50;
      moneyCost =  firstPart + scondPart + thirdPart;
  }
    return moneyCost;
  }
    var result = hotelCost (30);
    console.log(result);  


    function budgetCalculator(watch, phone, laptop) {
        var watch = watch * 50;
        var phone = phone * 100;
        var laptop = laptop * 500;
        var product = watch + phone + laptop;
        return product;
      
    }
    var result = budgetCalculator(2, 2, 2);
    console.log(result);