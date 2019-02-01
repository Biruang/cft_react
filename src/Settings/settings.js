import React, { Component } from 'react';
import style from './settingsStyle'
//const SETTING = 'setting'

class Settings extends Component {
    render(){
        return(
            <div className="container col-xl-8" style={style.Container}>
                <form className="rounded border p-3 m-3 shadow-lg">
                    <div className="m-4">
                        <br/><h3>Смена логина</h3>
                        <p>Новый логин</p>
                        
                        <input type="text" className="form-control" placeholder="Введите новый логин" pattern="[A-Za-zА-Яа-яЁё-0-9]{50}"/><br/>
                        <button type="submit" className="btn btn-primary">Сохранить изменения</button>
                        <br/><br/><h3>Смена пароля</h3>
                        
                        <p>Текущий пароль</p>
                        <input type="text" className="form-control" placeholder="Введите текущий пароль"/><br/>
                        
                        <p>Новый пароль</p>
                        <input type="text" className="form-control" placeholder="Введите новый пароль" pattern="[A-Za-zА-Яа-яЁё-0-9]{50}"/><br/>
                        
                        <p>Подтвердите новый пароль</p>
                        <input type="text" className="form-control" placeholder="Введите новый пароль" pattern="[A-Za-zА-Яа-яЁё-0-9]{50}"/><br/>
                        <button type="submit" className="btn btn-primary">Сохранить изменения</button>
                        <br/><br/><br/>
                    </div>	
                </form>		
		    </div>
        )
    }
}

export default Settings