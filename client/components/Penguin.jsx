import React from 'react'
import request from 'superagent';

class Penguin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {
               name: '',
                spotlight: '',
            }
        }
        this.getAuthor = this.getAuthor.bind(this)
        this.getAuthor()
    }
    getAuthor(){
        return request.get('/api/penguin')
        .then(result => {
            
            this.setState({
               author:{
                   name:result.body.authorName,
                   spotlight: result.body.spotlight
               }
            })
        })
    }
    render() {
        console.log(this.state.author)
        return(
            <React.Fragment>
                <div className='author'>
                    <button onClick={() => this.getAuthor()}>
                        Quentin Blake
                    </button>
                    <p>details to go here</p>
                    <p>{this.state.author.name}</p>
                    <p>{this.state.author.spotlight}</p>
                </div>
            </React.Fragment>
        )
    }
    
}
export default Penguin