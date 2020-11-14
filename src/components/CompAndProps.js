import React, { Component } from 'react'
import '../App.css';
import {notification, Button} from 'antd'
import 'antd/dist/antd.css';


//function components
function Square(props) {
    const onClick = type => {
        notification[type]({
          message: 'Hello There',
          description:
            'Ini contoh penggunaan React Component Library Ant Design',
        });
    }
    return (
        <div>
            <h2 style={{color:'white'}}>Hallo!</h2>
            <p>Saya Components {props.komponen}</p>
              <Button background="#66ccff" onClick={() => onClick('success')}>Click Coba</Button>
        </div>
        );
}

//class components
export default class CompAndProps extends Component {
    render() {
        const background={
            backgroundColor : this.props.bgcolor
        }
        return (
            <div className="wrapper">
                <div className="User-info" style={background}>
                    <Square komponen="kiri" link="/kiri"/>
                </div>
                <div className="User-info" style={background}>
                    <Square komponen="kanan" link="/kanan"/>
                </div>
                <div className="User-info" style={background}>
                    <Square komponen="kita coba text yang cukup panjang lah ya" link="/panjang"/>
                </div>
            </div>
                           
        )
    }
}
