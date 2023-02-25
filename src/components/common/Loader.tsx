import {Box, CircularProgress} from '@mui/material';

export const Loader = () => {
    return (
        <Box sx={{display: 'grid', placeContent: 'center', width: '100%', height: '100%'}}>
            <CircularProgress sx={{color: "black"}} />
            {/*d4e9ff*/}
        </Box>
    );
};