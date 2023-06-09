import { useEffect, useState } from 'react';

import { Navbar } from './components/navbar/navbar';
import { GetAllLegendsSwr } from './services/Legends/get';
import { Card } from './components/card/card';

import './index.css';

import { LegendsData } from './services/types';
import { SearchBar } from './components/searchBar/searchBar';

function App() {
    const [role, setRole] = useState('All');
    const [search, setSearch] = useState<string>('');
    const [legendsData, setLegendsData] = useState<LegendsData[]>([]);
    const { data } = GetAllLegendsSwr();

    const roleClickHandler = (role: string) => setRole(role);
    const searchHandler = (value: string) => setSearch(value);

    useEffect(() => {
        if (data) {
            // If search value is empty
            if (search === '') {
                return setLegendsData(role === 'All' ? data : data.filter((e) => e.role === role));
            }
            // If search value is set
            if (search !== '') {
                return setLegendsData(
                    data.filter((e) => {
                        setRole(e.role);
                        return e.displayName.toLowerCase() === search?.toLowerCase();
                    })
                );
            }
        }
    }, [data, role, search]);

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

                {/* Navbar */}
                <Navbar role={role} clickHandler={roleClickHandler} />

                {/* Content */}
                <div className="flex flex-col gap-y-16 pt-8 bg-[url('./yellow-bg.jpg')]">
                    {/* Search Bar */}
                    <SearchBar clickHandler={searchHandler} />

                    {/* Cards */}
                    <div className="flex flex-wrap justify-center gap-x-7 mx-8">
                        {legendsData ? (
                            legendsData.map((el) => <Card img={el.fullPortrait} name={el.displayName} />)
                        ) : (
                            <h1>Loading</h1>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
