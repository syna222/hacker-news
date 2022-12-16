import './App.css';
import JSONFile from './hackernews.json';
import NavBar from './NavBar';
import Hit from './Hit';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export default function App() {
  const myArray = Object.entries(JSONFile);
  const hitsObjects = myArray[0][1];    //entries
  //console.log(hitsObjects);
  
  const [stories, setStories] = useState([]);

  const URL = "https://hn.algolia.com/api/v1/search?query=react&tags=story";

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
  });





  return (
    <div className="App">
      <NavBar />
      {hitsObjects.map((hit, index) => <Hit rank={index+1} url={hit.url} title={hit.title} author={hit.author} points={hit.points} numComments={hit.num_comments}/>)}


      <Footer />
    </div>
  );
}


