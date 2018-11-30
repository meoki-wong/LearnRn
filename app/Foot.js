import React,{Component} from 'react';
import {Icon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default Foot = (props) => (
  <Col>
    <Icon style={{fontSize:25,textAlign: 'center'}} name={props.nama} />
  </Col>
);