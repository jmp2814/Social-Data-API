const userData = [
  {
    username: "ssutcliff0",
    email: "mjanton0@123-reg.co.uk",
  },
  {
    username: "jpottiphar1",
    email: "fdrife1@house.gov",
  },
  {
    username: "odubock2",
    email: "hproughten2@ftc.gov",
  },
  {
    username: "tmechan3",
    email: "abridgewater3@tiny.cc",
  },
  {
    username: "kdmitrienko4",
    email: "jrosenkrantz4@dion.ne.jp",
  },
  {
    username: "ascragg5",
    email: "hbullerwell5@cisco.com",
  },
  {
    username: "stenbrug6",
    email: "jgrinyov6@nba.com",
  },
  {
    username: "csatterlee7",
    email: "ogylle7@wunderground.com",
  },
  {
    username: "thaet8",
    email: "cyuryichev8@youtube.com",
  },
  {
    username: "vmanifield9",
    email: "cglyn9@ycombinator.com",
  },
];

const getRandomUser = () => {
  userData[Math.floor(Math.random() * userData.length)];
};

module.exports = { getRandomUser, userData };
