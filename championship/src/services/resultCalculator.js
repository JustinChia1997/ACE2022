function generateBasicTeamData(input) {
    let splitData = input.trim().split(/\s+/);
    let teamDataMap = {}
    splitData.map((x, idx) => {
        if (idx % 3 == 0) {
            teamDataMap[x] = { score: 0, altScore: 0, goalsScored: 0 };
            // console.log('name: ' + x);
        } else if (idx % 3 === 1) {
            // console.log('date: ' + x);
            teamDataMap[splitData[idx - 1]]['date'] = x;
        } else if (idx % 3 === 2) {
            // console.log('team Number: ' + x);
            teamDataMap[splitData[idx - 2]]['teamNumber'] = x;
        }
    });
    console.log(teamDataMap);
    return teamDataMap;
}

//This function will generate the score into the the teamDataMap, with all possible other metrics included, e.g alt scoring
function generateScoreMap(teamMatchData, teamDataMap) {
    console.log(teamMatchData);
    let splitData = teamMatchData.trim().split(/\s+/);
    for (let i = 0; i < splitData.length; i += 4) {
        let team1 = splitData[i];
        let team2 = splitData[i + 1];
        let team1Score = splitData[i + 2];
        let team2Score = splitData[i + 3];
        //Record total goals scored
        teamDataMap[team1]['goalsScored'] += parseInt(team1Score);
        teamDataMap[team2]['goalsScored'] += parseInt(team2Score);
        // apply scores with conditionals
        if (team1Score > team2Score) {
            //if first team wins
            //console.log(`${team1} wins`);
            teamDataMap[team1]['score'] += 3;
            teamDataMap[team1]['altScore'] += 5;
            teamDataMap[team2]['altScore'] += 1;
        } else if (team1Score < team2Score) {
            //if second team beats first team
            //console.log(`${team2} wins`);
            teamDataMap[team2]['score'] += 3;
            teamDataMap[team2]['altScore'] += 5;
            teamDataMap[team2]['altScore'] += 1;
        } else if (team1Score == team2Score) {
            //if there is a tie
            //console.log('tie');
            teamDataMap[team1]['score'] += 1;
            teamDataMap[team2]['score'] += 1;
            teamDataMap[team1]['altScore'] += 3;
            teamDataMap[team2]['altScore'] += 3;
        }
    }
}

function generateFinalScore(teamDataMap) {
    console.log('generate Final Score');
    console.log(teamDataMap);
    let teamDataMapList = Object.keys(teamDataMap).map((key) => {
        return Object.assign(teamDataMap[key], { name: key });
    });
    console.log(teamDataMapList);
    let group1 = teamDataMapList.filter((item) => {
        return item['teamNumber'] == 1;
    });
    let group2 = teamDataMapList.filter((item) => {
        return item['teamNumber'] == 2;
    });
    console.log(group1);
    console.log(group2);
    //Sort the data and done.
}

function resultCalculator() {
    const teamData = `teamA 01/04 1
    teamB 02/05 1
    teamC 03/06 1
    teamD 04/06 1
    teamE 05/06 1
    teamF 15/06 1
    teamG 14/06 2
    teamH 13/06 2
    teamI 12/06 2
    teamJ 11/06 2
    teamK 10/06 2
    teamL 27/06 2
        `;
    let teamMatchData = `teamA teamB 0 1
        teamA teamC 1 3
        teamA teamD 2 2
        teamA teamE 2 4
        teamA teamF 3 3
        teamB teamC 0 1
        teamB teamD 2 2
        teamB teamE 4 0
        teamB teamF 0 0
        teamC teamD 2 0
        teamC teamE 0 0
        teamC teamF 1 0
        teamD teamE 0 3
        teamD teamF 2 1
        teamE teamF 3 4
        teamG teamH 3 2
        teamG teamI 0 4
        teamG teamJ 1 0
        teamG teamK 1 4
        teamG teamL 1 4
        teamH teamI 2 0
        teamH teamJ 3 0
        teamH teamK 3 4
        teamH teamL 0 1
        teamI teamJ 2 1
        teamI teamK 3 0
        teamI teamL 1 3
        teamJ teamK 1 4
        teamJ teamL 0 3
        teamK teamL 0 0
        `;
    console.log('function is running');
    let teamDataMap = generateBasicTeamData(teamData);
    generateScoreMap(teamMatchData, teamDataMap);
    generateFinalScore(teamDataMap);
    return 'results';
}


export default resultCalculator