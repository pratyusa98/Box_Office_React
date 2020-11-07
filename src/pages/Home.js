import React,{useState} from 'react'
import MainPagelayout from '../components/MainPagelayout'
import {apiGet} from '../misc/config'

const Home = () => {

    const [input,setInput] = useState('')
    const [results,setResults] = useState(null)
    const [searchOption,setSearchOption] = useState('shows')

    const isShowSearch = searchOption === 'shows'

    const onSearch = () => {

        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
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

    const onRadioChange = (ev) => {
       setSearchOption(ev.target.value)
    }
    console.log(searchOption)

  

    const renderResults = () =>{
        if (results && results.length === 0){
            return <div>No Result</div>
        }

        if (results && results.length > 0){

            return results[0].show ? results.map(item => ( 
            <div key={item.show.id}>{item.show.name}</div>
            )) : results.map(item => ( 
            <div key={item.person.id}>{item.person.name}</div> 
            ))
          
         }

        return null;
    }



 


    return (
        <MainPagelayout>
           <input type="text" placeholder="Search For Something" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
           
           <div>
               <label htmlFor='shows-search'>
                   Shows
                   <input id='shows-search' type='radio' value="shows" checked={isShowSearch} onChange={onRadioChange} />
               </label>

               <label htmlFor='actor-search'>
                   Actor
                   <input id='actor-search' type='radio' value="people" checked={!isShowSearch} onChange={onRadioChange} />
               </label>
           </div>
           
           
           <button type="button" onClick={onSearch}>Search</button>

           {renderResults()}
        </MainPagelayout>
    )
}

export default Home
