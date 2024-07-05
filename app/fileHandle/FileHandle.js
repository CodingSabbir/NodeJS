

import React from 'react'

export default function FileHandle() {
    const fs=require('fs')
    //Async
    // fs.writeFile('./test.text','hello dear', (error)=>{})

    //Sync
    // fs.writeFileSync('test.text','how are you')

    //readFile
    // fs.readFile('./read.txt','utf-8', (err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log(data)
    //     }
    // })

    //Add
    fs.appendFileSync('./read.txt',`i love bangladesh`)

    //Copy
    fs.cpSync('./read.txt','./copy.txt')
 
  return (
    <div>FileHandle</div>
  )
}
