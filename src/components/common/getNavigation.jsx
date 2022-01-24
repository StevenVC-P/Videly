import React from 'react';
import { useNavigation } from 'react-router-dom';
import MovieForm from '../movieForm';

export default function(props){
    const navigation = useNavigation()
    return <MovieForm {...props} navigation={navigation}
}