import { Cursor, useTypewriter } from 'react-simple-typewriter';

const CountText = () => {
    const [text] = useTypewriter({
        words: ['__Tourists Spots__', '__Tourists Spots__', '__Tourists Spots__'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div>
            <h2 className="text-center">
                <span className='text-4xl  font-bold bg-gradient-to-r from-red-500  via-blue-500 to-green-500 text-transparent bg-clip-text'>{text}</span>
                <Cursor cursorColor='red' />
            </h2> <br />
        </div>
    );
};

export default CountText;