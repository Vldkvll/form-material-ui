import React from 'react'
import MainContainer from './MainContainer'
import { Typography } from '@material-ui/core'

function Step1() {
    return (
        <MainContainer>
             <Typography 
            //  className={styles.root}
             component="h2" variant="h5"
             >
           🦄 Step 1
        </Typography>
        </MainContainer>
    )
}

export default Step1
