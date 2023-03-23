import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Viewmovie = () => {
    var[movie,setMovie]=useState({
        Moviename:"",
        Director:"",
        Language:"",
        Genere:"",
        Release Year:""
          
    })
    const handleChange=(e)=>{
        const{name,value}=<e className="target">
            setMovie({...movie,[name]:value})
            console.log(movie)
                console.log("Button clicked")
            }                
                
        </e>
  return (
    <div>
        <Typography variant='h6'>Add movies detials </Typography><br></br>
        <TextField label="Moviename" variant='outlined' name='year' value={movie.name}onChange={handleChange}></TextField><br></br>
        <TextField label="director" variant='outlined' name='director' value={movie.director}onChange={handleChange}></TextField><br></br>
        <TextField label="language" variant='outlined' name='language' value={movie.language}onChange={handleChange}></TextField><br></br>
        <TextField label="genere" variant='outlined' name='genere' value={movie.genere}onChange={handleChange}></TextField><br></br>
        <TextField label="releaseyear" variant='outlined' name='releaseyear' value={movie.realeaseyear}onChange={handleChange}></TextField><br></br>
        <Button variant='contained' onClick={savedata}>submit</Button>
          </div>
  )
}

export default Viewmovie