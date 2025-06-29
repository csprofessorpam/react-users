import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  //create state to hold user data
  const [users, setUsers] = useState([])

  //make api call to get user data when page loads

  //https://dummyjson.com/users

  useEffect(
    ()=>{
      console.log('page loading')
      //make api call for user data
      axios.get('https://dummyjson.com/users')
      .then(res =>{
        console.log(res.data.users)
        //I have my data, where do I put it?
        //store in state
        setUsers(res.data.users)
      })
      .catch(err => console.log(err))



    }, []
  )

  

  return (
    <div>
      <h1>Hello React</h1>
      <div className="user-container">
        {/* <p>{users[0].firstName}</p> */}

        {
          users.map(item=>
            <div className="card">
               <p>{item.firstName} {item.lastName}</p>
               <p>{item.company.name}</p>
               <img src={item.image} />
            </div>
        )
        }
      </div>
    </div>
  )
}

export default App
