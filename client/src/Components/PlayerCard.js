import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

export default function PlayerStats({name , country, searches}) {
    return(
        <div className='playerCard'>
            <Card>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>Country: {country}</CardSubtitle>
                    <CardText>Searches: {searches}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}