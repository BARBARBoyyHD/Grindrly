export type Workouts = {
    id:string
    user_id :string,
    exercise:string,
    sets:number,
    reps:number,
    weight:number,
}

export type NewWorkout = Pick<Workouts, "user_id" | "exercise" | "sets" | "reps" | "weight">
export type DeleteWorkout = Pick<Workouts, "id">
export type EditWorkout = Pick<Workouts, "id" | "user_id" | "exercise" | "sets" | "reps" | "weight">