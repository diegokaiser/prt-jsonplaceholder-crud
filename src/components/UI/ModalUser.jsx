function ModalUser({ user, modal, canEdit, closeModal, goToEdit, saveModal }) {

  return (
    <div className={`modal ${modal ? 'active' : ''}`}>
      <div className="modal__content">
        <div className="input__group">
          <div className="input__field">
            <label htmlFor="name">Name:</label>
            {
              canEdit ?
              <input type="text" id="name" name="name" value={user.name} /> :
              <input type="text" id="name" name="name" value={user.name} readOnly />
            }
          </div>
          <div className="input__field">
            <label htmlFor="username">Username:</label>
            {
              canEdit ?
              <input type="text" id="username" name="username" value={user.username} /> :
              <input type="text" id="username" name="username" value={user.username} readOnly />
            }
          </div>
        </div>
        <div className="input__group">
          <div className="input__field">
            <label htmlFor="email">Email:</label>
            {
              canEdit ?
              <input type="text" id="email" name="email" value={user.email} /> :
              <input type="text" id="email" name="email" value={user.email} readOnly />
            }
          </div>

          <div className="input__field">
            <label htmlFor="phone">Phone:</label>
            {
              canEdit ?
              <input type="text" id="phone" name="phone" value={user.phone} /> :
              <input type="text" id="phone" name="phone" value={user.phone} readOnly />
            }
          </div>
        </div>
        <div className="input__group">
          <div className="input__field">
            <label htmlFor="street">Street:</label>
            {
              canEdit ?
              <input type="text" id="street" name="street" value={user.address.street} /> :
              <input type="text" id="street" name="street" value={user.address.street} readOnly />
            }
          </div>
          <div className="input__field">
            <label htmlFor="suite">Suite/N°:</label>
            {
              canEdit ?
              <input type="text" id="suite" name="suite" value={user.address.suite} /> :
              <input type="text" id="suite" name="suite" value={user.address.suite} readOnly />
            }
          </div>
          <div className="input__field">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={user.address.city} readOnly />
          </div>
          <div className="input__field">
            <label htmlFor="zipcode">Zipcode:</label>
            <input type="text" id="zipcode" name="zipcode" value={user.address.zipcode} readOnly />
          </div>
        </div>
        <div className="input__field">
          <label htmlFor="companyName">Company Name:</label>
          {
            canEdit ?
            <input type="text" id="companyName" name="companyName" value={user.company.name} /> :
            <input type="text" id="companyName" name="companyName" value={user.company.name} readOnly />
          }
        </div>
        <div className="input__group">
          <div className="input__field actions">
            <button 
              type="button" 
              className="btn-danger"
              onClick={closeModal}
            >
              {canEdit ? 'Cancel' : 'Close'}
            </button>
            {
              canEdit ?
              <button 
                type="button" 
                className="btn-success"
                onClick={saveModal}
              >
                Save
              </button> :
              <button 
                type="button" 
                className="btn-primary"
                onClick={goToEdit}
              >
                Edit
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalUser