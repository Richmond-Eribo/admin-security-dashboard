import Image from 'next/image'

export default function SectionTitle({Title, arrow, filter}) {
  return (
    <div className='flex justify-between'>
      <div className='flex my-3 '>
        <h3 className='font-bold mb-3 mr-5 pt-2 text-blue-700 '>{Title} </h3>
        {arrow && (
          <Image
            src='/svg/down-arrow.svg'
            height='16'
            width='16'
            alt='arrow down'
          />
        )}
        <div className='mx-1'></div>
        <Image
          src='/svg/questionmark.svg'
          height='16'
          width='16'
          alt='questionmark'
        />
      </div>

      {filter && (
        <div className='flex text-gray-400  my-3 pt-2'>
          <p>TODAY</p>
          <p>THIS WEEK</p>
          <p className='underline text-black font-bold'>MONTH</p>
        </div>
      )}

      <style jsx>
        {`
          p {
            margin-right: 15px;
            font-size: 12px;
          }
        `}
      </style>
    </div>
  )
}
