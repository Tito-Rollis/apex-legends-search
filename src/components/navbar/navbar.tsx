import styles from './index.module.css';

const NavLinks = ['All', 'Initiator', 'Duelist', 'Sentinel', 'Controller'];

interface Props {
    role: string;
    clickHandler: (role: string) => void;
}

export const Navbar = ({ role, clickHandler }: Props) => {
    return (
        <nav className="bg-[#161616]">
            <ul className="flex justify-center items-center text-white font-custom font-normal">
                {NavLinks.map((link) => {
                    return (
                        <li
                            onClick={() => clickHandler(link)}
                            className="h-14 px-4 flex items-center cursor-pointer hover:bg-black transition-all relative"
                        >
                            <h1 className="font-satoshi-reg text-white opacity-[0.9] tracking-wide">{link}</h1>
                            <div
                                className={`h-[5px] ${
                                    role === link ? 'w-full' : 'w-0'
                                } bg-red-700 absolute left-0 mx-auto right-0 bottom-0 transition-all`}
                            ></div>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
