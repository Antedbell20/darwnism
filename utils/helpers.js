module.exports = {
    determineRankImg: (scoreArray) =>{
        let totalScore = 0;
        for (let i = 0; i < scoreArray.length; i++) {
            totalScore = totalScore + scoreArray[i].score;
        }
        if(totalScore <= 100){
            return `<img src="/images/Goldfish.jpeg"></img>`;
        }
        else if(totalScore <= 500){
            return `<img src="/images/HouseCat.jpeg"></img>`;
        }
        else if(totalScore <= 1000 ){
            return `<img src="/images/Rat.jpeg"></img>`;
        }
        else if(totalScore <= 1500){
            return `<img src="/images/Pig.jpeg"></img>`;
        }
        else{
            return `<img src="/images/Dolphin.jpeg"></img>`;
        }
        
    },
    determineRank: (scoreArray) => {
        let totalScore = 0;
        for (let i = 0; i < scoreArray.length; i++) {
            totalScore = totalScore + scoreArray[i].score;
        }
        if(totalScore <= 100){
            return `Goldfish`;
        }
        else if(totalScore <= 500){
            return `House Cat`;
        }
        else if(totalScore <= 1000 ){
            return `Rat`;
        }
        else if(totalScore <= 1500){
            return `Pig`;
        }
        else {
            return `Dolphin`;
        }
        
    },
    username: ()=>{
        return `            [user: username]            `
    }
    };