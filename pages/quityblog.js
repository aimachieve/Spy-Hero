import React, {Component} from 'react';
import { FaPlay, FaSearchengin, FaVideo, FaVideoSlash } from 'react-icons/fa';
import InternalMainLayout from '../components/structures/main-page-layout';
import CardData from '../components/tooltips/card_d';




class QuityBlog extends Component{
    
    render(){
        return(<>
            <InternalMainLayout 
                icon1= {<FaPlay />}
                icon2 = {<FaSearchengin /> } 
                title = "video ads search"
                subtitle1="Search Tips"
                titleColor="#44B6AE"
                subtitle2="Reset and Clear Results"
            >
               <CardData />
            </InternalMainLayout>
            <InternalMainLayout 
                icon1= {<FaPlay />}
                icon2 = {<FaSearchengin /> } 
                title = "video ads search"
                subtitle1="Search Tips"
                titleColor="#44B6AE"
                subtitle2="Reset and Clear Results"
            >
                this is me
            </InternalMainLayout>
        </>);
    }
}

export default QuityBlog;