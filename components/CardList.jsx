import Image from 'next/image'
import Card from './common/Card'
import SectionTitle from './common/SectionTitle'

export default function CardList({Title, arrow, data, filter}) {
  return (
    <div className=' border-b mb-5'>
      <SectionTitle Title={Title} arrow={arrow} filter={filter} />
      <Card data={data} />
    </div>
  )
}
