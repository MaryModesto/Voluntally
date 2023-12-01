import './css/Add.css'
import './css/index.css'
import './css/App.css'
import './css/ButtonAdd.css'


function App() {

  return (
    <>
      <div class="App__contents">
          <div class="Add">
            <h1>Add Student</h1>
            <div class="container">
              <form id="newStudent">
                <label for="ID">ID Number</label>
                <input id="FormIDnumber" type="text" required />
                <label for="name">Name</label>
                <input id="FormFullName" type="text" required />
                <div class="flex">
                  <div class="dropdowns">
                    Course
                    <select id="FormCourse" class="ButtonDropdown">
                      <option value="Computer Science">BSCS</option>
                      <option value="Information Technology">BSIT</option>
                      <option value="Information Systems">BSIS</option>
                    </select>
                  </div>
                  <div class="dropdowns">
                    Year
                    <select id="FormYear" class="ButtonDropdown">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
                <input
                  class="ButtonAdd"
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