export type UserMoods = {
    id:string;
    user_id: string;
    mood_id:number;
    mood_emoji:string;
    mood_score:string;
    note:string;
}

export type NewUserMood = Pick<UserMoods,"user_id"|"mood_id"| "mood_emoji"| "mood_score"| "note">
export type DeleteUserMood = Pick<UserMoods,"id">
export type UpdateUserMood = Pick<UserMoods,"id"|"user_id"|"mood_id"| "mood_emoji"| "mood_score"| "note">