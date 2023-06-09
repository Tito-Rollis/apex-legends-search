import React, { useState } from 'react';
import logo from './logo.svg';
import './index.css';
import { Navbar } from './components/navbar/navbar';

function App() {
    const [role, setRole] = useState('All');
    const roleClickHandler = (role: string) => setRole(role);

    return (
        <div className="App">
            {/* HERO */}
            <div className="w-auto bg-red-600 h-fit py-16 bg-[url('./bg.jpg')] bg-cover  flex flex-col gap-y-8 items-center ">
                <img className="mx-auto" src="/icons/apex-white-icon.svg" alt="" />
                <h1 className="font-satoshi-bold font-bold text-center text-5xl text-white">MEET THE LEGENDS</h1>
                <p className="font-satoshi-reg text-white  text-center max-w-3xl text-xl opacity-[0.8]">
                    It takes grit, talent, and a lot of luck to become a Legend. Pick your favorite and see what their
                    unique set of skills can do for your squad.
                </p>
            </div>
            {/* NAVBAR */}
            <Navbar role={role} clickHandler={roleClickHandler} />
        </div>
    );
}

export default App;
