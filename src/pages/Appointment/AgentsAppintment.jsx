import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AgentsAppointment = () => {
    const [selectedAgent, setSelectedAgent] = useState(null);

    const handleAgentClick = (agentName) => {
        setSelectedAgent(agentName);
    };

    return (
        <div className='flex flex-col gap-4'>
            {/* Show selected agent name */}
            {selectedAgent && (
                <div className="rounded-lg p-4 bg-accent dark:bg-gray-800 max-w-sm text-center">
                    <h2 className="text-2xl font-semibold">{selectedAgent}</h2>
                </div>
            )}

            {/* agent card -1 */}
            <div className={`rounded-2xl max-w-sm p-2 sm:flex sm:space-x-6 bg-accent dark:bg-gray-50 dark:text-gray-800 ${selectedAgent === 'Lery Jenkins' ? 'border-2 border-blue-500' : ''}`} onClick={() => handleAgentClick('Lery Jenkins')}>
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://i.ibb.co/QchKYNw/agent1.jpg" alt="" className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4 my-auto glass p-4 rounded-2xl text-white">
                    <h2 className="text-2xl font-semibold">Lery Jenkins</h2>
                    <span className="text-lg dark:text-gray-600">Company Agent</span>
                </div>
            </div>
            {/* agent card -2 */}
            <div className={`rounded-2xl max-w-sm p-2 sm:flex sm:space-x-6 bg-accent dark:bg-gray-50 dark:text-gray-800 ${selectedAgent === 'Marky Pears' ? 'border-2 border-blue-500' : ''}`} onClick={() => handleAgentClick('Marky Pears')}>
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://i.ibb.co/gSwVD7F/agent2.jpg" alt="" className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4 my-auto glass text-white p-4 rounded-2xl">
                    <h2 className="text-2xl font-semibold">Marky Pears</h2>
                    <span className="text-lg dark:text-gray-600">Property Lawyer</span>
                </div>
            </div>
            {/* agent card -3 */}
            <div className={`rounded-2xl max-w-sm p-2 sm:flex sm:space-x-6 bg-accent dark:bg-gray-50 dark:text-gray-800 ${selectedAgent === 'Henry Loren' ? 'border-2 border-blue-500' : ''}`} onClick={() => handleAgentClick('Henry Loren')}>
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://i.ibb.co/jG0PL59/agent3.png" alt="" className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4 my-auto glass text-white p-4 rounded-2xl">
                    <h2 className="text-2xl font-semibold">Henry Loren</h2>
                    <span className="text-lg dark:text-gray-600">Company Agent</span>
                </div>
            </div>
        </div>
    );
};

export default AgentsAppointment;
