import internpulselogo from '../assets/InternPulse logo 32px.svg'
import studentimage from '../assets/studentimage.svg'

export default function ResetPassword() {
  return (
    <main className='w-full h-screen'>
      <div className='flex'>
      <div className="h-2/4 w-full hidden md:block lg:block">
        <img className="h-full w-full object-cover" src={studentimage} alt="" />
      </div>
      <div className='container mx-auto w-full'>
      <div className="items-center h-full w-full">
        <div className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[70px] bg-white">
          <img src={internpulselogo} alt="Intern Pulse Logo" />
        </div>
          <div className="w-[570px] mx-auto">
          <div>
          <h1 className="text-5xl">Reset Password</h1>
          </div>
          <div>
            <form action="">
              <label htmlFor=""></label><br />
              <input type="password" name="email" id="email" placeholder="**************" />
              <div>
                <label htmlFor=""></label>
                <input type="password" name="" id="" placeholder="**************"/>
              </div>
            </form>
            <button className='w-full h-full bg-primary-500'>Next</button>
          </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
