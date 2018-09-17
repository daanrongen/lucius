import TimeFormat from "hh-mm-ss";
import unixTimestamp from "unix-timestamp";

const data = {
  arrivedAtWork: "09:00",
  timePassed: "02:00",
  timeSeated: TimeFormat.fromS(272),
  percentageSeated: 78,
  currentSittingTime: TimeFormat.fromS(84),
  summaryAdvice: "stand up for 5 minutes",
  timeStanding: TimeFormat.fromS(54),
  sitStandVarietyAdvice: "try to work in 50 min. sets",
  inChairMovement: 82,
  inChairMovementStatus: "a lot",
  inChairMovementAdvice: "keep both feet placed on the floor",
  totalStaticSittingTime: TimeFormat.fromS(52),
  postureDeviation: "front-left",
  sittingPostureStatus: "great",
  sittingPostureAdvice: "keep up the good work",
  buoyStatus: "red",
  userGoalOne: "sit less than 70% of the workday",
  userGoaltwo: "have an in-chair movement up from 70%",
  userGoalThree: "maintain a good sitting posture"
};

export default data;
