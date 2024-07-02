import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Swal from 'sweetalert2'
import MeetAgents from '../Home/MeetAgents';
import AgentsAppintment from './AgentsAppintment';
import { AuthContext } from '../../provaider/AuthProvider';
import BasicMap from '../../components/MAP/BasicMap';



const Appointment = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading mx-auto loading-spinner text-warning"></span>;

    }

    const helmetContext = {};


    const { id } = useParams();
    const [agentId, setAgentId] = useState(id);
    const [agentName, setAgentName] = useState('');
    const [agentImage, setAgentImage] = useState('');
    const [agentDes, setAgentDes] = useState('');
    const [showAgents, setShowAgents] = useState(false);
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [minDate, setMinDate] = useState('');


    useEffect(() => {

        const today = new Date();

        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

        setMinDate(tomorrowFormatted);
    }, []);

    const handleDateChange = (event) => {
        setAppointmentDate(event.target.value);
    };
    const handleTimeChange = (event) => {
        setAppointmentTime(event.target.value);
    };

    // today's date in the format yyyy-mm-dd
    const today = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    });


    useEffect(() => {
        if (agentId === '1') {
            setAgentName('Lary Jenkins');
            setAgentImage('https://i.ibb.co/QchKYNw/agent1.jpg');
            setAgentDes('Company Agent');
        } else if (agentId === '2') {
            setAgentName('Marky Pears');
            setAgentImage('https://i.ibb.co/gSwVD7F/agent2.jpg');
            setAgentDes('Property Lawyer');
        } else if (agentId === '3') {
            setAgentName('Henry Loren');
            setAgentImage('https://i.ibb.co/jG0PL59/agent3.png');
            setAgentDes('Company Agent');
        } else {
            setShowAgents(true);


        }
    }, [id]);


    const appointmentbtnhandler = (e) => {
        e.preventDefault();

        const date = e.target.date.value;
        Swal.fire({

            text: 'Appointment Saved on ' + date,
            icon: 'success',

        });
      

         e.target.reset();


    }

    return (
        <div className='my-10 px-2'>
            <HelmetProvider context={helmetContext}>
                <Helmet>
                    <title>Appointment</title>
                </Helmet>
            </HelmetProvider>


            <div className="hero min-h-screen bg-base-200 rounded-2xl "  
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {showAgents?

                        <div className='' >
                            <AgentsAppintment />
                        </div>
                    :
                        <div className="flex flex-col max-w-md p-6 dark:bg-gray-50 dark:text-gray-800">
                            <img src={agentImage} alt="" className="flex-shrink-0 object-cover w-64 h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                            <div className='flex flex-col text-center lg:text-left'>
                                <h2 className="text-2xl font-semibold mt-5">{agentName}</h2>
                                <span className=" pb-2 text-xl dark:text-gray-600 mb-4">{agentDes}</span>
                                <p className='w-64 lg:w-auto'>
                                    <q> As an experienced real estate agent, {agentName} brings years of industry expertise
                                        and a dedication to exceptional customer service. Their commitment to understanding clients'
                                        needs, coupled with their proactive approach, has earned them a reputation for fostering
                                        strong, positive relationships.</q>
                                </p>
                            </div>
                        </div>

                    }
                    <div className="card shrink-0 max-w-80 shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={appointmentbtnhandler}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Appointment Date</span>
                                </label>
                                <input type="date" name='date' className="input input-bordered border-accent" required
                                    min={minDate} // Set min attribute to today's date
                                    onChange={handleDateChange} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Time</span>
                                </label>
                                <input type="time" name='time' className="input input-bordered border-accent"
                                    min="10:00" max="20:00" onChange={handleTimeChange} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Topic</span>
                                </label>
                                <select className="select select-accent w-full max-w-xs">
                                    <option disabled selected>What do you want to discuss about?</option>
                                    <option>Selling Property</option>
                                    <option>Buying Property</option>
                                    <option>Renovation</option>
                                    <option>
                                        <img src={agentImage} alt="" />
                                        Lease Property
                                    </option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Any requirements? </span>
                                </label>
                                <textarea name='textArea' className="input input-bordered border-accent" rows="8" cols="50" />
                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn btn-accent">Make An Appointment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <div className='flex flex-col my-10'>
                <h1 className='text-3xl font-bold text-center'>Our Location</h1>
                <BasicMap/>
            </div> */}




        </div>
    );
};

export default Appointment;
