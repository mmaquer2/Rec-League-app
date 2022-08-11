// Example schema of what the Firebase documents look like

const User = {

    username: "", 
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    teams:[]

};


const Team = {

    team_name: "",
    manager: {},
    players: {},



};


// roles player, manager, asst manager, etc
// positions: GK, D, M, F
const player = {

    username: "",
    position: "",
    role: "",

}

const gameEvent = {
    "date": "",
    "time": "",
    "location": ""

}


const Scheudle = {
    league: "Boston Social Sports 7v7",
    start_date: "",
    end_date: "",

};

const League = {
    league_name: "",
    teams: ["team_name_one, team_two, team_etc"],
    



};


    // test data for team roster table 
    /*
    const rows = [
      createData('Test', "F", "player", 16.0),
      createData('Test', "F", "player", 16.0),
      createData('Test', "F", "player", 16.0),
      createData('Test', "F", "player", 16.0),
      createData('Test', "F", "player", 16.0),
      createData('Test', "F", "player", 16.0)
    ];
    */

