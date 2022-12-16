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
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("react");

  useEffect(() => {     //! console.log() schneller als langsame Hooks
    const URL = `https://hn.algolia.com/api/v1/search?query=${search}&tags=story`;
    fetch(URL)
    .then(response => response.json())
    .then(json => setStories(json.hits))
    .catch(error => console.log(error));
  }, [search]);   //heißt das initial UND in Abh. v. search-Statevar?

  //console.log("stories.length: ", stories.length);
  //stories.forEach((story) => console.log(story));

  /*function handleClick(){
    const userInput = document.getElementById("input-text").value;  //wäre weg bei rerender
    if(userInput){
      setSearch(userInput);
    }
    console.log("TEST FÜR USERINPUT: ", userInput);
    const URL = `https://hn.algolia.com/api/v1/search?query=${search}&tags=story`;
    console.log(URL);
    //fetch stories with userInput:
    fetch(URL)      //DAS HIER LÄUFT NICHT WEGEN NETWORK-ERROR?
    .then(response => response.json())
    .then(json => {console.log(json.hits); setStories(json.hits)})
    .catch(error => console.log(error));
  } */

  /*function handleMore(){
    const save_array = stories;
    const save_page = page;
    setPage(save_page + 1);
    //page is now + 1
    const URL = ``;
  }*/

  return (
    <div className="App">
      <NavBar />
      {/*hitsObjects.map((hit, index) => <Hit rank={index+1} url={hit.url} title={hit.title} author={hit.author} points={hit.points} numComments={hit.num_comments}/>)*/}
      {stories.map((story, index) => <Hit rank={index+1} url={story.url} title={story.title} author={story.author} points={story.points} numComments={story.num_comments}/>)}

      {/*<button onClick={handleMore}>more</button>*/}
      <Footer setSearch={setSearch} search={search}/>
    </div>
  );
}


