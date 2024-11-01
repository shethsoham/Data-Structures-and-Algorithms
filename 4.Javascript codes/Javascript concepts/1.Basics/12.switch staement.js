function caseInswitch(val){
    var answer = "";
    switch(val){
        case 1 :
            answer = "alpha";
            break; //break goes directly to end of switch dtatement it does ont evaluate further
        case 2 : 
            answer = "beta";
            break;
        // default works as a else statement in switch case
        default:
            answer ="stuff";
            break;
    }

    return answer
}

console.log(caseInswitch(5));