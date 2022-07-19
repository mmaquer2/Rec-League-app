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


const Scheudle = {
    league: "Boston Social Sports 7v7",
    start_date: "",
    end_date: "",

};

const League = {
    league_name: "",
    teams: ["team_name_one, team_two, team_etc"],
    



};