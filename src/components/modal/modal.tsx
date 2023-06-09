import YouTube, { YouTubeProps } from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import { LegendsData } from '../../types';

interface Props {
    data: LegendsData | undefined;
    clickHandler: (close: boolean) => void;
}

export const Modal = (Props: Props) => {
    let videoId = getYouTubeID(Props.data?.video ? Props.data.video : '');

    const opts = {
        width: '500',
        height: '300',
        playerVars: {
            autoplay: 1,
        },
    };

    const _onReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };
    return (
        <div
            onClick={() => Props.clickHandler(false)}
            className="bottom-0 left-0 top-0 right-0 bg-black bg-opacity-70 absolute z-10 flex justify-center "
        >
            <div className="bg-yellow-500 items-center max-w-3xl h-fit flex flex-wrap gap-y-4 justify-center py-4 px-4 md:px-8">
                <div className="w-[400px]">
                    <img src={Props.data?.fullPortrait} alt="char" />
                </div>
                <div className="flex flex-row flex-wrap md:flex-col gap-y-4">
                    {/* Biodata */}
                    <div className="flex mx-auto flex-col">
                        <div className="flex justify-between w-48 items-center gap-x-8">
                            <h1 className="font-custom font-medium">NAME</h1>
                            <h1 className="font-custom">{Props.data?.displayName}</h1>
                        </div>
                        <div className="flex justify-between w-48 items-center gap-x-8">
                            <h1 className="font-custom font-medium">Role</h1>
                            <h1 className="font-custom">{Props.data?.role}</h1>
                        </div>
                    </div>

                    {/* Description */}
                    <h1 className="font-custom font-light text-sm text-center mx-auto opacity-85 w-[500px]">
                        {Props.data?.description}
                    </h1>

                    {/* Abilities */}
                    <div className="flex flex-wrap items-center gap-x-6">
                        {Props.data?.abilities.map((ability) => (
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    className="w-[50px]"
                                    src={ability.displayIcon ? ability.displayIcon : ''}
                                    alt="icon"
                                />
                                <h1 className="text-center font-custom font-medium text-lg">{ability.displayName}</h1>
                                <h1 className="text-center font-custom text-sm font-light">{ability.description}</h1>
                            </div>
                        ))}
                    </div>

                    {/* Embedded video */}
                    <div className="flex justify-center">
                        <YouTube videoId={videoId ? videoId : ''} opts={opts} onReady={_onReady} />
                    </div>
                </div>
            </div>
        </div>
    );
};
