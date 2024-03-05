import { useState } from 'react'; 
import internpulselogo from '../../assets/InternPulse logo 32px.svg'
import studentimage from '../../assets/studentimage.svg'
import success_icon from '../../assets/successicon.svg'


export default function ForgotPassword() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <main className='w-full h-auto'>
      <div className='flex'>
      <div className="h-full w-1/2 hidden md:block lg:block">
        <img className="h-2/5 object-fit:cover object-position: center" style={{ backfaceVisibility: 'hidden', imageRendering: 'crisp-edges',}} src={studentimage} alt="" />
      </div>
      <div className='container mx-auto w-full'>
      <div className="items-center h-full w-full">
        <div className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[70px] bg-white text-left xs:text-left md:text-center lg:text-center">
          <img src={internpulselogo} alt="Intern Pulse Logo" className='mx-auto inline-block'/>
        </div>
          <div className="w-11/12 mx-auto">
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Reset Password</h1>
          <p>Enter the Email address used to create your Interpulse account and we will send you a link to reset your password</p>
          </div>
          <div>
            <form action=""  method="post">
              <label htmlFor="">Enter Email Address</label><br />
              <input type="email" name="email" id="email" placeholder="Joepaul@gmail.com" />
            </form>
            <button className='w-full h-full bg-primary-500 rounded-lg' onClick={toggleModal}>Next</button>
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

