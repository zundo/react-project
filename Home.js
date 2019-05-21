import React from 'react';
import {  AppRegistry,StyleSheet, Text, View, TextInput, Button, Image, TouchableHighlight} from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
          count: 0
                     }    }
    
                     static navigationOptions = {
                        header: null,
                      }


      render() {
        return (
      <View style={styles.body}>
        <View style={styles.image}>
        <TouchableHighlight onPress={this.props.navigation.navigate('Friends')}>

                <Image style={{ width: 300, height: 300}} source={{uri: 'https://fee.org/media/23072/houseofcards4_mini.jpg?anchor=center&mode=crop&width=1920&rnd=131444222840000000'}}></Image>
        </TouchableHighlight>
        <Button style={styles.increment} title='increment' onPress={() => {this.setState({ count: this.state.count + 1 })}}/>

        </View>
      </View>
        );
      }
    }

    
    const styles = StyleSheet.create({
        body: {
            height:'100 %',
            width : '100 %' ,
            backgroundColor: 'red',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
         
          },
          button: {
            marginTop: 20
           




          }
      
    });
