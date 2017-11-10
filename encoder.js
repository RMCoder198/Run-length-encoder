function Runlength(str) {
    var result="";
   
   for( i=0;i<str.length;i++)
    {  let char=str[i];
       let count=0;
       if(str[i]!==str[i-1])
       {  
    for( j=i;j<str.length;j++)
    {      	
    	if(str[j]===char)
    	{
    		count++;
          }
        else
            	break;
}

   result=result+count+char;  
}
}

  return result.substring(0,result.length-1);

}
function getText()
{
const str=document.getElementById("text").value;
var c= Runlength(str);
document.getElementById("compressed").innerHTML=c.substring(0,c.length-1);
console.log(c);
}