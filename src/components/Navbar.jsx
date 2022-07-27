import  {useState} from 'react'
 import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag  } from 'react-icons/ai'
 import {BsFillCartFill,BsFillSuitHeartFill,BsCreditCardFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdLiveHelp} from "react-icons/md"
import { ImHome} from 'react-icons/im'

 const Navbar = () => {

    const [close,setClose] =useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex items-center'>
        <div  onClick={()=>setClose(!close)}  className='cursor-pointer'>
    <AiOutlineMenu size={30}/>
 </div>
 <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
    Harika <span className='font-bold'>Lezzetler</span>
 </h1>
           <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] '>
            <p className='bg-red-700 text-white rounded-full p-2'> Eve Sipariş</p>
            <p className=' p-2'> Restaurant</p>
            </div> 
        </div>
 {/* search */}
 <div className='bg-red-100 rounded-full  flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
    <AiOutlineSearch size={25}/>
    <input  className=" bg-transparent p-2 focus:outline-none w-full  text-[#2c3e50] bg-red-100" type="text" placeholder='Ne yemek istersin?' />
 </div>

  {/* card button */}
    <button className=' shadow-lg shadow-red-500/40 bg-red-700 text-white hidden md:flex items-center py-2 rounded-full ' >
        <BsFillCartFill size={20} className="mr-2" /> Sepetim
    </button>
    {/* mobile menu */}
    {close ?    <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>

</div>  : ""}
       
       {/* side menu */}
       <div className={close ?"fixed top-0 left-0 w-[300px] h-screen bg-white  z-10 duration-300 " : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white  z-10 duration-300 "}>
           <AiOutlineClose 
           onClick={()=>setClose(!close)}
           
           size={30} className="absolute  right-4 top-4 cursor-pointer" />
           <h2 className='  bg-gradient-to-r from-indigo-500 via-red-500 to-pink-500 text-2xl p-4'>Harika <span className='font-bold'>Lezzetler</span></h2>

           <nav>
            <ul className='flex flex-col p-4  text-gray-800'>
                <li className='text-xl  py-4 flex '><TbTruckDelivery size={25} className="mr-4" /> Siparişlerim</li>
                <li className='text-xl  py-4 flex '><BsFillSuitHeartFill size={25} className="mr-4" /> Favorilerim</li>
                <li className='text-xl  py-4 flex '><BsCreditCardFill size={25} className="mr-4" /> Cüzdan</li>
                <li className='text-xl  py-4 flex '><MdLiveHelp size={25} className="mr-4" /> Yardım </li>
                <li className='text-xl  py-4 flex '><AiFillTag size={25} className="mr-4" /> Kuponlarım</li>
           
                <li className='text-xl  py-4 flex '><ImHome size={25} className="mr-4" /> Adreslerim</li>
            </ul>
           </nav>

       </div>
        </div>
  )
}

export default Navbar