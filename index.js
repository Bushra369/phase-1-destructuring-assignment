const farmAnimals = "cow horse sheep pig chicken";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

const [blackAndWhite, , black, pink] = farmAnimals.split(" ");

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, , v] = colors;

const [, , , , , indg, _v] = colors;

const { muppetName, color, song, job, partner } = muppet;
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;