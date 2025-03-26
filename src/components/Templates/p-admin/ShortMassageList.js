'use client'
import React from 'react'
import Swal from 'sweetalert2'

function ShortMassageList({massages}) {
    const ShowMassage = (massage) => {
       Swal.fire({
        title: 'متن پیام',
        text: massage,
        icon: 'info',
        confirmButtonText: 'باشه'
      })
    }
  return (
    <div>
      <table className=' w-full h-fit text-center '>
        <thead>
            <tr>
            <th>نام</th>
            <th>عنوان</th>
            <th>نمایش</th>
            </tr>
        </thead>
        <tbody >
            {
                massages.map((massage)=>(
                    <tr key={massage._id} >
                        <td>{massage.name}</td>
                        <td>{massage.title}</td>
                        <td><button onClick={()=>ShowMassage(massage.massage)} className='bg-purple-600 text-white p-2 rounded-md'>نمایش</button></td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default ShortMassageList
