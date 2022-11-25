import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

function UserSearch() {
  const [text, setText] = useState('')

  const { users, searchUsers, clearUsers } = useContext(GithubContext)
  const {setAlert} = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Please enter something','error')
    } else {
      searchUsers(text)

      setText('')
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
      <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div class="input-group">
              <input 
                type="text" 
                className="w-full bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button type="submit" className="w-24 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className='btn btn-ghost btn-lg'>Clear</button>
        </div>
      )}
    </div>
  )
}

export default UserSearch