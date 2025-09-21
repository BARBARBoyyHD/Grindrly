import TaskListUserComponents from '../../components/Tasks/TaskListUserComponents'
import UserProfileUI from '../../components/UI/UserProfileUI'

export default function Dashboards() {
  return (
    <main className='flex flex-col min-h-screen bg-[#232224]'>
        <UserProfileUI />
        <TaskListUserComponents/>
    </main>
  )
}
