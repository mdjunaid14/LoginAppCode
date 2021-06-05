const TableData = ({ user }) => {
  return (
    <tr className='padding-10'>
      <td className='padding-10'>{user.id}</td>
      <td className='padding-10'>{user.name}</td>
      <td className='padding-10'>{user.age}</td>
      <td className='padding-10'>{user.gender}</td>
      <td className='padding-10'>{user.email}</td>
      <td className='padding-10'>{user.phoneNo}</td>
    </tr>
  )
}

export default TableData;
