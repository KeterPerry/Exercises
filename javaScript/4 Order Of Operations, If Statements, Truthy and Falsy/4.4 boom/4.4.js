function boom (n){

    for (let i=1; i<=n; i++)
    {
        let iStr= i.toString();
        const iArr= iStr.split(" ");

        if (i%7===0 && iArr.includes(7))
        {console.log("Boom Boom");}

        else if (i%7===0) 
        {console.log("Boom");}

        else{
        console.log(i);
        }
    }
}
    
   
boom(14);

