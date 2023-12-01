import './css/index.css'
import './css/App.css'
import './css/Admin.css'
import './css/ProfileCard.css'
import './css/EventCard.css'
import './css/home.css'
import StudTab from './components/StudTab'
import ActTab from './components/ActTab'
import EventCard from './components/EventCard'

function App() {

    return (
      <>
<div className="App__contents">
          <main className="Admin">
            <div className="Admin__nav">
            <StudTab/><ActTab/>
            </div>
            <h1 className="home_heading">Upcoming Events</h1>
            <section className='UpcomingEvents'>
            <EventCard title = "CES Event" date = "September 18, 2023" place="Dumpster"/>
            <EventCard title = "CES Event" date = "September 18, 2023" place="Dumpster"/>
            <EventCard title = "CES Event" date = "September 18, 2023" place="Dumpster"/>
            </section>
          </main>
        </div>
        </>
  )
}

export default App