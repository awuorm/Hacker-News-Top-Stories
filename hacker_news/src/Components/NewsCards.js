import React, {useState, useEffect} from 'react';
import axios from "axios";


function NewsCards() {
const [newsArray, setNewsArray] = useState([]);
const [fetchedArticle, setFetchedArticle] = useState([]);

useEffect(() => {
    const fetchArray = () => {
        axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(response => {
            setNewsArray(response.data);
            const fetchedData = response.data;
                fetchedData.map((article, index) => {
        if (index < 10) {
            console.log(article, index)
            setFetchedArticle(`https://hacker-news.firebaseio.com/v0/item/${article}.json`);
        }   
    })
        }
            
            )
        .catch(error =>
            alert(error.message))
    }
    fetchArray();
}, [])

 console.log(fetchedArticle);



   



  return (
    <div>
      NewsCards
    </div>
  );
}

export default NewsCards;