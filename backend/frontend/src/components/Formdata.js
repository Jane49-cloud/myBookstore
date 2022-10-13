import React, {useState} from 'react'
import Axios from 'axios'

export default function Formdata() {

    const URL = "http://localhost:5000/api/v1/books"

    const [data, setData] = useState(
        { 
        title: '',
        author:'',
        image_url: '',
        description: '',
        genre: '',
    }
   )

function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
        }
        
function submit(e){
        e.preventDefault() 
        Axios.post(URL ,{
        author:data.author,
        title:data.title,
        image_url:data.image_url,
        description:data.description,
        genre:data.genre,
       })
       .then(res=>{
            console.log(res)
        })

    }
  return (
<div>
<form onSubmit={(e)=>submit(e)}>
<input onChange={(e)=>handle(e)}  id="title" value ={data.title} placeholder='Enter book Title' type="text" /> <br />
<input  onChange={(e)=>handle(e)} id="author" value ={data.author}  placeholder='Enter author' type="text" /> <br />
<input  onChange={(e)=>handle(e)} id="image_url" value ={data.image_url}  placeholder='Enter image_url' type="text" /> <br />
<input  onChange={(e)=>handle(e)} id="description" value ={data.description}  placeholder='Enter description' type="text" /> <br />
<input  onChange={(e)=>handle(e)} id="genre" value ={data.genre}  placeholder='Enter genre' type="text" /> <br />
<button>Submit</button>
</form>

    </div>
  )
}
