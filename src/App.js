import './App.css';
//import JSONFile from './hackernews.json';
import NavBar from './NavBar';
import Hit from './Hit';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export default function App() {
  //const myArray = Object.entries(JSONFile);
  //const hitsObjects = myArray[0][1];    //entries
  //console.log(hitsObjects);
  
  const [stories, setStories] = useState([]);

  const URL = "https://hn.algolia.com/api/v1/search?query=react&tags=story";

  useEffect(() => {     //! console.log() schneller als langsame Hooks
    fetch(URL)
    .then(response => response.json())
    .then(json => setStories(json.hits))
    .catch(error => console.log(error));
  }, []);

  console.log("stories.length: ", stories.length);
  stories.forEach((story) => console.log(story));



  return (
    <div className="App">
      <NavBar />
      {/*hitsObjects.map((hit, index) => <Hit rank={index+1} url={hit.url} title={hit.title} author={hit.author} points={hit.points} numComments={hit.num_comments}/>)*/}
      {stories.map((story, index) => <Hit rank={index+1} url={story.url} title={story.title} author={story.author} points={story.points} numComments={story.num_comments}/>)}

      <Footer />
    </div>
  );
}


