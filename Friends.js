import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native';

export default class Friends extends React.Component {
    static navigationOptions = {
        header: null,
      }



  render() {
    return (
      <View style={styles.container}>
        <Text>  Elhadji mon ami</Text>
        <ScrollView style={styles.scrollview_container}>
        <Text>gregorie</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>thoerru</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>samuel</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>huto</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>lituanie</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>coucouille</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>veronique</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>gregolire</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>veronique</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>hugo</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>virgile</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>

        <Text>loundire</Text>
        <Image style={{ width: 100, height: 100}} source={{uri: 'https://b.thumbs.redditmedia.com/4rO_ci1OdPs9sdxIyeSS85_in274Q_MocxsKHyWYhKM.jpg'}}></Image>


        </ScrollView>
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});