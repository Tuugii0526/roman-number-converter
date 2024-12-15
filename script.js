const numberInput=document.getElementById('number');
const convertButton=document.getElementById('convert-btn');
const output=document.getElementById('output');
const reset=()=>
{
  numberInput.value=""
}
const romanNumbers=[
  {1:'I',
  4:'IV',5:'V',9:"IX"},
  {
    1:"X",4:"XL",5:'L',9:"XC"
  },
  {
    1:"C",4:"CD",5:"D",9:"CM"},
  {
    1:"M"
  }
]
const repeatLetter=(letter,number)=>
{
  const array=[]
  for(let i=0;i<number;i++)
  {
    array.push(letter)
  }
  return array.join("")
}
const greaterThanFiveOrNot=(number,index)=>
{
    if(number>5)
    {
        return romanNumbers[index]['5']+repeatLetter(romanNumbers[index]['1'],number-5)
    }
    else
    {
        return repeatLetter(romanNumbers[index]['1'],number)
    }
}
const numberToRoman=(numberArray,index)=>
{
    let roman;
  if(numberArray[index]!==0)
  {
     roman = numberArray[index]==4 || numberArray[index]==9 || numberArray[index]==5 ?  romanNumbers[index][`${numberArray[index]}`]: greaterThanFiveOrNot(numberArray[index],index)
  }
  else
  {
     roman="";
  }
if(index==(numberArray.length-1))
{
  return roman;
}
else
{
  return numberToRoman(numberArray,index+=1)+roman
}

}
const checkUserInput=()=>{
  if(!(numberInput.value))
  {
    output.textContent="Please enter a valid number"
    return
  }
  const number=parseInt(numberInput.value);
  if(number<1)
  {
    output.innerText="Please enter a number greater than or equal to 1"
    reset()
    return 
  }
  else if(number>3999)
  {
    output.innerText="Please enter a number less than or equal to 3999"
    reset()
    return
  }
  else
  {
    const numberArray=[];
const numberString=String(number)
for(let i=0;numberString.length>i;i++)
{
  numberArray.push(Number(numberString[i]))
}
numberArray.reverse()
console.log(numberArray)
    output.innerText=numberToRoman(numberArray,0)
  }
}
convertButton.addEventListener("click",checkUserInput)
numberInput.addEventListener('keydown',(e)=>{
if(e.key=="Enter")
{
checkUserInput()
}
})
function multiplesOfNumber(number,divider)
{
  if(number==0)
  {
    return 0
  }
  else
  {
    return number+multiplesOfNumber(number-divider,divider)
  }

}

