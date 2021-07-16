import React from 'react'
import SectionTitle from './common/SectionTitle'
import Table from './common/Table'

export default function TableList({Title, Rows, LastLocation}) {
  return (
    <div className='border-b mb-5'>
      <SectionTitle Title={Title} />

      <Table Rows={Rows} LastLocation={LastLocation} />
    </div>
  )
}
