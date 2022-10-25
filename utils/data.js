const userData = [
  {
    userName: "agergely0",
    email: "swhyborn0@jiathis.com",
  },
  {
    userName: "fmckniely1",
    email: "leppson1@histats.com",
  },
  {
    userName: "trubinowitz2",
    email: "cmatovic2@bravesites.com",
  },
  {
    userName: "jthys3",
    email: "epignon3@imgur.com",
  },
  {
    userName: "ssutherington4",
    email: "nohanessian4@google.de",
  },
  {
    userName: "dnottle5",
    email: "aquenell5@typepad.com",
  },
  {
    userName: "csealy6",
    email: "ahinrichsen6@hexun.com",
  },
  {
    userName: "vsutherley7",
    email: "lhadlow7@cnbc.com",
  },
  {
    userName: "ecrow8",
    email: "rseaborn8@ihg.com",
  },
  {
    userName: "ngainsford9",
    email: "dmoorcroft9@nytimes.com",
  },
];

const getRandomUser = () => {
  userData[Math.floor(Math.random() * userData.length)];
};

module.exports = { getRandomUser, userData };
