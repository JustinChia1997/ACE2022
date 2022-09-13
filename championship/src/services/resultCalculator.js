function generateBasicTeamData(input) {
  console.log(input);
  let splitData = input.trim().split(/\s+/);
  let teamDataMap = {};
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

function comparisonFunction(x, y) {
  //Convert date to integers
  let dateX = x.date.split('/');
  let dateY = y.date.split('/');
  dateX = dateX.map((item) => {
    return parseInt(item);
  });
  dateY = dateY.map((item) => {
    return parseInt(item);
  });
  if (x.score > y.score) {
    return -1;
  }
  if (x.goalsSCored > y.goalsScored) {
    return -1;
  }
  if (x.altScore > y.altScore) {
    return -1;
  }
  if (dateX[1] > dateY[1]) {
    return 1;
  } else if (dateX[1] === dateY[1] && dateX[0] > dateY[0]) {
    return 1;
  }
  return 0;
}

function generateFinalScore(teamDataMap) {
  let teamDataMapList = Object.keys(teamDataMap).map((key) => {
    return Object.assign(teamDataMap[key], { name: key });
  });
  let group1 = teamDataMapList.filter((item) => {
    return item['teamNumber'] == 1;
  });
  let group2 = teamDataMapList.filter((item) => {
    return item['teamNumber'] == 2;
  });
  const group1Sorted = group1.sort(comparisonFunction);
  const group2Sorted = group2.sort(comparisonFunction);
  return [group1Sorted, group2Sorted];
}

function resultCalculator(teamData, matchData) {
  let finalResults = 0;
  console.log('array checking');
  if (Object.prototype.toString.call(finalResults) !== '[object Array]') {
    console.log('yo');
  }
  console.log('function is running');
  if (!teamData || !matchData) return 0;
  let teamDataMap = generateBasicTeamData(teamData);
  generateScoreMap(matchData, teamDataMap);
  finalResults = generateFinalScore(teamDataMap);
  return finalResults;
}

export default resultCalculator;
