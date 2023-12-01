import './css/index.css'
import './css/App.css'
import './css/ProfileCard.css'
import './css/Profile.css'
import './css/ButtonAdd.css'
import './css/EventCard.css'
import profile_pic from './img/profile-picture.png'
import ButtonAdd from './components/ButtonAdd'

function App() {

  return (
    <>

<div className="App__contents">
          <main className="Profile">
            <section className="ProfileCard">
              <img
                className="ProfileCard__image"
                src={profile_pic}
                alt="Your Profile Card"
              />
              <div className="ProfileCard__details">
                <h2 className="ProfileCard__details__name">Estelito Buenavista</h2>
                <div className="ProfileCard__details__id">20102503</div>
                <div className="ProfileCard__details__course">
                  BS Computer Science 1
                </div>
                <a href="login.html">
                  <ButtonAdd link = '/login' text = "Logout"/>
                </a>
              </div>
              <div className="ProfileCard__points">
                <div className="ProfileCard__points__number">12</div>
                <div className="ProfileCard__points__subheading">CES Points</div>
              </div>
            </section>
            <h1 className="Profile__heading">Events Joined</h1>
            <section className="Profile__events">
              <a href="event.html">
              <article className="EventCard">
                <h3 className="EventCard__title">Spring Cleanup Day</h3>
                <div className="EventCard__date EventCard__detail">
                  <svg
                    className="EventCard__detail__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>calendar-check</title>
                    <path
                      fill="currentColor"
                      d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"
                    ></path></svg>May 14, 2023
                </div>
                <div className="EventCard__address EventCard__detail">
                  <svg
                    className="EventCard__detail__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>home-map-marker</title>
                    <path
                      fill="currentColor"
                      d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"
                    ></path></svg>Central Park
                </div>
              </article>
              </a>
              <a href="event.html">
              <article className="EventCard">
                <h3 className="EventCard__title">Community Food Drive</h3>
                <div className="EventCard__date EventCard__detail">
                  <svg
                    className="EventCard__detail__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>calendar-check</title>
                    <path
                      fill="currentColor"
                      d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"
                    ></path></svg>June 25, 2023
                </div>
                <div className="EventCard__address EventCard__detail">
                  <svg
                    className="EventCard__detail__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>home-map-marker</title>
                    <path
                      fill="currentColor"
                      d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"
                    ></path></svg>St. John's Church
                </div>
              </article>
              </a>
              <a href="event.html">
              <article className="EventCard">
                <h3 className="EventCard__title">Charity Walkathon</h3>
                <div className="EventCard__date EventCard__detail">
                  <svg
                    className="EventCard__detail__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>calendar-check</title>
                    <path
                      fill="currentColor"
                      d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"
                    ></path></svg>July 9, 2023
                </div>
                <div className="EventCard__address EventCard__detail">
                  <svg
                    className="EventCard__detail__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>home-map-marker</title>
                    <path
                      fill="currentColor"
                      d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"
                    ></path></svg>Downtown
                </div>
              </article>
              </a>
              
            </section>
          </main>
        </div>

        </>
  )
}

export default App