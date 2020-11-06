import React,{useState} from 'react'
import MainPagelayout from '../components/MainPagelayout'
import {apiGet} from '../misc/config'

const Home = () => {

    const [input,setInput] = useState('')
    const [results,setResults] = useState(null)

    const onSearch = () => {

        apiGet(`/search/shows?q=${input}`).then(result => {
            setResults(result)
        })
        // https://api.tvmaze.com/search/shows?q=girls
     }

    const onInputChange = (ev) =>{
        setInput(ev.target.value)
    }


    const onKeyDown = (ev) => {
        if (ev.keyCode === 13){
            onSearch()
        }
    }

    const renderResults = () =>{
        if (results && results.length === 0){
            return <div>No Result</div>
        }
        if (results && results.length > 0){
            return <div> {results.map( (item)=><div key={item.show.id}>{item.show.name}</div> )} </div>
        }
        return null;
    }

 


    return (
        <MainPagelayout>
           <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
           <button type="button" onClick={onSearch}>Search</button>

           {renderResults()}
        </MainPagelayout>
    )
}

export default Home
