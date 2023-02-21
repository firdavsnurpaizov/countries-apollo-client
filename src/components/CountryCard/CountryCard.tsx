import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {
    item: any
}

export default function CountryCard({item}: Props) {
    return (
        <Card sx={{width: 345, height: 225}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <h3>{item.name}</h3>
                    <span>{item.capital}</span>
                    <p>{item.continent.name}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <div>
                        <p> 📞 {item.phone}</p>
                        <p>🗣 {item?.languages[0]?.native} {item?.languages[1]?.native}</p>
                        <p>💱 {item.currency}</p>
                    </div>
                </Typography>
            </CardContent>
        </Card>
    );
}