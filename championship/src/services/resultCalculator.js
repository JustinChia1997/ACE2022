function generateBasicTeamData(input) {
    let splitData = input.trim().split(/\s+/);
    let teamDataMap = {}
    splitData.map((x, idx) => {
        if (idx % 3 == 0) {
            teamDataMap[x] = {};
            // console.log('name: ' + x);
        } else if (idx % 3 == 1) {
            // console.log('date: ' + x);
            teamDataMap[splitData[idx - 1]]['date'] = x;
        } else if (idx % 3 == 2) {
            // console.log('team Number: ' + x);
            teamDataMap[splitData[idx - 2]]['teamNumber'] = x;
        }
    });
    console.log(teamDataMap);
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
    console.log('function is running');
    let splitData = teamData.trim().split(/\s+/);
    let teamDataMap = generateBasicTeamData(teamData);
    return 'results';
}


export default resultCalculator