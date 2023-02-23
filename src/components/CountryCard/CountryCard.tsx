import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from "./CountryCard.module.scss"

type Props = {
    item: any
}

export default function CountryCard({item}: Props) {
    return (
        <Card sx={{width: 345, height: 150}}>
            <CardContent className={styles.content}>
                <div className={styles.title}>
                    <div>
                        <h3>{item.name}</h3>
                        <span>{item.capital}</span>
                    </div>
                    <div>
                        <p>{item.continent.name}</p>
                        <span>{item.emoji}</span>
                    </div>
                </div>
                <Typography className={styles.details} variant="body2" color="text.secondary">
                    <p>📞 {item.phone}</p>
                    <p>🗣 {item?.languages[0]?.native} {item?.languages[1]?.native}</p>
                    <p>💱 {item.currency}</p>
                </Typography>
            </CardContent>
        </Card>
    );
}