import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import toast, { Toaster } from 'react-hot-toast'
import { createUser } from "../../hooks/useFetch"
import { userSchema } from "../../utils/validation"

function CreateUser({ create, closeModal }) {
  const [isValid, setIsValid] = useState('pending')
  const addUser = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      closeModal
      toast.success('Successfully created :)')
    },
    onError: () => {
      toast.error('Something gone wrong :(')
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData)
    const userObject = {
      name: user.name,
      username: user.username,
      email: user.email,
      address: {
        street: user.street,
        suite: user.suite,
        city: user.city,
        zipcode: user.zipcode,
        geo: {
          lat: "",
          lng: ""
        }
      },
      phone: user.phone,
      website: user.website,
      company: {
        name: user.companyName,
        catchPhrase: user.catchPhrase,
        bs: user.bs
      }
    }
    const formIsValid = await userSchema.isValid(userObject)
    console.log(isValid)
    if(formIsValid === true) {
      setIsValid(true)
      toast.success('Successfully created :)')
    } else {
      setIsValid(false)
      toast.error('Something gone wrong :(')
    }
    // Can't POST for CORS issue, so...
    // addUser.mutate(userObject)
  }

  return (
    <div className={`modal ${create ? 'active' : ''}`}>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="modal__content">
        <form onSubmit={handleSubmit}>
          <div className="input__group">
            <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
          </div>
          <div className="input__group">
            <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" name="phone" />
            </div>
          </div>
          <div className="input__group">
            <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
              <label htmlFor="street">Street:</label>
              <input type="text" id="street" name="street" />
            </div>
            <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
              <label htmlFor="suite">Suite/N°:</label>
              <input type="text" id="suite" name="suite" />
            </div>
            <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" />
            </div>
            <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
              <label htmlFor="zipcode">Zipcode:</label>
              <input type="text" id="zipcode" name="zipcode" />
            </div>
          </div>
          <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
            <label htmlFor="website">Website:</label>
            <input type="text" id="website" name="website" />
          </div>
          <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" id="companyName" name="companyName" />
          </div>
          <div className="input__group">
            <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
              <label htmlFor="catchPhrase">Catch Phrase:</label>
              <input type="text" id="catchPhrase" name="catchPhrase" />
            </div>
            <div className={`input__field ${isValid ? 'valid' : 'error'}`}>
              <label htmlFor="bs">BS:</label>
              <input type="text" id="bs" name="bs" />
            </div>
          </div>
          <div className="input__group">
            <div className="input__field actions">
              <button 
                type="button"
                className="btn-danger"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="btn-success"
              >
                  Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser