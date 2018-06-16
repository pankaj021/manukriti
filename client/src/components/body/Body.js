import React from 'react';
import './Body.css'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state ={
            conversation: [
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                },
                {
                    ques: "asdaD",
                    rep: "sadasdasd sdfead"
                }                   
            ]
        } 
        this.getTheConversation = this.getTheConversation.bind(this);
    }

    getTheConversation(conversation, index){
        if(index === -1) return ""
        return(
            <div key={index} className='convrsSetWrap'>
                <div className='convrsSet'>
                    <div className='convrsQues'>{conversation[index].ques}</div>
                    <div className='convrsRep'>{conversation[index].rep}</div>
                </div>
                {this.getTheConversation(conversation, index - 1)}                
            </div>
        )
    }

    render(){
        return(
            <div className='content-wrp full-ht'>
                <div className='content full-ht'>{this.getTheConversation(this.state.conversation, this.state.conversation.length - 1)}</div>
                <div className='input-wrp'>
                    <textarea type='text' className='input-usr'></textarea>                                        
                </div>
            </div>
        )
    }
}