import React, { Component } from 'react'
import {viewStores} from '../service/OnlineService'
import './SearchStore.css'
import './Store.css'
export class Store extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            stores: []
        }
    }
    
    componentDidMount(){
     viewStores().then((response) => {
            console.log("All Stores from View Component" + JSON.stringify(response));
            this.setState({stores: response})
        })
    }
    
    searchChangeHandler = (event) =>{
        this.setState({
            key: event.target.value
       })
    }

    searchStore = (key) =>{
        this.props.history.push(`/search/${key}`)
    }

    getStore = (sid) =>{
        this.props.history.push(`/get/${sid}`)
    }


    render() {
        return (
            <div>

                {/* Customized Search Button */}
                <form class="example" action="">
                    <input type="text" placeholder="Search.." name="search"
                    value={this.state.key} onChange={this.searchChangeHandler}/>
                    <input type="button" onClick = { () => this.searchStore(this.state.key) }
                    value="SEARCH">
                    </input>
                </form>
                <br></br>
                
                <table>
                <tr>
                    <th>Store Id</th>
                    <th>Store Name</th>
                    <th>Store Location</th>
                    <th>Store Email </th>
                    <th>Store Phone Number</th>
                </tr>
                {/*Fetch all cars data*/ }
                {
                        this.state.stores.map(stores=> 
                    <tr key={stores.storeId}>
                         <td>{stores.storeId}</td>
                        <td>{stores.storeName}</td>
                        <td>{stores.storeLocation}</td>
                        <td>{stores.storeEmail}</td>
                        <td>{stores.storePhoneNumber}</td>
                        
                    </tr>
                        )
                        }
                </table>

            </div>
        )
    }
}

export default Store;
