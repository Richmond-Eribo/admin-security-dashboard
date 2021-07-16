import Image from 'next/image'
import CardList from '../components/CardList'
import Heading from '../components/Heading'
import {Users} from '../data/userOverview'
import {Recruiters} from '../data/recruiters'
import TableList from '../components/TableList'
import {Lrows} from '../data/tableRowItems'
import {Drows} from '../data/tableRowItems'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-6'>
        {/* the menu */}
        <nav className='col-span-1'>
          <Nav />
        </nav>

        {/* the right side of the dashboard */}
        <main className=' pl-3 pt-3  col-span-5 pr-36'>
          {/* this is for the part with the admin heading */}
          <Heading />

          <CardList Title='Users Overview' data={Users} />

          <CardList
            Title='Recruiter Login Audit'
            arrow
            filter
            data={Recruiters}
          />

          <TableList Title='Location Change Alerts' Rows={Lrows} LastLocation />

          <TableList Title='Device Change Alerts' Rows={Drows} />
        </main>
      </div>
    </>
  )
}
