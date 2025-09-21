export type DailySnapshot = {
    id: string;
    user_id:string;
    date: Date;
    task_completed:number;
    workout_logged:number;
    avg_mood_score:number;
};