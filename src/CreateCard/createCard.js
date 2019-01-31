import React, {Component} from 'react'
import style from './createCardStyle'

class CreateCard extends Component {
    render() {
        return (
        <div class="container" style={style.Container}>
            <div className="row"></div>
            <form className="rounded border p-4 m-3 shadow-lg" method="GET" action="http://52.233.199.97:1488/create_task"> 
                <div className="form-group">
                    <h2>Please describe problem</h2>
                </div>
                <div class="form-group">
                <label>Title:</label>
                <input className="form-control shadow-sm"  type="text" name="problem_title" placeholder="Title" aria-describedby="helpId" required />
                </div>
                <div className="">
                    <label>Description:</label>
                    <textarea className="form-control text-wrap shadow-sm" type="text"  style={style.TextArea}  placeholder="Description" aria-describedby="helpId"></textarea>
                </div>
                <div className="form-group">
                    <label>Karma:</label>
                    <input className="form-control w-25 shadow-sm" type="text" name="coins" pattern="^[ 0-9]+$"  placeholder="Cost of karma" aria-describedby="helpId" />
                </div>
                <button className="btn btn-primary m-2 w-100 shadow-sm" type="submit" >Create</button>
            </form>
        </div>
        )
    }
}

export default CreateCard