const nizBrojeva = [17,34,3,12,23]

function numSelectString(nizBrojeva)
{
    return nizBrojeva.filter((item) => item % 2 == 1 ).sort((a,b) => a - b).reduce((acc, item) => acc + (acc ? ',' : "") + item, '');
}


console.log(numSelectString(nizBrojeva))