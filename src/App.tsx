import { useEffect, useState } from 'react';
import './index.css';
import { Navbar } from './components/navbar/navbar';
import { GetAllLegendsSwr } from './services/Legends/get';
import { Card } from './components/card/card';

import { DUMMY_DATA } from './DUMMY_DATA';
import { LegendsData } from './services/types';

function App() {
    const [role, setRole] = useState('All');
    const [legendsData, setLegendsData] = useState<LegendsData[]>([]);
    const roleClickHandler = (role: string) => setRole(role);
    const { data } = GetAllLegendsSwr();
    useEffect(() => {
        setLegendsData(DUMMY_DATA);
    }, []);
    return (
        <>
            <head>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=technor@300,400,700,500,900&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <div className="h-auto">
                {/* HERO */}
                <div className="w-auto bg-red-600 h-fit py-16 bg-[url('./bg.jpg')] bg-cover  flex flex-col gap-y-8 items-center ">
                    <img className="mx-auto" src="/icons/apex-white-icon.svg" alt="" />
                    <h1 className="font-custom tracking-wider font-bold text-center text-5xl text-white">
                        MEET THE LEGENDS
                    </h1>
                    <p className="font-custom font-light text-white text-center max-w-3xl text-xl opacity-[0.8]">
                        It takes grit, talent, and a lot of luck to become a Legend. Pick your favorite and see what
                        their unique set of skills can do for your squad.
                    </p>
                </div>
                {/* NAVBAR */}
                <Navbar role={role} clickHandler={roleClickHandler} />

                {/* Cards */}
                <div className="flex flex-wrap justify-between mx-8">
                    {legendsData ? (
                        legendsData.map((el) => <Card img={el.fullPortrait} name={el.displayName} />)
                    ) : (
                        <h1>Loading</h1>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
