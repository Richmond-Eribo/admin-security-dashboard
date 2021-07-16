export default function Table({LastLocation, Rows}) {
  return (
    <table className=' text-xs text-center w-full h-48'>
      <thead className='font-black border-b-2 border-gray-700 text-blue-300 '>
        <th>RECRUITER</th>
        <th>RECENT LOGIN</th>
        <th>CURRENT LOCATION</th>
        <th>CITY</th>
        <th>COUNTRY</th>
        <th>DEVICE</th>
        {LastLocation ? (
          <th className='text-red-500'>LAST LOCATION</th>
        ) : (
          <th className='text-red-500'>LAST DEVICE</th>
        )}

        <th>LAST LOGIN</th>
      </thead>
      <tbody>
        {Rows.map(row => (
          <tr key={row.R}>
            <td> {row.R} </td>
            <td>{row.RL} </td>
            <td>{row.CL}</td>
            <td>{row.C} </td>
            <td>{row.CO} </td>
            <td> {row.D} </td>
            <td className='text-red-500'> {row.L} </td>
            <td>{row.RL}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
