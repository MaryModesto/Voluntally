
import './css/index.css'
import './css/App.css'
import './css/Admin.css'
import './css/Table.css'
import './css/ActivitiesView.css'
import './css/PointsButton.css'
import ButtonAdd from './components/ButtonAdd'
import ButtonDropdown from './components/ButtonDropdown'
import StudTab from './components/StudTab'
import ActTab from './components/ActTab'
import { Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <>
      <div className="App__contents">
          <main className="Admin">
            <div className="Admin__nav">
            <StudTab/><ActTab status = " active"/>
            </div>

            <div className="ActivitiesView">
              <h1 className="ActivitiesView__heading">Activities</h1>
              <div className="ActivitiesView__menu">
                <ButtonAdd link = "/AddActivity" text="Create New Activity"/>
                <ButtonDropdown text = "Sort By"/>
                <ButtonDropdown text = "Filter"/>
              </div>

              <table className="Table" id="activitiesTable">
                <thead>
                  <tr>
                    <th className="Table__header">Title</th>
                    <th className="Table__header">Date</th>
                    <th className="Table__header">Organized By</th>
                    <th className="Table__header">Registration</th>
                    <th className="Table__header">Status</th>
                    <th className="Table__header"></th>
                  </tr>
                </thead>
                <tbody id="activitiesTableBody">
                  {/* <!-- Existing and dynamically populated activity records will go here --> */}
                </tbody>
              </table>
                            
              
            </div>
          </main>
        </div>
        <script src='./js/studentScript.js'></script>
    </>
  )
}

export default App