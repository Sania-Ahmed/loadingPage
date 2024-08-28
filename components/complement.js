import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import { getRandomQuote } from "../lib/randomQuote";
import Swal from 'sweetalert2';


const Complement = () => {
  const getQuote = async () => {
    const quote = await getRandomQuote();

    Swal.fire({
      title: 'Quote',
      text: `${quote.q}\n - ${quote.a}`,
      confirmButtonText: 'Cool'
    })
  }
  return(
  <div className="mb-3 w-full flex justify-center" >
    <button onClick={getQuote}>
    <div className='wavy-bg  drop-shadow-lg rounded-xl md:w-80 w-auto p-2 md:p-4 flex justify-evenly items-center'>
        <div className='text-center md:text-lg font-semibold text-cyan-950'>
            <p>Get a complement !</p>
        </div>
        <div className='hover:bg-sky-400 w-9 h-9 hover:text-slate-100 transition ease-out duration-75 p-2 rounded-full cursor-pointer'>
          <FontAwesomeIcon className='w-full h-full text-cyan-950  hover:text-slate-100  ' icon={faArrowUpLong} />
        </div>
    </div>
    </button>
  
  </div>
  )
};
export default Complement;