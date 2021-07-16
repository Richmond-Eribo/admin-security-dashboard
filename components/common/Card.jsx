import Image from 'next/image'
import React from 'react'

export default function Card({data}) {
  return (
    <div className='flex mb-6'>
      {data.map(D => (
        <div
          className='border rounded-md w-52  p-2 mr-2 flex flex-col '
          key={D.name}
        >
          <h3 className='mr-8 text-xs'>{D.name}</h3>

          <div className='flex justify-between content-center my-5 '>
            <p className=' text-3xl text-bold align-middle'>{D.number}</p>

            {D.arrow == 'up' ? (
              <Image
                src='/svg/up-arrow-chart.svg'
                height='18'
                width='18'
                alt='up arrow'
              />
            ) : (
              <Image
                src='/svg/down-arrow-chart.svg'
                height='18'
                width='18'
                alt='down arrow'
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
