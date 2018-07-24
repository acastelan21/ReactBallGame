import axios from "axios"; 
import moment from "moment";
const API ={
    searchForGames : () => {
        const apikey = "xksqy5yzud2g255rumfjf5ga";
        const today = new Date();
        const formateToday = moment(today).format('YYYY/MM/DD');
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = "https://api.sportradar.us/mlb/trial/v6.5/en/games/" + formateToday + "/schedule.json?api_key=" + apikey;
        return axios.get(proxyUrl+targetUrl);
    },

    searchForStandings : () => {
        const baseballApi = "xksqy5yzud2g255rumfjf5ga"
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const standingsUrl = `http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/standings.json?api_key=${baseballApi}`

        return axios.get(proxyUrl + standingsUrl); 

    },

    searchForNews :()=>{
        const currentDate = moment().format("YYYY-MM-DD");
//------ hard code for test 
        const favoriteTeam = "Twins Minnesota"
        //const favoriteTeamId = "aa34e0ed-f342-4ec6-b774-c79b47b60e2d" //Twins Minnesota
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//--------- code -------------
        const url = 'https://newsapi.org/v2/everything?' +
        `q=${favoriteTeam}&` +
        `from=${currentDate}&` +
        'sortBy=popularity&' +
        'apiKey=7a083b0642434e4b855eb8aeec0efa45';
        return axios.get(proxyUrl+url);

    },

    searchForRoster:()=>{
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const favoriteTeamId = "aa34e0ed-f342-4ec6-b774-c79b47b60e2d";//Twins Minnesota
        const baseballApi = "xksqy5yzud2g255rumfjf5ga";

//------- roster api
        const rosterUrl = `http://api.sportradar.us/mlb/trial/v6.5/en/teams/${favoriteTeamId}/profile.json?api_key=${baseballApi}`;


        return axios.get(proxyUrl+rosterUrl);
    },

    searchForGameInfo: () => {
        const pathName = window.location.pathname;
        const splittingPathName= pathName.split("/");
        const game_id = splittingPathName[2];
        
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apikey = "xksqy5yzud2g255rumfjf5ga";
        const gameInfoUrl = `http://api.sportradar.us/mlb/trial/v6.5/en/games/${game_id}/boxscore.json?api_key=${apikey}`;
        return axios.get(proxyUrl + gameInfoUrl);

    },
    newMember : ( saveObj )=>{
        return axios.post("/api/saved", saveObj)

    }
    


};

export default API;
