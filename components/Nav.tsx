import React from 'react';

export default function Nav() {
    return(
        <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
            <div className="text-xl">Starwars API</div>
            <div className="flex items-center">
                <div className="ml-8">People</div>
                <div className="ml-8">Planets</div>
                <div className="ml-8">Vehicles</div>
            </div>
        </div>
    )
}