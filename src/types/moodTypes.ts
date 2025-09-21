export type MoodTypes = {
    id:number;
    user_id:string;
    emoji:string;
    label:string;
    default_score:number;
}

export type NewMoodType = Pick<MoodTypes, "user_id"|'emoji' | 'label'|"default_score">
export type UpdateMoodType = Pick<MoodTypes, "id"|"user_id"|'emoji' | 'label'|"default_score">
export type DeleteUserMood = Pick<MoodTypes, "id"|"user_id">