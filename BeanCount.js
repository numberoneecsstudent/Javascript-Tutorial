function countChar(string, ch)
{
    var counted = 0;
    for(var i = 0; i < string.length; i++)
    {
        if(string[i] == ch)
        counted++;
    }

    return counted; 
}

{
    function countBs(string) 
    {
        return countChar(string, "B");
    }
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));