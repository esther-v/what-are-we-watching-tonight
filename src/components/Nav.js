import { useState } from "react"
import styled from "styled-components"
import { fetchSearch } from "../actions/moviesActions"
import { useDispatch } from "react-redux"

const Nav = () => {
    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState("")
    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(textInput))
        setTextInput("")
    }

    return(
        <StyledNav>
            <div className='logo'>What are we watching tonight</div>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" placeholder="search for a movie"/>
                <button onClick={submitSearch} type="submit">Go</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    background: black;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    
    .logo{
        font-size: 30px;
        color: white;
        transform : rotate(-3deg);
        cursor: pointer;
    }
    form{
        margin-top: 1rem;
        input, button{
            border: none;
            outline: none;
            padding: 0.5rem 1rem;
            font-family: inherit;
        }
        button{
            background: #c7ecee;
            margin-left: 5px;
            &:hover{
                background: #95afc0;
            }
        }
    }

`

export default Nav