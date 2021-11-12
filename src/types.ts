export type User = {
    id: number;
    admin: boolean;
    username: string;
    firstName: string;
    lastName: string;
    gender: string;
    nationality: string;
    email: string;
    score: number;
    yearsOfExperience: number;
    age: number;
};

export type Meeting = {
    id: number;
    name: string;
    localDateTime: Date;
    invitationLink: string;
    score: number;
    userIds: number[];
};
