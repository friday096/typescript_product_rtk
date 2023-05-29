import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {MdDeleteForever} from "react-icons/all.js";
import {removeUser} from "../store/slices/UserSlice";


const DisplayUsers = () => {

    const dispatch = useDispatch()
    const data = useSelector((store)=>{
        return store.users
})

const deleteUser = (id) =>{
    dispatch(removeUser(id))
}

    console.log('data', data)
  return (
    <Wrapper>
        {
            data && data.length > 0 ? data.map((user, id)=>{
                return <li key={id}>
                    {user}
                    <button className=" btn-delete" onClick={() => deleteUser(id)}>
                         <MdDeleteForever className="delete-icon"/>
                    </button>
                </li>
            })
            
            
            :null
        }
    </Wrapper>
  )
}
const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`
export default DisplayUsers
