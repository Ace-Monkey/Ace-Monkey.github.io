//import profileimg from './images/profile-placeholder.png'
import caveimg from './images/cave-background.jpg'
import data from './data'

import Asidebar from './components/Asidebar'
import Main from './components/Main'

console.log(typeof data)
console.dir(data)

//const eportfolio = JSON.parse(data)
//console.log(eportfolio)

function App() {
  return (
    <div className="App">
      <Asidebar info={data}  />
      <Main info={data} heroimg={caveimg} />
    </div>
  );
}

export default App;
