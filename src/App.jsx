import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import RootProvider from "./core/providers/root_provider"
import { appRouter } from "./core/routes/app_router"


const App = () => {

  const [data, setData] = useState([]);
  
    const getUsers = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data);      
    };

  
  return (
    <>
      <div><h2>USERS</h2></div>
      
      <button
        onClick={()=> {
          getUsers();
        }}
      >get users</button>

        {data.map((user) => (
            <div key={user.id}>
              {user.name}
            </div>
          ))
        }
      {/*<RootProvider>
        <RouterProvider router={appRouter} />
  </RootProvider> */}
    </>
  )
}

export default App

axios.interceptors.request.use(
  async (config) => {
    
    console.log("REQUEST", config);
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
)
