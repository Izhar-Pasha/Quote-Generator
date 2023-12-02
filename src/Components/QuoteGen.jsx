import React, { useState } from 'react'
import "./QuoteGen.css"

export const QuoteGen = () => {

    let quotes = [];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
       return
    }


    const [quote, setQuote] = useState({
        text: "Beautifull peoples are not always good But good peoples are always Beautifull.",
        author: "- Hazrat Ali R.A",
        
    });

    const random = ()=>{
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
        
    }

    // const alert = ()=>{
    //    window.alert();
    // }
    const share = ()=>{
        var message = encodeURIComponent(`${quote.text} - ${quote.author.split(",")[0]}}`);

        var whatsappLink = 'https://wa.me/' +'?text='+" " + message;

        window.open(whatsappLink, '_blank');
    }
   
    loadQuotes();  

  return (
    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div className='article'>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">{quote.author.split(",")[0]}</div>
                <div className="icons">
                <i className="fa-regular fa-circle-right" id='next' onClick={()=>{random(quote.text)}}/>
                <i className="fa-brands fa-whatsapp" id='whatsapp'  onClick={()=>{share()}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
