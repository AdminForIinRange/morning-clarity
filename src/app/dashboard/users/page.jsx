import { addData } from '@/lib/actions';
import { fetchUsers } from '@/lib/data'
import React from 'react'

const GrabUsers =  async () => {

    
const userData = {
    username: "example_user",
    email: "example@example.com",
    password: "password123",
    performance_data: {
      daily_tasks: [
        {
          date: new Date("2024-05-13"),
          daily_tasks_completed: false,
          accuracy: 0,
          points: 0,
        },
        {
          date: new Date("2024-05-12"),
          daily_tasks_completed: true,
          accuracy: 80,
          points: 50,
        },
        // You can add more daily tasks as needed
      ],
      non_daily_tasks: [
        {
          daily_tasks_completed: false,
          accuracy: 0,
          points: 0,
        },
        // You can add more non-daily tasks as needed
      ],
      progress_history: [
        {
          Overall_days: 10,
          Overall_points: 200,
          Overall_tasks_completed: 20,
          Overall_tasks_accuracy: 75,
        },
       
      ],
    },
};


    const users = await fetchUsers()
    const addUser = await addData(userData)
    console.log(users)
    console.log(addUser)
  return (
    <div>GrabUsers</div>
  )
}

export default GrabUsers