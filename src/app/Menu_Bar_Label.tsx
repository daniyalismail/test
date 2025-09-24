import { Avatar } from 'primereact/avatar'
import React from 'react'

export default function Menu_Bar_Label() {
  return (
    <div className='flex align-items-center gap-2 '
        style={{ height: "10vh" }}
>
        <div className='flex align-items-center gap-1'><h1 className='text-xs font-normal'>Owais Ahmed</h1>
        <i className='pi pi-angle-down'></i>
        </div>
        <Avatar label="OA" size="normal" style={{ backgroundColor: '#dbeafe', color: '#1e3a8a' }} shape="circle" />
    </div>
  )
}
