import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

const API_KEY="AIzaSyC2w2P6vn8mEWaIHKLFbsR5SiKRtQUzU4M";


class App extends Component  {
    constructor(props){
        super(props);

        this.state={videos:[]};

        //AJAX call
        YTSearch(
            {key: API_KEY, term: 'surfboard'}
            ,(videos)=>{this.setState({ videos })}
        );
    }
    render(){
        return(
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('container'));