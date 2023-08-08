import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import FrontPage from './Components/FrontPage/FrontPage';
import AllPlayers from './Components/AllPlayers/AllPlayers';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import PlayerDetails from './Components/PlayerDetails/PlayerDetails';



const players=createBrowserRouter([
           {
            path:'/',
            element:<Home></Home>,
            children:[
              {
                path:'/',
                element:<FrontPage></FrontPage>
              },
              {
                path:'/players',
                element:<AllPlayers></AllPlayers>,
                loader:()=>fetch('players.json')
              },
              {
                path:'/players:playerId',
                element:<PlayerDetails></PlayerDetails>,
                // loader:({params})=>fetch('http://localhost:5173/this should be api url &{params.playerId}')

                // trying another way. but did not work..
                // {
                //   fetch('players.json')
                //   .then(res=>res.json())
                //   .then(data=>pass(data))
                //   const pass=(players)=>{
                //       const details=players.find(player=>player.id==params.playerId)
                //       return details;
                //   }
                // }
              },
              {
                path:'/about',
                element:<About></About>
              },
              {
                path:'/contact',
                element:<Contact></Contact>
              }
            ]
           },
           
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={players}></RouterProvider>
  </React.StrictMode>,
)
