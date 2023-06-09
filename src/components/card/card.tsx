interface Props {
    img: string;
    name: string;
}

export const Card = ({ img, name }: Props) => {
    return (
        <div className=" relative flex flex-col gap-y-4 w-[300px] h-[350px]">
            <div className="relative bg-gray-300 w-auto h-auto ">
                <img src={img} alt="char" />
                <div className="h-[5px] w-full bg-red-700 absolute left-0 mx-auto right-0 bottom-0 transition-all"></div>
            </div>
            <h1 className="font-custom font-medium text-xl text-center text-black">{name}</h1>
        </div>
    );
};
