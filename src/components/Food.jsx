import {useState} from 'react'
import {data} from '../data/data'

const Food = () => {
    const [foods,setFoods] = useState(data);

    //filter category
    const filterType=(category) =>{
        setFoods(
            data.filter((item)=> {
                return item.category===category;

            })
        );
    };
    // fiyat filtreleme
     const filterPrice=(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price===price;
            })
        );
     }; 

  return (
    <div className='max-w-[1640px]m-auto px-4 p-12 py-12'>
        <h1 className='text-red-500 font-bold text-4xl text-center'> En yüksek puanlı yemekler</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
            <p className='font-bold text-gray-700'>Yemekler</p>
            <div className='flex justify-between flex-wrap'>   
                <button onClick={()=>setFoods(data)} className=' m-1 border-orange-500  hover:bg-red-600 text-red-600 hover:text-white '>All</button>
                <button  onClick={()=>filterType('burger')} className=' m-1 border-orange-500  hover:bg-red-600 text-red-600 hover:text-white '>Burger</button>
                <button  onClick={()=>filterType('pizza')} className=' m-1  border-orange-500  hover:bg-red-600 text-red-600 hover:text-white'>Pizza</button>
                <button  onClick={()=>filterType('tavuk')} className=' m-1 border-orange-500  hover:bg-red-600 text-red-600  hover:text-white'>Tavuk</button>
                <button  onClick={()=>filterType('Salatalar')} className=' m-1 border-orange-500  hover:bg-red-600 text-red-600 hover:text-white '>Salata</button>
            </div>
            </div>

            <div>
            <p className='font-bold text-gray-700'>Fiyat</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button  onClick={()=>filterPrice('50₺')} className=' m-1 border-orange-500  hover:bg-red-600 text-red-600 hover:text-white '>50</button>
                    <button  onClick={()=>filterPrice('100₺')} className=' m-1 border-orange-500  hover:bg-red-600 text-red-600 hover:text-white '>100</button>
                    <button  onClick={()=>filterPrice('150₺')} className=' m-1 border-orange-500  hover:bg-red-600 text-red-600 hover:text-white '>150</button>
                    <button  onClick={()=>filterPrice('200₺')} className=' m-1 border-orange-500  hover:bg-red-600 text-red-600 hover:text-white '>200</button>
                </div>
                            </div>

        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map((item,index)=>(
            <div key={index} className="border shadow-lg  rounded-lg hover:scale-105 duration-300">
                <img src={item.image} alt={item.name } 
                className="w-full
                h-[200px]
                object-cover
                rounded-t-lg"
                />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'> {item.name}</p>
                    <p> <span className='bg-red-500 text-white p-1 rounded-full'>{item.price}</span></p>
                </div>
            </div>

          
          ) )}
        </div>

    </div>
  )
}

export default Food