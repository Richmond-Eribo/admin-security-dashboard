import Image from 'next/image'

export default function SectionTitle({Title, arrow}) {
  return (
    <div>
      <div className='flex my-3'>
        <h3 className='font-bold mb-3 mr-5 pt-2 text-blue-400 '>{Title} </h3>
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
    </div>
  )
}
