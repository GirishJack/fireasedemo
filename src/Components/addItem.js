import React, {Component} from 'react';
import {TextInput, View,Button,Text} from 'react-native';
import {db} from '../config';


let addItem = (item) =>{
    db.ref('/items').push({
        itemInfo:item
    });
}

let itemsRef= db.ref('/items')
export default class AddItem extends Component
{
    constructor(props){
        super(props);
        this.state={
            itemInfo:'',
            items:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.clickToAdd=this.clickToAdd.bind(this);
    }

    clickToAdd(){
        addItem(this.state.itemInfo);
    }

    handleChange(e){
        this.setState({itemInfo:e.nativeEvent.text})
    }

    componentDidMount(){
        itemsRef.on('value', snapshot => {
            let data= snapshot.val();
            let items = Object.values(data);
            this.setState({items});
        });
    }



    render() {
        return(
            <View>
                  <TextInput
                  value={this.state.itemInfo}
                  onChange={this.handleChange}
          style={{height: 40}}
          placeholder="Type here to AddItems!"
        
        />

<Button
  onPress={this.clickToAdd}
  title="Add Item"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
            {this.state.items.map(x=>{
                return <Text>{x.itemInfo}</Text>
            })}
            </View>
        )
    }
   
}
