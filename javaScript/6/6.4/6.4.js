let populations = [ 40, 9, 50, 6];

function populationPercentages(populations){
    let precentage=[];

    for (let i=0; i<populations.length; i++){

        precentage.push(percentageOfWorld2(populations[i]);
    }
    
    return precentage;
}

const percentageOfWorld2= (population)=> (population/7900) * 100;

