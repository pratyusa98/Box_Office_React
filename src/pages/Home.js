import React,{useState} from 'react'
import ActorGrid from '../components/actor/ActorGrid'
import MainPagelayout from '../components/MainPagelayout'
import ShowGrid from '../components/show/ShowGrid'
import {apiGet} from '../misc/config'
import { useLastQuery } from '../misc/Custom-hooks'
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.Styled'

const Home = () => {

    const [input, setInput] = useLastQuery();
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

  

    const renderResults = () =>{
        if (results && results.length === 0){
            return <div>No Result</div>
        }

        if (results && results.length > 0){

            return results[0].show ?  <ShowGrid data={results} />  : <ActorGrid data={results} /> 
          
         }

        return null;
    }



 


    return (
        <MainPagelayout>
           <SearchInput type="text" placeholder="Search For Something" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
           
           <RadioInputsWrapper>
               <div>
               <label htmlFor='shows-search'>
                   Shows
                   <input id='shows-search' type='radio' value="shows" checked={isShowSearch} onChange={onRadioChange} />
               </label>
               </div>
               <div>
               <label htmlFor='actor-search'>
                   Actor
                   <input id='actor-search' type='radio' value="people" checked={!isShowSearch} onChange={onRadioChange} />
               </label>
               </div>
           </RadioInputsWrapper>
           
           <SearchButtonWrapper>
           <button type="button" onClick={onSearch}>Search</button>
           </SearchButtonWrapper>
           {renderResults()}
        </MainPagelayout>
    )
}

export default Home
