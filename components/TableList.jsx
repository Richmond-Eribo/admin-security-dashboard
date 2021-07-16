import React from 'react'
import SectionTitle from './common/SectionTitle'
import Table from './common/Table'
import Image from 'next/image'

export default function TableList({Title, Rows, LastLocation}) {
  return (
    <div className='border-b mb-5'>
      <SectionTitle Title={Title} />

      <Table Rows={Rows} LastLocation={LastLocation} />

      <div className='flex justify-center my-6 font-bold'>
        <p className='mr-3'>VIEW MORE</p>
        <Image
          src='/svg/down-arrow.svg'
          height='16'
          width='16'
          alt='arrow down'
        />
      </div>
    </div>
  )
}
