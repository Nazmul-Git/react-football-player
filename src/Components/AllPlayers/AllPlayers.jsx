/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Players from '../Players/Players';

const AllPlayers = () => {
    const players=useLoaderData();
    // console.log(players);
    return (
        <div>
            <p className='text-center font-bold text-2xl'>Players</p>
            <div className='md:grid grid-cols-3 gap-4 md:m-72'>
                {
                  players.map(player=><Players key={player.id} player={player}></Players>)
                }
            </div>
        </div>
    );
};

export default AllPlayers;