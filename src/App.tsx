import Overview from "./Pages/Overview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Energy from "./Pages/Energy";
import Calendar from "./Pages/Calendar";
import Distances from "./Pages/Distances";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Overview />}/>
        <Route path="/energy" element={<Energy />}/>
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/distances" element={<Distances />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
     </Router>
    
    </div>
  );
}

export default App;
