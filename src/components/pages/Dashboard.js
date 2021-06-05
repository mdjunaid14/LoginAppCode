import { React, useEffect } from 'react'
import TableData from '../table/TableData'
import TableHeading from '../table/TableHeading'
import { fetchUsers } from '../../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'

const Dashboard = ({ toggle }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const store = useSelector(state => state.users)
  // console.log(store.users);

  return (
    <div>
      <div className="center padding-10" style={{border: "none"}} >
        <br />
        <button className='button' onClick={toggle}>Logout</button>
      </div>
      <div className='center padding-60' >
        <table className='table'>
          <thead>
            <TableHeading />
          </thead>
          <tbody>
            {store.users.map((user, index) => (
              <TableData key={index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard;
