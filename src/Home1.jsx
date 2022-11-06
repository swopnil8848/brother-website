import React from 'react'

export default function Home1() {
  return (
    <div className='text-gray-800 text-center m-auto'>
    <div className='bg-[url(https://i.pinimg.com/originals/10/bb/5a/10bb5a132dcc8588087bdaeb4214c0f3.jpg)] bg-opacity-50 w-screen h-screen bg-cover overflow-hidden p-0 m-0'>
        <h1 className="font-bold text-6xl mt-20 mb-5">COOL CARE SERVICE PVT.LTD</h1>
        <h1 className="font-bold text-4xl m-10">We provide the most formidable and exprienced people for repair service for your cooler devices</h1>
        <button className='bg-blue-800 font-semibold flex p-3 my-5 border-blue-900 rounded-lg text-white m-auto text-white hover:text-gray-400 hover:bg-blue-600 hover:border-opacity-95'>
            <span><img src="https://cdn.iconscout.com/icon/free/png-256/facebook-messenger-1464524-1239438.png"height={30} width={30} alt="" /></span><span className='font-semibold text-lg'>Chat On Messenger</span>
        </button>
        <button className='btn bg-green-500 text-white p-3 text-lg font-semibold font-sans flex items-center mx-auto border border-emerald-900 rounded-lg  hover:text-gray-400 hover:bg-green-600 hover:border-opacity-95'>
            <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" className='mx-4' alt="the image couldnt be shown" height={25} width={25}/></span><span className='pr-3 font-semibold'>Chat On WhatsApp</span> 
        </button>
        <button>
            <button className='bg-blue-800 font-semibold flex p-2 my-5 border-blue-900 rounded-lg text-white  hover:text-gray-400 hover:bg-blue-600 hover:border-opacity-95'><span className='px-2'><img src="https://pixsector.com/cache/dc0ee776/avd5c445f01ca4712be88.png" height={30} width={30} alt="" /></span><span className='pr-2'>Request My Form</span></button>
        </button>
    </div>
    </div>
  )
}
