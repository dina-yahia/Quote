var quotes=[
    
    {
        quote: '"You miss 100% of the shots you dont take."',
        author:"--Wayne Gretzy",
     },
     {
         quote:  '"Its not what happens to you, but how you react to it that matters." ',
         author:"--Epictetus",
      },
      {
         quote: '"The best revenge is massive success." ',
         author:"--Frank Sinatra",
      },
      {
         quote: '"Resentment is like drinking poison and waiting for your enemies to die." ',
         author:"--Nelson Mandela",
      },
      {
         quote: '"Do not take life too seriously. You will not get out alive."',
         author:"--Elbert Hubbard",
      },
]
console.log(quotes);
function qotation(){
  var rose=  Math.floor(Math.random() *quotes.length );
    document.getElementById("quoteOutput").innerHTML=quotes[rose].quote;
    document.getElementById("authorOutput").innerHTML=quotes[rose].author;
};

