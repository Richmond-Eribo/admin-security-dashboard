import Image from 'next/image'

export default function Heading() {
  return (
    <section className='flex flex-col border-b mb-5'>
      <div className='flex justify-between content-center'>
        {/* title and hamburger */}
        <div className='flex content-center justify-betwee'>
          <Image
            src='/svg/menu.svg'
            height='16'
            width='16'
            alt='harmbuger menu'
            className=''
          />
          <p className='ml-2 p-2'>Admin-Security Dashboard</p>
        </div>

        {/* the search and notification */}
        <div className='flex py-2'>
          <div className='input-search px-2 mr-10 flex justify-between h-6 rounded-md overflow-hidden bg-gray-200 w-56 text-sm'>
            <input
              type='text'
              placeholder='Candidate Search'
              className=' bg-none w-40 py-1 h-6 outline-none border-none focus:border-none bg-gray-200'
            />
            <Image src='/svg/search.svg' height='13' width='13' alt='/' />
          </div>

          <Image
            src='/svg/questionmark.svg'
            className='pixel'
            height='16'
            width='16'
            alt='/'
          />

          <div className='mr-5'></div>
          <Image
            src='/svg/notification.svg'
            height='16'
            width='16'
            alt='notification'
          />
        </div>
      </div>

      <div className='flex w-40 text-sm justify-between p-1 h-7 m-4 rounded-lg border  content-center mb-7'>
        <p>global data</p>
        <Image
          src='/svg/down-arrow.svg'
          height='40'
          width='40'
          alt='arrow down'
        />
      </div>
    </section>
  )
}
