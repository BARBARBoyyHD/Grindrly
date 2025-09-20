import { useState } from "react"
import NewTaskButton from "./button/NewTaskButton"
import NewTaskForm from "./components/NewTaskComponents"


export default function TaskListComponents() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <section className='h-screen'>
        <h1>TaskListComponents</h1>
        <NewTaskButton onOpen={() => setIsOpen(true)}/>
        <NewTaskForm isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </section>
  )
}
