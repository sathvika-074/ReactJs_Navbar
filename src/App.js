import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./AboutUs";
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./Services";
import { Events, EventsOne, EventsTwo } from "./Events";
import Contact from "./ContactUs";
import Support from "./Support";
function App() {
return (
	<Router>
	<Sidebar />
	<Routes>
		<Route path='/about-us' element={<AboutUs/>} />
		<Route path='/about-us/aim' element={<OurAim/>} />
		<Route path='/about-us/vision' element={<OurVision/>} />
		<Route path='/services' element={<Services/>} />
		<Route path='/services/services1' element={<ServicesOne/>} />
		<Route path='/services/services2' element={<ServicesTwo/>} />
		<Route path='/services/services3' element={<ServicesThree/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/events' element={<Events/>} />
		<Route path='/events/events1' element={<EventsOne/>} />
		<Route path='/events/events2' element={<EventsTwo/>} />
		<Route path='/support' element={<Support/>} />
	</Routes>
	</Router>
);
}

export default App;
