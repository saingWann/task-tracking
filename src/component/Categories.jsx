import React, { useContext } from 'react'
import { UserCircle,Briefcase,BookOpenText,Home,Trash2,MenuSquare } from "lucide-react";
import DataContext from '../Context/Contextapi'

const Categories = () => {

  const {activeTab} = useContext(DataContext);

  const iconType = (type) => {
    if (type === "Personal") {
     return < UserCircle />
    } else if (type === "Home") {
      return <Home />
    } else if (type === "Study") {
     return <BookOpenText />
    } else if (type === "Business") {
    return <Briefcase />
    } else if (type === "All") {
     return <MenuSquare />
    }else{
     return <Trash2 />
    }
  };

  return (
    <div className='w-[85%] ms-auto mt-10  px-14 '>
        <div className='flex justify-between gap-5 border-b-2 pb-5'>
          <div className='flex gap-3'>

            <p className='font-bold flex gap-2 pointer-events-none '>{iconType(activeTab)}{activeTab}</p>
            
          </div>
        </div>
      
    </div>
  )
}

export default Categories