import { useMutation } from "@tanstack/react-query"
import { postUsers } from "../../hooks/useFetch"

function CreateUser() {
  const addUser = useMutation({
    mutationFn: postUsers
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData)
    addUser.mutate(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input__group">
        <div className="input__field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="input__field">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
      </div>
      <div className="input__group">
        <div className="input__field">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </div>

        <div className="input__field">
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" />
        </div>
      </div>
      <div className="input__group">
        <div className="input__field">
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" name="street" />
        </div>
        <div className="input__field">
          <label htmlFor="suite">Suite/N°:</label>
          <input type="text" id="suite" name="suite" />
        </div>
        <div className="input__field">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" />
        </div>
        <div className="input__field">
          <label htmlFor="zipcode">Zipcode:</label>
          <input type="text" id="zipcode" name="zipcode" />
        </div>
      </div>
      <div className="input__field">
        <label htmlFor="companyName">Company Name:</label>
        <input type="text" id="companyName" name="companyName" />
      </div>
      <div className="input__group">
        <div className="input__field">
          <button type="button">Cancel</button>
          <button type="button">Save</button>
        </div>
      </div>
    </form>
  )
}

export default CreateUser