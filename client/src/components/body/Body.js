import React from 'react';
import './Body.css'
import axios from 'axios'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state ={
            conversation: []
        } 
        this.getTheConversation = this.getTheConversation.bind(this);
        this.enterKeyPress = this.enterKeyPress.bind(this);
    }

    getTheConversation(conversation, index){
        return this.state.conversation.map((val, i) => {
            return(
                <div className='convrsSet' key={i}>
                    {val.ques ? <div className='ques chat clear float-lt text-lt'>{val.ques}</div> : ""}
                    {val.rep ? <div className='ans chat clear float-rt text-lt'>{val.rep}</div> : ""}
                </div>       
            )
        })
    }

    enterKeyPress(event){
        if(event.keyCode === 13){
            var userInput = document.getElementById('usr-ip').value.trim();
            var temp = [{
                ques: userInput,
                rep: ""
            }]
            console.log("=>>>>>>>>>userinput: ", userInput, temp);    
            axios.post('query', {
               userInput 
            })
            .then((response) => {
                console.log("=>>>>>>>>>res: ", response);
                temp[0].rep = response.data.rep;
                this.setState({
                    conversation: temp.concat(this.state.conversation)
                })
                document.getElementById('usr-ip').value = "";
                userInput.focus();  
            })
            .catch((err) => {
                console.log("=>>>>>>>>>", err);
            })
        }
    }

    render(){
        return(
            <div className='content-wrp full-ht'>
                <div className='content'>{this.getTheConversation()}</div>
                <div className='input-wrp'>
                    <input type='text' id='usr-ip' placeholder='Start typing here !!' autoFocus className='input-usr' onKeyUp={this.enterKeyPress} />                                        
                </div>
            </div>
        )
    }
}