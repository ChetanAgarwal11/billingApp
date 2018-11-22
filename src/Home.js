import React, {Component} from 'react';
import { Segment, Loader, Table, TableBody, TableRow } from 'semantic-ui-react';

class Home extends Component {

    state = { data : []}

    componentWillMount(){
        console.log('home will mount');
        const cachedHits = localStorage.getItem('data');
        if (cachedHits) {
        this.setState({ data: JSON.parse(cachedHits) });
        return;
        }else{
            
            fetch('https://jsonplaceholder.typicode.com/todos',{ method : 'get'})
            .then(res => res.json())
            .then(json => {
                console.log(json);
                localStorage.setItem('data',JSON.stringify(json));
                this.setState({data : json})
            }).catch((e) => {
                console.log(e);
            })
        }   
    }


    render(){

        return(
            <Segment>
                <Loader active></Loader>
                
            <Table>
                <TableBody>{this.state.data.map(function(item, key) {
             
               return (
                  <TableRow key = {key}>
                      <td>{item.userId}</td>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                  </TableRow>
                )
             
             })}</TableBody>
            </Table>
            </Segment>
        )
    }
}

export default Home;