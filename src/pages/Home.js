import React,{useState} from 'react'
import MainPagelayout from '../components/MainPagelayout'

const Home = () => {

    const [input,setInput] = useState('')

    const onSearch = () => {

        // https://api.tvmaze.com/search/shows?q=girls

        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).
        then(r => r.json()).
        then(result => {
            console.log(result)
        })

    }

    const onInputChange = (ev) =>{
        setInput(ev.target.value)
    }


    const onKeyDown = (ev) => {
        if (ev.keyCode === 13){
            onSearch()
        }
    }

 


    return (
        <MainPagelayout>
           <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
           <button type="button" onClick={onSearch}>Search</button>
        </MainPagelayout>
    )
}

export default Home
