import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          films: [],
          searchedText: "",
          count: 0
                     }
                         }
       _searchTextInputChanged(text) {
                          this.setState({ searchedText: text })
                      }
                      static navigationOptions = {
                        header: null,
                      }
      render() {
        return (
          <View style={styles.hello}>
            <Text>  Micheal possède l'age de " { this.state.count  }"</Text>
            <TextInput placeholder='Titre du film'
            onChangeText={(text) => this._searchTextInputChanged(text)}
            />
            <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>
            <View style={styles.counter}>
              <Button style={styles.increment} title='increment' onPress={() => {this.setState({ count: this.state.count + 1 })}}/>
              <Button title='decrement' onPress={() => {this.setState({ count: this.state.count - 1 })}}/>
            </View>
            <View style={{ height: 335, backgroundColor: 'green' }}>
              <Text>  salut micheal comment vas tu {this.state.searchedText}</Text>
              <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
            </View>
           </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      hello: {
        flex: 1,
        height: 335,
        backgroundColor: 'red',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      counter : {
        display: 'flex',
        backgroundColor: 'blue',
    },
      increment : {
          marginRight: 20,
          backgroundColor: 'red',   
      }
      
    });