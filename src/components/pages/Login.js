import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchAdmin } from '../../actions/adminActions'


const Login = ({ toggle }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();

    if(!username || !password) {
      alert('Please fill all fields in the form')
      return
    }

    authLogin(username, password)

    setUsername('')
    setPassword('')
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAdmin())
  }, [dispatch])

  const store = useSelector(state => state.admin)
  // console.log(store);

  const authLogin = (username, password) => {
    for (let each of store.admin) {
      if (each.username === username && each.password === password) {
        toggle()
      } else {
        alert('Not a valid user')
      }
    }
  }

  return (
    <div className='center padding-90' >
      <form className='input-form' onSubmit={onSubmit}>
        <div>
          <label className='input-labels'>Username</label>
          <br />
          <input
          className='inputs'
          type="email"
          placeholder="Enter email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className='input-labels'>Password</label>
          <br />
          <input
          className='inputs'
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div className='center'>
          <input className='button' type="submit" value='Login' />
        </div>
      </form>
    </div>
  )
}

export default Login;
