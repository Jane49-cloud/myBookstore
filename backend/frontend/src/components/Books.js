import React, {useState, useEffect} from 'react'
import Axios from 'axios'

export default function Books() {
    const [books, setBooks] = useState([])


    
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/books")
           .then(res => res.json())
           .then(data => setBooks(data))
           .catch((err) => console.error(err))
           console.log(books)
        
    }, [])


  return (

<section>
  <div className='book_section'>
{
  books.map((book) =>{
    const { title, author, genre, _id, image_url, buy_url, pages } = book
    return(
      <div className="book_card" key={_id}>
        <div className="image">
        <img src={image_url} alt={title} />
        </div>
        <hr />
        <div className="details">
          <div className="title">{title}</div>
          <div className="price">pages: {pages}</div>
          </div>
         <div className="more">
           <div className="author">
       <h4> Author:  {author}</h4>
         </div>
         <div className="description">
           <p> Genre: {genre} Collection</p> 
            </div>
            <button className="btn btn-primary">
              <a href={buy_url}>Purchase</a>
            </button>
            <button className="btn btn-danger"
            onClick={
              async()=>{
                const remove = await Axios.delete(`http://localhost:5000/api/v1/books/${_id}`)
                const newBooks = books.filter((book) => book.id !== _id)
                 setBooks(newBooks)
                   }
            }
            >
          Remove
            </button>
          </div>

      </div>
    )
  })
}
    
  </div>
</section>
  )
}
