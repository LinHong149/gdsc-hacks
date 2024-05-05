import React from 'react'
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faBook, faGear} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

function Sidenav() {
  return (

    <div className='flex flex-col h-screen justify-between bg-white px-4 py-16 w-48 items-center'>
        <Image
          src="/goose1.png"
          width={62}
          height={62}
          alt="Company Logo"
          className='rounded-full'
        />

        <div className='flex flex-col justify-between  gap-12 '>
          <FontAwesomeIcon 
          icon = {faHouse} 
          className='text-black text-2xl'
          />
          <hr/>
          <FontAwesomeIcon 
          icon = {faUserGroup}
          className='text-black text-2xl'
          />
          <hr></hr>
          <FontAwesomeIcon
          icon = {faBook}
          className='text-black text-2xl'
          /> 
        </div>

        <div className='flex flex-col gap-8'>
          <FontAwesomeIcon
          icon = {faGear}
          className='text-black text-2xl'
          />
          <Image 
          src = "/goose1.png"
          width={62}
          height={62}
          alt="Profile picture"
          className='rounded-full'
          />
        </div>

      </div>
    
  )
}



export default Sidenav