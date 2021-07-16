import Image from 'next/image'
import CardList from '../components/CardList'
import Heading from '../components/Heading'
import {Users} from '../data/userOverview'
import {Recruiters} from '../data/recruiters'
import TableList from '../components/TableList'
import {Lrows} from '../data/tableRowItems'
import {Drows} from '../data/tableRowItems'

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-6'>
        {/* the menu */}
        <nav className='bg-blue-400 col-span-1'>1</nav>

        {/* the right side of the dashboard */}
        <main className=' pl-3 pt-3  col-span-5 pr-36'>
          {/* this is for the part with the admin heading */}
          <Heading />

          <CardList Title='Users Overview' data={Users} />

          <CardList Title='Recruiter Login Audit' arrow data={Recruiters} />

          <TableList Title='Location Change Alerts' Rows={Lrows} LastLocation />

          <TableList Title='Device Change Alerts' Rows={Drows} />
        </main>
      </div>
    </>
  )
}
