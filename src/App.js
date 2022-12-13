import './App.css';
import JSONFile from './hackernews.json';
import NavBar from './NavBar';
import Hit from './Hit';
import Footer from './Footer';

export default function App() {
  const myArray = Object.entries(JSONFile);
  const hitsObjects = myArray[0][1];    //entries
  //console.log(hitsObjects);
  
  return (
    <div className="App">
      <NavBar />
      {hitsObjects.map(hit => <Hit url={hit.url} title={hit.title} author={hit.author} points={hit.points} numComments={hit.num_comments}/>)}
      <Footer />
    </div>
  );
}


