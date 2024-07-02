import React, { useContext } from 'react';
import Nav from '../../components/Nav/Nav';
import Slider from './Slider/Slider';
import Plots from './plots/Plots';
import MeetAgents from './MeetAgents';
import toast, { Toaster } from 'react-hot-toast';
import FAQ from './FAQ';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContext } from '../../provaider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Home = () => {
    const helmetContext = {};

    // const {loading}=useContext(AuthContext);
    // if (loading) {
    //     return <>
    //         <div className="flex items-center justify-center ">
    //             <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
    //         </div>
    //     </>;

    // }
    return (
        <div>
            <HelmetProvider context={helmetContext}>
                <Helmet> 
                 <title>SB Estate | Home</title>  
                </Helmet>
            </HelmetProvider>
            <div className='mt-5 mb-10' data-aos="fade-up"
             data-aos-duration="1000">
                <Slider></Slider>
             </div>
            <div className='mt-5 mb-10' data-aos="fade-up"
             data-aos-duration="1000">
                <Plots></Plots>
            </div>
            <div className='mt-5 mb-10' data-aos="fade-up"
             data-aos-duration="1000">
                <MeetAgents></MeetAgents>
            </div>
            <div className='mt-5 mb-10' data-aos="fade-up"
             data-aos-duration="1000" >
                <FAQ></FAQ> 
            </div>
            
            
            
        </div>
    );
};

export default Home;