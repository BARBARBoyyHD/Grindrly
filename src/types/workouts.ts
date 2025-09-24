export type Workouts = {
    id:string
    user_id :string,
    exercise:string,
    sets:number,
    reps:number,
    weight:number,
    weight_unit:string,
    is_complete:boolean
}

export type NewWorkout = Pick<Workouts, "user_id" | "exercise" | "sets" | "reps" | "weight" |"weight_unit" |"is_complete">
export type DeleteWorkout = Pick<Workouts, "id">
export type EditWorkout = Pick<Workouts, "id" | "user_id" | "exercise" | "sets" | "reps" | "weight"|"weight_unit"|"is_complete">