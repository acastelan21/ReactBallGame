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

    SearchForStandings : () => {
    const baseballApi = "xksqy5yzud2g255rumfjf5ga"
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var standingsUrl = `http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/standings.json?api_key=${baseballApi}`

    return axios.get(proxyUrl + standingsUrl); 

    }




};

export default API;
