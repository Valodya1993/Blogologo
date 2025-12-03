import './App.css'
import { ThemeProvider } from './context/themeContext/theme-context';
import { Main } from './pages/MainPage/Main'
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';

export const posts = [
  {
    "id": '1',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  },
  {
    "id": '2',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  },
  {
    "id": '3',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  },
  {
    "id": '4',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  },
  {
    "id": '5',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  },
  {
    "id": '6',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  },
  {
    "id": '7',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  },
  {
    "id": '8',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  }, {
    "id": '9',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  }, {
    "id": '10',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  }, {
    "id": '11',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  },
  {
    "id": '12',
    "image": "https://spaceflightnow.com/wp-content/uploads/2023/01/20230120eva.jpg",
    "text": "Japanese astronaut Koichi Wakata and NASA astronaut Nicole Mann suited up and floated outside the International Space Station Friday for a spacewalk to prepare the lab for arrival of another pair of new solar arrays later this year.\nThe astronauts switched their spacesuits to internal battery power at 8: 14 a.m.EST(1314 GMT) Friday to mark the official start of the spacewalk, the first of the year at the space station.They floated out of the Quest airlock to begin gathering tools and headed to the starboard, or right, side of the station’s power truss.\nWakata and Mann completed the installation of a mounting bracket near one of the space station’s eight existing solar arrays, associated with power channel 1B.Work on that task began on a previous spacewalk.Then the astronauts began to work on attaching a mounting frame for another solar array on power channel 1A.\nThe two power channels the astronaut worked on Friday are located on the starboard side of the space station’s solar power truss, which extends the length of a football field.Channel 1B is on the S6 truss section at the far right of the power truss, and Channel 1A is located on the next section inward, called S4.\nThe mounting frames, called modifications kits, will support the attachment of new roll - out solar arrays to be delivered to the space station later this year on a SpaceX Dragon cargo ship.SpaceX has already launched four of the roll- out solar arrays on two previous Dragon resupply missions in June 2021 and in November 2022.",
    "date": "2025-09-16",
    "lesson_num": 1,
    "title": "Astronauts complete spacewalk to prep for new ISS solar arrays",
    "author": 'god of react'
  }
];

function App() {
  return (
    <>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App;
