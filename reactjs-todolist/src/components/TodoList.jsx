import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
//   let todos = [
//     'Go to Gym',
//     'Walk Dog',
//     'Go to Yoga'
//   ]

  // destructuring 
  const { todos } = props


    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
