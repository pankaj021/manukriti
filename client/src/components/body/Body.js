import React from 'react';
import './Body.css'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state ={
            conversation: [
                {
                    ques: "asdaD4",
                    rep: "sadasdasd sdfead4"
                },
                {
                    ques: "asdaD3",
                    rep: "sadasdasd sdfead3"
                },
                {
                    ques: "asdaD2",
                    rep: "sadasdasd sdfead2"
                },
                {
                    ques: "asdaD1",
                    rep: "sadasdasd sdfead1"
                }               
            ]
        } 
        this.getTheConversation = this.getTheConversation.bind(this);
    }

    getTheConversation(conversation, index){
        return this.state.conversation.map((val, i) => {
            return(
                <div className='convrsSet' key={i}>
                    <div className='ans chat clear float-rt text-lt'>{val.rep}</div>
                    <div className='ques chat clear float-lt text-lt'>{val.ques}</div>
                </div>       
            )
        })
    }

    render(){
        return(
            <div className='content-wrp full-ht'>
                <div className='content'>{this.getTheConversation()}</div>
                <div className='input-wrp'>
                    <textarea type='text' className='input-usr'></textarea>                                        
                </div>
            </div>
        )
    }
}