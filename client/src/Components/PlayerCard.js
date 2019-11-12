import React from 'react';
import {
    Card, CardText,CardHeader, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

export default function PlayerStats({name , country, searches}) {
    return(
        <div className='playerCard'>
            <Card>
            <CardHeader>{name}</CardHeader>
                <CardBody>
                    <CardTitle>Female Player</CardTitle>
                    <CardSubtitle>Country: {country}</CardSubtitle>
                    <CardText>Searches: {searches}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}