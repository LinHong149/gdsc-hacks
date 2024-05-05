import React from 'react'
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-regular-svg-icons";
import Sidenav from '../components/Sidenav';
import StudentInfo from '../components/StudentInfo';

function Page() {
  return (

 
    <div className='flex'>
      <Sidenav/>
      <div className='w-screen flex py-12 pr-12 bg-white' >
        <div className='flex flex-col gap-8 h-full w-full rounded-xl bg-gradient-to-b from-[#C5D0EF] to-[#B7EBEE] py-8 px-8'> 
          <h1 className='text-text_color text-tittle_size font-medium '>Class List</h1> 
          
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
              <div className='flex w-4/12 px-6 gap-20' id ="select all and message container">
                <div className='flex items-center justify center gap-2 text-normal_size'>
                  <input type="checkbox"/>
                  <p className='text-text_color'>Select All</p>
                </div>
                <div className='flex items-center justify-center gap-2 text-normal_size'>
                  <FontAwesomeIcon 
                    icon ={faMessage}
                    className='text-black'
                    />
                  <p className='text-text_color'>Message</p>
                </div>
              </div>

              <div className='flex border py-3 px-6 rounded-lg bg-[#5C677F]'> 
                <p className='text-nor8970mal_size text-white'> Assign homework</p>
              </div>
            </div>

            <div className='flex flex-col rounded-2xl overflow-hidden'>
              <StudentInfo name="Student" points="Points" completion="Completion" email="Email" isBold={true}/>
              <StudentInfo name="Jefferson" points="0" completion="50%" email="jefferson@gmail.com"/>
              <StudentInfo name="Jefferson" points="0" completion="50%" email="jefferson@gmail.com"/>
              <StudentInfo name="Jefferson" points="0" completion="50%" email="jefferson@gmail.com"/>
              <StudentInfo name="Jefferson" points="0" completion="50%" email="jefferson@gmail.com"/>
              <StudentInfo name="Jefferson" points="0" completion="50%" email="jefferson@gmail.com"/>
            </div>
          </div>

          
          

        </div>
      </div>
    </div>
 
    
  )
}

export default Page;