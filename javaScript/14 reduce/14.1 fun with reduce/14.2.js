function extractValues (arrofobj, key){

    const values= arrofobj.reduce( (acc, cur)=>{
        acc.push(cur[key]);
        return acc;


    }, []);

    return values;

}

const arr=[{name: 'Shira'}, {name: 'Shaul'}];

console.log(extractValues(arr,'name'));




////////////////////////////////////////////////////////////////////////
function countOnlyVowels (str) 
{
    let arrstr = str.toLowerCase().split("");
    console.log(arrstr);
    const result=  arrstr.reduce((obj, curval)=>{
    if (curval==='a'||curval==='e'||curval==='u'||curval==='i'||curval==='o'){
    if (!obj[curval])
    obj[curval]=1;
    else
    obj[curval]++;
    }
    return obj;

      
} , {})

return result;
}

console.log(countOnlyVowels("aaAtbruo"));

/////////////////////////////////////////////////////////////////////////////

function addKeyAndValue (arrofobj, key, value) {


    const result =arrofobj.reduce((acc, cur) => {
      
        cur[key] = value;
        acc.push(cur)
        
        return arrofobj
    
        } , []);

return result;
    }

const arr=[{name: 'Shira'}, {name:'Shaul'}];


console.log(addKeyAndValue(arr, 'status' , 'student'));