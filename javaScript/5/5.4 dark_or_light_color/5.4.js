function difiningColorBrigthness(color){
    let color=color.toLowerCase();

    switch(color){
        case 'yellow':
        case 'pink':
        case 'orange':
            return 'light color';
            

        case 'blue':
        case 'purple':
        case 'brown':
            return 'dark color';
    
        default:
            return 'Unknown color';

    }
