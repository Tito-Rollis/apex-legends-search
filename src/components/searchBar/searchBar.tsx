import { ChangeEvent, useRef, useState } from 'react';

interface Props {
    clickHandler: (value: string) => void;
}

export const SearchBar = ({ clickHandler }: Props) => {
    const [inputValue, setInputValue] = useState<string | undefined>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (inputValue) {
            clickHandler(e.target.value);
        }
        if (inputValue === '') {
            clickHandler('');
        }
    };

    return (
        <form className="flex justify-center w-auto">
            <input
                onChange={inputChangeHandler}
                value={inputValue}
                ref={inputRef}
                className="bg-black py-5 px-4 text-white font-custom outline-none"
                type="text"
            />
            <button type="submit" className="bg-black py-5 px-4 text-center font-custom font-medium text-red-600">
                SEARCH
            </button>
        </form>
    );
};
