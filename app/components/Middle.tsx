import first from '../images/Group 132.png'
import second from '../images/Group.png'
import third from '../images/Group 16.png'
import fourth from '../images/Group 40.png'
import CardItems from './UI/Card'
{/* eslint-disable-next-line @next/next/no-img-element */}

export default function Middle() {
  // Middle components
  return (
    <div className=" w-screen mx-auto flex flex-col ">
      <div className="upper   w-full h-[360px] sm:h-[180px] bg-[#F4F9FF] grid grid-cols-2 sm:grid-cols-4">
        <div className="flex flex-col items-center my-4 text-[#00357B] font-semibold">
          <img src={first.src} alt="first" style={{ width: '48px', height: '48px', backgroundColor: 'transparent' }} />
          <h2 className='mt-4 text-sm uppercase'>Book With</h2>
          <p className="text-2xl sm:text-3xl font-['Oswald']">ONLY 20%</p>
          <div className='bg-[#00357B] h-[6px] w-24 opacity-[12%] rounded-lg mt-2'></div>
        </div>
        <div className='flex flex-col items-center my-4 text-[#00357B] font-semibold'>
          <img src={second.src} alt='second' style={{ width: '48px', height: '48px', backgroundColor: 'transparent' }} />
          <h2 className='mt-4 text-sm uppercase'>Payment Plan</h2>
          <p className="text-2xl sm:text-3xl font-['Oswald']">EASY 70/30</p>
          <div className='bg-[#00357B] h-[6px] w-24 opacity-[12%] rounded-lg mt-2'></div>
        </div>
        <div className='flex flex-col items-center my-4 text-[#00357B] font-semibold'>
          <img src={third.src} alt='third' style={{ width: '48px', height: '48px', backgroundColor: 'transparent' }} />
          <h2 className='mt-4 text-sm uppercase'>Handover on</h2>
          <p className="text-2xl sm:text-3xl font-['Oswald']">Q2 2027</p>
          <div className='bg-[#00357B] h-[6px] w-24 opacity-[12%] rounded-lg mt-2'></div>
        </div>
        <div className='flex flex-col items-center my-4 text-[#00357B] font-semibold'>
          <img src={fourth.src} alt='fouth' style={{ width: '48px', height: '48px', backgroundColor: 'transparent' }} />
          <h2 className='mt-4 text-sm uppercase'>Area Start From</h2>
          <p className="text-2xl sm:text-3xl font-['Oswald']">700 SQMT</p>
          <div className='bg-[#00357B] h-[6px] w-24 opacity-[12%] rounded-lg mt-2'></div>
        </div>
      </div>
      <div className='middle max-w-6xl mx-auto text-[#00357B] flex flex-col justify-center items-center mt-14 px-4'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-center text-3xl sm:text-4xl font-light whitespace-pre-wrap leading-[0.8] sm:leading-[0.8]'>HARBOUR LIGHT</h1>
          <p className='text-[10px] mt-2'>de GRISOGONO</p>
          <p className='text-[6px] leading-[0.2]'>GENEVE</p>
          <h1 className=" mt-8 text-3xl sm:text-4xl font-medium font-['Oswald'] uppercase">Features & Amenities</h1>
        </div>
        <div className="max-w-3xl font-['Popins'] font-medium text-lg text-center mt-10">
          <p className="text-[#343434] my-4 ">Harbour Lights beautifully honours maritime voyages while embracing
            an opulent seafront lifestyle. Its maritime-inspired amenities
            provide an unmatched seaside experience, offering a life of
            tranquility and bliss.</p>
        </div>
      </div>
      <div className='lower my-6 max-w-6xl mx-auto gap-16 relative   grid grid-cols-2 sm:grid-cols-4'>
        {CardItems.map((item, index) => {
          return (
            <div className='shadow-2xl rounded-xl w-[227px]  h-[271px] ' key={index}>
              <div className='rounded-full mx-auto my-2 w-[200px] h-[200px]'>
                <img className='w-full h-full rounded-full' alt='card' src={item.img} />
              </div>
              <div className='w-full text-center flex justify-center items-center'><p className='text-[#00357B] font-[Poppins] font-semibold text-[16px] w-1/2'>{item.value}</p></div>
            </div>
          )
        })}

      </div>
    </div>
  )
}