// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var res = {};
    var dollars = [50, 25, 10, 5, 1];
    var newDollars = [0, 0, 0, 0, 0];
        // Your code goes here!
      // Return an object containing the minimum number of coins needed to make change
      if(currency>10000) {
        res = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return res;
      }
      else if (currency===0) {
        return res;
      }
      else {
      for (var i=0; i<dollars.length; i++) {
        if ((currency/dollars[i])>=1) {
            newDollars[i] = Math.floor(currency/dollars[i]);
            currency = currency - newDollars[i]*dollars[i];

        }
      else continue;
      }

      res.H = newDollars[0];
       res.Q = newDollars[1];
       res.D = newDollars[2];
       res.N = newDollars[3];
       res.P = newDollars[4];
       if (res.H === 0)
        {delete res.H;
        }
       if (res.Q===0) {delete res.Q;}
       if (res.D===0) {delete res.D;}
       if (res.N===0) {delete res.N;}
       if (res.P===0) {delete res.P;}

       return res;
     }
}
