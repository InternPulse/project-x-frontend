import { useState } from 'react'
import internpulselogo from '../assets/InternPulse logo 32px.svg'
import studentimage from '../assets/studentimage.svg'
import success_icon from '../assets/successicon.svg'

export default function ResetPassword() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
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
            <form action=""  method="post">
              <label htmlFor="">Enter your new Password</label><br />
              <input type="password" name="email" id="email" placeholder="***************" />
              <div>
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="" id="" placeholder="***************"/>
              </div>
            </form>
            <button className='w-full h-full bg-primary-500' onClick={toggleModal}>Next</button>
          </div>
          </div>
        </div>
      </div>
      </div>
      {modal && (
            <div>
              <div
                className="modal fade"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <img src={success_icon} alt="" />
                    </div>
                          <button
                            className=""
                            onClick={toggleModal}
                          >
                            Back to Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
          )}
    </main>
  )
}
