import React from 'react';
import './App.css';
import Drop from './Drop';
import Dragger from './Dragger';
import styled from 'styled-components'


const Wrapper = styled.div`
    width:100%;
    padding:32px;
    display:flex;
    jusstify-content:center;
`



const droppableStyle = {
    backgroundColor: '#555',
    width: '600px',
    height: '400px',
    margin: '32px'

}



export default class App extends React.Component {
    state = { users: [] }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }
    render() {
        return (
            <Wrapper>
                <Drop id='dr1' style={droppableStyle}>
                    <Dragger id='item1'>
                        {this.state.users.map(user =>
                            <div >
                                <table class="table table-hover">
                                    <thead >
                                        <tr>
                                            <th> ID</th>
                                            <th> Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        )}
                    </Dragger>
                </Drop>
                <Drop id='dr2' style={droppableStyle}>


                </Drop>
            </Wrapper>



        );
    }
}