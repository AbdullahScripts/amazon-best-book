import React from "react";
// Array imported
import { books } from "./books";
// Book Component Imported
import Book from "./Book";

const App = () => {

// const[value1,setValue1]=useState('')

  const inlineHeadingStyles = {
    color: "#c35600",
  };

const handleChange=(e)=>{

const {value}=e.target

console.log(value)

// setValue1(value)

};

const handleSubmit=(e)=>{
e.preventDefault()

// const {name,value}=e.target
// console.log(value)
// alert(`you search for ${value} in ${name} field`)

alert('thank you')

};



  return (
    <>
      <h1 style={inlineHeadingStyles}>amazon best sellers</h1>

     <div className="form">
     <form onSubmit={handleSubmit}>
        <input type="text" name="search-book" onChange={handleChange} />
        <button onClick={handleSubmit}>need Book</button>
      </form>
     </div>

      <section className="booklist">
        {books.map((book, i) => {
          return <Book {...book} key={book.id} number={i} />;
        })}
      </section>
    </>
  );
};

export default App;
