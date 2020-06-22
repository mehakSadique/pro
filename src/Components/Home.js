import React,  { Component } from "react";
import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            topAnimes: [],
        };
    };

    componentDidMount(){
        axios.get(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
        .then((res)=>{
            const topAni = res.data.top;
            console.log(topAni);
            this.setState({topAnimes:topAni})
        })
        .catch((err)=> console.log(err));
    }

    render(){
       let animeList;
       if(this.state.topAnimes.length===0){
           animeList=<></>
       }
       else{
            animeList=(
               <div>
                   <ol>
                    {this.state.topAnimes.map((anime) => 
                        <li key= {anime.rank}> 
                        {anime.title} 
                        <img src={anime.image_url} alt={anime.title}/>
                         </li>)}
                   </ol>
               </div>
            )
       }

       return(
           <>
           {animeList}
           </>
       )
    }

};

export default Home;