const express=require('express')
const tem=express()
const path=require('path')
const port=8000
tem.use(express.static('./template'))
tem.get('/Build',(req,res)=>{
    res.sendFile(path.resolve(__dirname,('./template/index.html')))
})
tem.listen(port,()=>{
console.log(`Server is running on the port ${port}`);
})