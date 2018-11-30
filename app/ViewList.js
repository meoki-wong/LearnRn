import React,{Component} from 'react';
import { ListItem, Text } from 'native-base';

export default ViewList = (props) => (
    <ListItem>
        <Text>{props.data}</Text>
    </ListItem>
);