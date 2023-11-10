module.exports = {
    determineRankImg: (rank) =>{
        if(rank <= 100){
            return `<img src="/images/Goldfish.jpeg"></img>`;
        }
        else if(rank <= 500){
            return `<img src="/images/HouseCat.jpeg"></img>`;
        }
        else if(rank <= 1000 ){
            return `<img src="/images/Rat.jpeg"></img>`;
        }
        else if(rank <= 1500){
            return `<img src="/images/Pig.jpeg"></img>`;
        }
        else if(rank <= 2000){
            return `<img src="/images/Dolphin.jpeg"></img>`;
        }
    },
    determineRank: (rank) => {
        if(rank <= 100){
            return "Goldfish";
        }
        else if(rank <= 500){
            return "House Cat";
        }
        else if(rank <= 1000 ){
            return "Rat";
        }
        else if(rank <= 1500){
            return "Pig";
        }
        else if(rank <= 2000){
            return "Dolphin";
        }
    }
};