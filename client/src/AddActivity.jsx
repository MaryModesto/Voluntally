import './css/Add.css'
import './css/index.css'
import './css/App.css'
import './css/ButtonAdd.css'


function App() {

  return (
    <>
      <div className="App__contents">
          <div className="Add">
            <h1>Add Activity</h1>
            <div className="container">
              <form id="activityForm">
                <label for="activityTitle">Title</label>
                <input type="text" id="activityTitle" required />

                <label for="activityDate">Date</label>
                <input type="text" id="activityDate" required />

                <label for="activityOrg">Organization</label>
                <input type="text" id="activityOrg" />

                <label for="activityLink">Registration Link</label>
                <input type="text" id="activityLink" />

                <input
                  className= "ButtonAdd"
                  id="addButton"
                  type="submit"
                  value="Add"
                />
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default App