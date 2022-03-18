

// --- Randomizing an array ---

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
//  --------------------------



//   ---------   Matching one group   ---------

// ----- Exemple input -----
/*
const group = [0,1,2,3,4,5,6,7,8,9];

const firstMatch = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
const secondMatch = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
*/
// --------------------------


function matchOneGroup(groupLength, firstMatch, secondMatch)
{
    const group = [];
    for(var i = 0; i < groupLength; i++)
    {
        group[i] = i;
    }
    do
    {
    shuffle(group);
    }while(!(compareMatch1(group, firstMatch) && compareMatch1(group, secondMatch)))
    return group;
}

function compareMatch1(group, history)
{
    let goodMatch = true;
    if(history[0] == -1){return goodMatch;}

    //loop: en gång per par (group.length / 2)
    for(var i = 0; i < group.length; i = i + 2){
        var x = group[i];
        var y = group[i+1];
        
        var index = history.indexOf(x);
        
        if(index % 2 == 0)
        {
            if(y == history[index + 1]){goodMatch = false;}
        }
        else
        {  
            if(y == history[index - 1]){goodMatch = false;}
        }

    }
    return goodMatch;
}


//   ---------   Matching two groups   ---------

// ----- Exemple input-----
/*
const group1   = [0,2,4,6,8];
const group2 = [1,3,5,7,9];

const firstMatch = [ [-1,-1,-1,-1,-1], [-1,-1,-1,-1,-1] ];
const secondMatch = [ [-1,-1,-1,-1,-1], [-1,-1,-1,-1,-1] ];
*/
// --------------------

export function switchIndex(list, i1, i2)
{
    var tmp = list[i1];
    list[i1] = list[i2];
    list[i2] = tmp;
    return list;
}

export function matchTwoGroups(group1, group2, firstMatch, secondMatch)
{
    /*
    const group1 = [];
    const group2 = [];
    for(var i = 0; i < groupLength * 2; i = i + 2)
    {
        group1[i/2] = i;
        group2[i/2] = i + 1;
    }
    */
    shuffle(group1);

    do
    {
    shuffle(group2);
    
    }while(!(compareMatch2(group1, group2, firstMatch) && compareMatch2(group1, group2, secondMatch)))
    const group1Copy = group1;
    const group2Copy = group2;
    return [group1Copy, group2Copy];
}


function compareMatch2(group1, group2, history)
{
    let goodMatch = true;
    if(history[0][0] == -1){return goodMatch;}

    for(var i = 0; i < group1.length; i++)
    {
        var x = group1[i];
        var y = group2[i];
        
        var index = history[0].indexOf(x);

        if(y == history[1][index]){goodMatch = false;} 
    }
    return goodMatch;
}



//console.log(matchTwoGroups(men, women, [[-1]],[[-1]]));


/*
    const noHistory = [[-1]];
    const firstMatching = matchTwoGroups(5, noHistory, noHistory);
    console.log(firstMatching);

    const secondMatching = matchTwoGroups(5, firstMatching, noHistory);
    console.log(secondMatching);

    const lastMatching = matchTwoGroups(5, firstMatching, secondMatching);
    console.log(lastMatching);
*/


/*

const group1   = [0,2,4,6,8];
const group2 = [1,3,5,7,9];

const history = [[-1,-1,-1], [-1,-1,-1], [-1,-1,-1], [-1,-1,-1], [-1,-1,-1]];


function matchGroups(group1, group2, history)
{
    let goodMatch = false;
    shuffle(group1);
    while(goodMatch == false)
    {
        var goodMatch = true;
        shuffle(group2);
        for(var i = 0; i < history.length; i++)
        {
            var x = group1[i];
            const y = history[x/2];
            for(var w = 0; w < y.length; w++)
            {
                if(group2[w] == x)
                {
                    goodMatch = false;
                }
            }
        }
    }

}
*/
