export const EXAMPLE_USER = {
    id: 3,
    firstName: "Luke",
    lastName: "Skywalker",
    email: "luke.skywalker@bluewin.ch",
    username: "LukeSkywalker",
    password: "MayTheForceBeWithYou",
    age: 37,
    gender: "M",
    nationality: "EN_GB",
    yearsOfExperience: 15,
    score: 7,
    meetingIds: [1],
    admin: false,
};

export const EXAMPLE_USERS = [
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@bluewin.ch",
        username: "admin",
        password: "test123",
        age: 27,
        gender: "F",
        nationality: "CH",
        yearsOfExperience: 10,
        score: 20,
        meetingIds: [1],
        admin: true,
    },
    {
        id: 3,
        firstName: "Luke",
        lastName: "Skywalker",
        email: "luke.skywalker@bluewin.ch",
        username: "LukeSkywalker",
        password: "MayTheForceBeWithYou",
        age: 37,
        gender: "M",
        nationality: "EN_GB",
        yearsOfExperience: 15,
        score: 7,
        meetingIds: [1],
        admin: false,
    },
    {
        id: 4,
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        email: "obi-wan.kenobi@bluewin.ch",
        username: "ObiWanKenobi",
        password: "StarWars",
        age: 54,
        gender: "M",
        nationality: "EN",
        yearsOfExperience: 30,
        score: 10,
        meetingIds: [1],
        admin: false,
    },
    {
        id: 5,
        firstName: "Darth",
        lastName: "Vader",
        email: "darth.vader@bluewin.ch",
        username: "DarthVader",
        password: "DarkLord",
        age: 50,
        gender: "M",
        nationality: "EN",
        yearsOfExperience: 25,
        score: 3,
        meetingIds: [1],
        admin: false,
    },
    {
        id: 7,
        firstName: "Admin",
        lastName: "Frozen",
        email: "admin.frozen@bluewin.ch",
        username: "admin2",
        password: "KillerAdmin",
        age: 40,
        gender: "F",
        nationality: "FRB",
        yearsOfExperience: 5,
        score: 5,
        meetingIds: [6],
        admin: true,
    },
    {
        id: 8,
        firstName: "Olaf",
        lastName: "Frozen",
        email: "olaf.frozen@bluewin.ch",
        username: "OlafFrozen",
        password: "LoveHugs",
        age: 23,
        gender: "M",
        nationality: "EN_GB",
        yearsOfExperience: 5,
        score: 15,
        meetingIds: [6],
        admin: false,
    },
    {
        id: 9,
        firstName: "Elsa",
        lastName: "Frozen",
        email: "elsa.frozen@bluewin.ch",
        username: "ElsaFrozen",
        password: "IceQueen",
        age: 27,
        gender: "F",
        nationality: "CH",
        yearsOfExperience: 10,
        score: 23,
        meetingIds: [6],
        admin: false,
    },
    {
        id: 10,
        firstName: "Anna",
        lastName: "Frozen",
        email: "anna.frozen@bluewin.ch",
        username: "AnnaFrozen",
        password: "BestSisterEver",
        age: 24,
        gender: "F",
        nationality: "CH",
        yearsOfExperience: 8,
        score: 18,
        meetingIds: [6],
        admin: false,
    },
];

export const EXAMPLE_MEETING = {
    id: 1,
    name: "Christmas Party",
    localDateTime: "2021-11-12T10:53:25.86156",
    invitationLink: "https://invitationLink",
    score: 30,
    userIds: [2, 3, 4, 5],
};
