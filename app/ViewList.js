import React,{Component} from 'react';
import { Image } from 'react-native';
import { Header, Left, Body, Right, Title, Text, Icon, Card, CardItem, Thumbnail } from 'native-base';

export default ViewList = (props) => (
  <Card style={{marginLeft:0, marginRight:0, borderRadius:0}}>
    <CardItem header style={{height:50}}>
      <Left>
        <Thumbnail small source={{uri: 'https://lh3.googleusercontent.com/-kCJD5dkof6Y/AAAAAAAAAAI/AAAAAAAAAJo/EnnmsZuhYss/s640-il/photo.jpg'}} />
        <Body>
          <Text>{props.data.nama}</Text>
          <Text note>{props.data.lokasi}</Text>
        </Body>
      </Left>
      <Right>
        <Icon style={{fontSize:25, color:'black'}} name='more' />
      </Right>
    </CardItem>
    <CardItem cardBody>
      <Image
        style={{height: 200, width: null, flex: 1}}
        source={{uri: props.data.gambar}}
      />
    </CardItem>
    <CardItem footer>
      <Left>
        <Icon name='happy' />
      </Left>
      <Right>
        <Text style={{color: 'grey'}}>{props.data.waktu}</Text>
      </Right>
    </CardItem>
  </Card>
);