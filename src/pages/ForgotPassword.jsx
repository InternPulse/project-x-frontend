import internpulselogo from '../assets/InternPulse logo 32px.svg'
import studentimage from '../assets/studentimage.svg'


export default function ForgotPassword() {
  return (
    <main className='w-full h-auto'>
      <div className='flex'>
      <div className="h-fit w-full hidden md:block lg:block">
        <img className="h-2/5 object-fit:cover object-position: center" style={{ backfaceVisibility: 'hidden', imageRendering: 'crisp-edges',}} src={studentimage} alt="" />
      </div>
      <div className='container mx-auto w-full'>
      <div className="items-center h-full w-full">
        <div className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[70px] bg-white text-left xs:text-left md:text-center lg:text-center">
          <img src={internpulselogo} alt="Intern Pulse Logo" className='mx-auto inline-block'/>
        </div>
          <div className="w-11/12 mx-auto">
          <div>
          <h1 className="text-5xl">Reset Password</h1>
          <p>Enter the Email address used to create your Interpulse account and we will send you a link to reset your password</p>
          </div>
          <div>
            <form action="">
              <label htmlFor="">Enter Email Address</label><br />
              <input type="email" name="email" id="email" placeholder="Joepaul@gmail.com" />
            </form>
            <button className='w-full h-full bg-primary-500 rounded-lg'>Next</button>
          </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}

{/* <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">InternPulse</h1>  
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">Enter Email Address</label>
            <input type="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <button type="button" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-300 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">Next</button>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <a href="#" className="transition duration-200 text-blue-500 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:underline text-sm">Sign in</a>
              </div>
              <div className="text-center sm:text-right  whitespace-nowrap">
                <a href="#" className="transition duration-200 text-blue-500 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:underline text-sm">Forgot password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}