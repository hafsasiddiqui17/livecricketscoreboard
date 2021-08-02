const API_KEY="Is9cccCUCCajX7sCW8GDWu5FLUf2"


//ger all the matches [upcoming matches]

export const getMatches = () => {
    const url=`https://cricapi.com/api/matches/?apikey=${API_KEY}`;

    return fetch(url) 
    .then((response) => response.json())
    .catch((error) => console.log("ERROR : ", error));
}; 

//load match details 

export const getMatchDetail=(id) => {
const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`; 
return fetch(url).then(response=>response.json())
.catch((error) => console.log(error));
}