import React, { Component } from 'react';
import axios from 'axios';

const ProductLine = ({nameProduct, children})=> <div>{nameProduct} {children}</div>;


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            list: []
        }
    }
    onUserChanged () {

    }
    componentDidMount() {
        axios.put('http://localhost:3030/api/user', {user: this.state.user, pass: this.state.pass}).then((res, err) => {
            console.log("Resposta: ",res)
        });
    }
    render() {
        return <form onSubmit={this.componentDidMount}>
            <table>
                <tr>
                    <td>Usuário</td>
                    <td><input/></td>
                </tr>
                <tr>
                    <tr>Senha</tr>
                    <td><input value={this.state.pass}/></td>
                </tr>
            </table>

        </form>;
    }
}
export default ProductList;