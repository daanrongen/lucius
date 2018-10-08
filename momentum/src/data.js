let TimeFormat = require("hh-mm-ss");
let Papa = require("papaparse");

Papa.parse("./arduino/data.csv", {
  complete: function(results) {
    console.log(results);
  }
});

const data = {
  username: "Daan Rongen",
  workweek: "full-time",
  buoyId: 4210,
  connectionStatus: "connected",
  battery: 80,
  doNotDisturbMode: "deactivated",
  arrivedAtWork: "09:00",
  timePassed: "02:00",
  timeSeated: TimeFormat.fromS(272),
  percentageSeated: 78,
  currentSittingTime: TimeFormat.fromS(84),
  summaryAdvice: "Stand up for 5 minutes",
  timeStanding: TimeFormat.fromS(54),
  sitStandVarietyAdvice: "Try to work in 50 min. sets",
  inChairMovement: 82,
  inChairMovementStatus: "a lot",
  inChairMovementAdvice: "Keep both feet placed on the floor",
  totalStaticSittingTime: TimeFormat.fromS(52),
  postureDeviation: "front-left",
  sittingPostureStatus: "great",
  sittingPostureAdvice: "Keep up the good work",
  buoyStatus: "red",
  userGoalOne: "Sit less than 70% of the workday",
  userGoalTwo: "Have an in-chair movement up from 70%",
  userGoalThree: "Maintain a good sitting posture"
};

export default data;
