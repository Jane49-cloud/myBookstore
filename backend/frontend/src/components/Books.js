import React, {useState, useEffect} from 'react'

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
    const { title, author, genre, id, image_url, buy_url, pages } = book
    return(
      <div className="book_card" key={id}>
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
            <button className="btn">
              <a href={buy_url}>Purchase</a>
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
