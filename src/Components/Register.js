import React, {Component} from 'react';

import {db} from '../config';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

let addItem = (reg) =>{
    db.ref('/regs').push({
        name:reg.name,
        password:reg.password,
        email:reg.email
    });
}

// let itemsRef= db.ref('/regs')

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
       
      regs:[],
      name:'',
      email:'',
      password:''

    }
    this.nameChange=this.nameChange.bind(this);
    this.emailChange=this.emailChange.bind(this);

    this.passwordChange=this.passwordChange.bind(this);

    this.clickToAdd=this.clickToAdd.bind(this);
  }

  clickToAdd(){
    addItem(this.state);
}

nameChange(e){
    this.setState({name:e.nativeEvent.text})
}

emailChange(e){
    this.setState({email:e.nativeEvent.text})
}
passwordChange(e){
    this.setState({password:e.nativeEvent.text})
}

// componentDidMount(){
//     itemsRef.on('value', snapshot => {
//         let data= snapshot.val();
//         let items = Object.values(data);
//         this.setState({items});
//     });
// }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
        
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput 
              
               onChange={this.nameChange}
              style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput 
         
          onChange={this.emailChange}
          style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput 
           
            onChange={this.passwordChange}
            style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText} onPress={this.clickToAdd}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
   
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#0A0D06",
  },
  signUpText: {
    color: 'white',
  }
});
 