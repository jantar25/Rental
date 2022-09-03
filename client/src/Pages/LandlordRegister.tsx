import React,{useState} from 'react'
import i18next from 'i18next';
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom'
import { publicRequest } from '../requestMethode'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const LandlordRegister = () => {
  const history = useNavigate()
  const [landLord,setLandLord] = useState({
    names:'',
    email:'',
    phone1:'',
    phone2:'',
    password:'',
    confirmedPassword:'',
    error:'',
    loading:false,
});
const {names,email,phone1,phone2,password,confirmedPassword,error,loading} = landLord;

const handleChange = (e:any) =>{
  setLandLord({ ...landLord, [e.target.name] : e.target.value })
};

const handleRegisterLandLord= async (e:any)=>{
  e.preventDefault();
  setLandLord({ ...landLord,error:'',loading:true });

  if(!names || !email || !password || !confirmedPassword || !phone1 || !phone2) {
    setLandLord({ ...landLord,error: '*All fields are required*' })
  } else if (password !== confirmedPassword) {
    setLandLord({ ...landLord,error: '*Confirm password must be equal to password*' })
  } else {
          try {
              const res = await publicRequest.post("/landLordAuth/register",
              {names,email,password,phone1,phone2});
              setLandLord({
                names:'',
                email:'',
                phone1:'',
                phone2:'',
                password:'',
                confirmedPassword:'',
                error:'',
                loading:false,
              });
              history("/login")
              console.log(res)
          } catch(err:any){
            setLandLord({ ...landLord,error:err.response.data.message,loading:false });
              console.log(err.response)
          }
} 
}

  return (
    <div>
        <Navbar />
        <div className=" flex justify-center my-8">
          <div className="bg-gray-200 rounded-lg p-4 md:w-2/3">
              <div className="">
                  <h2 className="text-xl text-[#002853] font-[600]">{i18next.t('landLord')as string}</h2>
                  <p className="text-2xl text-orange-500 font-[700] my-2">{i18next.t('landLordRegistor')as string}</p>
                  <span className="text-md text-[#040C18] font-[400]">{i18next.t('landLordRegistorIntro')as string}</span>
              </div>
              <form className="mt-4">
                  <div className="flex flex-col mb-2">
                      <input type="text" placeholder={i18next.t('namesPlaceholder')as string} className="px-4 py-2 my-2 rounded" name='names' value={names} onChange={handleChange}/>
                      <input type="text" placeholder={i18next.t('emailPlaceholder')as string} className="px-4 py-2 my-2 rounded" name='email' value={email} onChange={handleChange}/>
                      <input type="text" placeholder={i18next.t('phone1Placeholder')as string} className="px-4 py-2 my-2 rounded" name='phone1' value={phone1} onChange={handleChange}/>
                      <input type="text" placeholder={i18next.t('phone2Placeholder')as string} className="px-4 py-2 my-2 rounded" name='phone2' value={phone2} onChange={handleChange}/>
                      <input type="password" placeholder={i18next.t('passwordPlaceholder')as string} className='px-4 py-2 my-2 rounded' name='password' value={password} onChange={handleChange}/>
                      <input type="password" placeholder={i18next.t('confirmPasswordPlaceholder')as string} className='px-4 py-2 my-2 rounded' name='confirmedPassword' value={confirmedPassword} onChange={handleChange}/>
                  </div>
                  {error? <p className='text-red-900 font-bold text-sm my-2'>{`*${landLord.error}*`}</p> : null}
                  <p className='text-sm my-2'>{i18next.t('privacyPolicy')as string}<b className='ml-1'>{i18next.t('privacyPolicyText')as string}</b></p>
                  <button className="px-8 py-2 bg-[#002853] text-white font-[600] rounded-md hover:shadow-lg" onClick={handleRegisterLandLord}>{loading? i18next.t('registering')as string : i18next.t('register')as string}</button>
                  <div className="flex items-center mt-4">
                    <p className="text-[13px] text-gray-600">{i18next.t('haveNoAccount')as string}
                        <Link to='/login'>
                            <span className="text-[#002853] ml-2 font-[700] text-sm cursor-pointer">{i18next.t('login')as string}</span>
                        </Link>
                    </p>
                </div>
              </form>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default LandlordRegister