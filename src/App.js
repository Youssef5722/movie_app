import logo from './logo.svg';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Movies from './Components/Movies';
import TV from './Components/TV';
import Person from './Components/Person';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import MoviesDeatils from './Components/MoviesDeatils';





function App() {
  return (
    <>

<Navbar/>
    <div className='container'>
   
<Routes>
<Route path='movie_app' element={<Home/>}/>
  
  <Route path='movie_app/home' element={<Home/>}/>
  <Route path='movie_app/movies' element={<Movies/>}/>
  <Route path='movie_app/tvshow' element={<TV/>}/>
  <Route path='movie_app/person' element={<Person/>}/>
  <Route path='movie_app/movieDetails/:id' element={<MoviesDeatils/>}/>
  <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>

   
    
    </>
  );
}

export default App;
