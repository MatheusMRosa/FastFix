import React, { Component } from 'react';
import axios from 'axios';
import dog from '../images/dog.jpg'

const ProductLine = ({nameProduct, children})=> <div>{nameProduct} {children}</div>


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3030/api/product').then((res, err) => {
            console.log(res.data)
            console.log(err)
            this.setState({
                list: res.data
            });
        });
    }
    render() {
        return <div><img src={dog}/>
        {
            this.state.list.map(
                (product, index) =><ProductLine {...product}  key={product._id}><h1>çalksjçflakjsdf</h1></ProductLine>)
                }
                </div>;
    }
}
export default ProductList;

