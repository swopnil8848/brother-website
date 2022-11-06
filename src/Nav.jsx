import React from 'react'
// import Call from 'C:\Users\sofni\Desktop\cooler_website_react\my-project\src\call.svg'
export default function Nav() {
  return (
    <div className='m-0 p-0 w-screen h-full overflow-hidden'>
    <div className='flex justify-between bg-blue-900'>
        <div>
            LOGO
        </div>
        <div className='my-auto font-serif'>
            <h1 className="text-5xl font-bold`">Cool Care Service</h1>
        </div>
        <div className='p-4 pr-10'>
            <div className='font-bold text-lg'><ion-icon name="call-outline"></ion-icon> 9860732541</div>
            <div className='font-bold text-lg'><ion-icon name="call-outline"></ion-icon> 9808589912</div>
        </div>
    </div> 

        <div className='text-3xl cursor-pointer md:hidden'>
            <ion-icon name="menu-outline"></ion-icon>
        </div>

        <div>
            <ul className='md:flex justify-around bg-blue-800 md:p-3 sm:pl-5'>
                <li className="home cursor-pointer font-bold mb-2 md:mt-0">Home</li>
                <li className="service cursor-pointer font-bold my-2 md:mt-0">Service Areas</li>
                <li className="Blog cursor-pointer font-bold my-2 md:mt-0">Blog</li>
                <li className="contact cursor-pointer font-bold my-2 md:mt-0">Contact us</li>
                <li className="about cursor-pointer font-bold my-2 pb-3 md:mr-5 md:pr-5 md:m-0">About</li>
            </ul>
        </div>
    </div>  
  )
}
