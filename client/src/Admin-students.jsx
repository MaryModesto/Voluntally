import './css/index.css'
import './css/App.css'
import './css/Admin.css'
import './css/ButtonAdd.css'
import './css/ButtonDropdown.css'
import './css/Table.css'
import './css/PointsButton.css'
import './css/StudentsView.css'
import ButtonAdd from './components/ButtonAdd'
import ButtonDropdown from './components/ButtonDropdown'
import StudTab from './components/StudTab'
import ActTab from './components/ActTab'

function App() {

  return (
    <>
      <div className="App__contents">
          <main className="Admin">
            <div className="Admin__nav">
            <StudTab status = " active"/><ActTab/>
            </div>
            
            <div className="StudentsView">
              <h1 className="StudentsView__heading">Students</h1>
              <div className="StudentsView__menu">
                <ButtonAdd link = "/AddStudent" text="Add Student"/>
                <ButtonDropdown text = "Sort By"/>
                <ButtonDropdown text = "Filter"/>
              </div>

              <table id="studentsTable" className="Table">
                <thead>
                  <tr>
                    <th className="Table__header">ID</th>
                    <th className="Table__header">Name</th>
                    <th className="Table__header">Program</th>
                    <th className="Table__header">Year</th>
                    <th className="Table__header">Department</th>
                    <th className="Table__header">Points</th>
                  </tr>
                </thead>
                <tbody id="studentsTableBody">
                  {/* <!-- Existing and dynamically populated student records will go here --> */}
                </tbody>
              </table>
              
            </div>
          </main>
        </div>
    </>
  )
}

export default App