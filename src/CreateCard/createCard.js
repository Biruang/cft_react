import React, {Component} from 'react'
import style from './createCardStyle'

class CreateCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: this.props.login,
            title: null,
            description: null,
            coins: null
        }
    }

    onAddCardSubmit = event =>{
        event.preventDefault()
        var url = 'http://104.211.23.214:1488/create_task?customer='+ this.state.login +'&title=' + this.state.title +'&description=' + this.state.description + '&coins=' + this.state.coins
        var xhr = new XMLHttpRequest();
        console.log(url)
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => {
            var json = JSON.parse(xhr.responseText)
            console.log(json)
            this.props.setDisplay('list')
        }
    }

    onDescritionChange() {

    }

    onTitleChange = event => {
        this.setState({
            title: event.target.value
        })
    }

    onDescrChange = event => {
        this.setState({
            description: event.target.value
        })
    }

    onCoinsChange = event => {
        this.setState({
            coins: event.target.value
        })
    }

    render() {
        return (
        <div className="container" style={style.Container}>
            <div className="row"></div>
            <form className="rounded border p-4 m-3 shadow-lg" onSubmit={this.onAddCardSubmit}> 
                <div className="form-group">
                    <h2>Please describe problem</h2>
                </div>
                <div className="form-group">
                <label>Title:</label>
                <input className="form-control shadow-sm"  type="text" placeholder="Title" onChange={this.onTitleChange} required />
                </div>
                <div className="">
                    <label>Description:</label>
                    <textarea className="form-control text-wrap shadow-sm" type="text" onChange={this.onDescrChange}  style={style.TextArea}  placeholder="Description"></textarea>
                </div>
                <div className="form-group">
                    <label>Karma:</label>
                    <input className="form-control w-25 shadow-sm" onChange={this.onCoinsChange} type="text" pattern="^[ 0-9]+$"  placeholder="Cost of karma" aria-describedby="helpId"  required/>
                </div>
                <button className="btn btn-primary m-2 w-100 shadow-sm" type="submit">Create</button>
            </form>
        </div>
        )
    }
}

export default CreateCard