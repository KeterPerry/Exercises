

  const obj= {num: 1};

  function swapKeysAndValues(obj) {

    const swapped = Object.entries(obj).map(([key, value]) => [value, key]); //returns an arr
  
    return Object.fromEntries(swapped); 
  }

  
  console.log(swapKeysAndValues(obj));


