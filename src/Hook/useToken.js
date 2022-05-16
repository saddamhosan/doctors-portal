import { useEffect, useState } from "react"

const useToken=(user)=>{
const [token,setToken]=useState('')
useEffect(()=>{
const email=user?.user?.email
const currentUser={email:email}
if(email){
     fetch(`https://infinite-oasis-14663.herokuapp.com/user/${email}`,{
         method:'PUT',
         headers:{'content-type':'application/json'},
         body:JSON.stringify(currentUser)
     }).then(res=>res.json()).then(data=>{
         localStorage.setItem('Token',data.token)
         setToken(data.token)
     })
}
},[user])
return [token]
}
export default useToken