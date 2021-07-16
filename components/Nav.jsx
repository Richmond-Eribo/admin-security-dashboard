import Image from 'next/image'
export default function Nav() {
  return (
    <div className=''>
      <div className='h-26 flex justify-center text-white font-bold bg-red-500 text-center py-5'>
        <Image src='/svg/avatar.svg' width='24' height='24' alt='dashboard' />
        <p>John Doe</p>
      </div>

      <div className='flex flex-col  text-sm  px-5'>
        <div className='section flex'>
          <Image
            src='/svg/dashboard.svg'
            width='18'
            height='18'
            alt='dashboard'
          />
          <p>Dashboard</p>
        </div>
        <div className='section flex'>
          <Image src='/svg/inbox.svg' width='18' height='18' alt='dashboard' />
          <p>Inbox</p>
        </div>
        <div className='section flex'>
          <Image src='/svg/company.svg' width='18' height='18' alt='company' />
          <p>Companies</p>
        </div>
        <div className='section flex'>
          <Image src='/svg/earth.svg' width='18' height='18' alt='happening' />
          <p>Whats Happening</p>
        </div>

        <div className='section flex mt-72'>
          <Image src='/svg/signout.svg' width='18' height='18' alt='signout' />
          <p>Logout</p>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding-top: 6px;
          padding-bottom: 6px;
        }
        p {
          margin-left: 4px;
        }
      `}</style>
    </div>
  )
}
