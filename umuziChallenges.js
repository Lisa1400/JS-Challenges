// Challenge 1


function checkNum(x,y) 
{
   if(x == 65 || y == 65)
       {
           return true;
       }
    
    else if(x + y == 65)
    {
        return true;
    }
    
    else
        {
            console.log("numbers are not 65/numbers does not add up to 65");
        }
}
checkNum(25,  (34 + 40));





// Challenge 2
   

function triangle(side1, side2, side3)
{
var sp = (side1 + side2 + side3)/2;
var area =  Math.sqrt(sp *((sp-side1)*(sp-side2)*(sp-side3)));
console.log("The Area Of The Triangle Is " + area);
}

triangle(7, 8, 9);





//Challenge 3


function maxNum(a, b, c)
{
    if(a > b && a > c)
        {
            return a;
        }
    
    else if(b > a && b > c)
        {
            return b;
        }

    else if(c > a && c > b)
        {
            return c;
        }
    else
        {
            console.log("error");
        }
}
maxNum(1, 2, 3);





// Challenge 4


function timeConversion(number)
 { 
  var hrs = Math.floor(number / 60);  
  var mins = number % 60;
  return hrs + "h" + mins;         
}
timeConversion(120);





// Challenge 5


function commonLetters(string1, string2)
{
    var one = string1;
    var two = string2;
    var result = [];
    
    for(var i = 0; i < one.length; i++)
        {
            if(two.indexOf(one[i]) !== -1 && result.indexOf(one[i]) === -1)
                {
                result.push(one[i]);
                }
            
        }
    return result.join("");
}
console.log(commonLetters('lisa', 'mabe'));