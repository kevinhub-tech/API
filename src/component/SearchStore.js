import React, { Component } from 'react'
import { searchStoreByKey } from '../service/OnlineService'

export class SearchStore extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             key: this.props.match.params.key,
             stores:[]
        }
    }

    componentDidMount(){
        searchStoreByKey(this.state.key)
        .then((response) => {console.log("Search Store from Component" + JSON.stringify(response))
            this.setState({ stores: response })
        })
    }
    
    render() {
        return (
            <div>
                <h1>SEARCH STORE RESULTS</h1>
    
                <br></br>
 
                <table>
                <tr>
                    <th>Store Id</th>
                    <th>Store Name</th>
                    <th>Store Location</th>
                    <th>Store Email</th>
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

export default SearchStore