import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../hooks/useFetch'
import { FaPencil, FaEye, FaTrashCan, FaPlus } from 'react-icons/fa6'
import Loading from './UI/Loading'
import ModalUser from './UI/ModalUser'
import { useState } from 'react'

function Users() {
  const { status, data } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })
  if (status === 'success') {
    console.log(data)
  }
  const [modal, setModal] = useState(false)
  const [canEdit, setCanEdit] = useState(false)
  const [sendUser, setSendUser] = useState('')

  const onModal = (e, user) => {
    e.preventDefault()
    document.body.classList.add('modal-open')
    setModal(true)
    setSendUser({...user})
  }
  const closeModal = (e) => {
    e.preventDefault()
    document.body.classList.remove('modal-open')
    setModal(false)
  }
  const goToEdit = (e) => {
    e.preventDefault()
    setCanEdit(true)
  }
  const saveModal = (e) => {
    e.preventDefault()
    setModal(false)
  }

  return (
    <div className="users">
      <div className="users__actions">
        <button type="button">
          <FaPlus /> Add User
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Company</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            status === 'pending' && <Loading />
          }
          {
            status === 'error' && 
            <p>No data available</p>
          }
          {
            status === 'success' &&
            data.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.street}, {user.address.suite}</td>
                <td>{user.company.name}</td>
                <td>
                  <div className="actions">
                    <button 
                      type="button"
                      onClick={e => onModal(e, user)}
                    >
                      <FaEye />
                    </button>
                    <button type="button">
                      <FaTrashCan />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {
        modal ? 
        <ModalUser 
          user={sendUser} 
          modal={modal}
          canEdit={canEdit}
          closeModal={closeModal}
          goToEdit={goToEdit}
          saveModal={saveModal}
        /> : null
      }
    </div>
  )
}

export default Users