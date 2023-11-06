"use client"                     // We can use it because we can not use useState in server side
import { useState } from 'react';
export default function Home() {
  const [file, setFile] = useState();
  const onSubmit=async(e)=>{
    e.preventDefault();
    

  }
  return (
    <main>
      <center><h1>Check File Upload</h1>
      <br/>
        <form>
          <input 
            type="file"
            name="file" 
            onChange={(e)=>setFile(e.target.files?.[0])} 
          />
          <button type="submit">Upload</button>
        </form>
        </center>
    </main>
  )
}
