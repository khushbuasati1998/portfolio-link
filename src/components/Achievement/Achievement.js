import React, { useContext } from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';

import Grid from '@material-ui/core/Grid';

function Achievement() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {achievementData.achievements.length > 0 && (
                <Grid style={{ backgroundColor: theme.secondary, padding: '3rem' }} container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                    <Grid item>
                    <h1 style={{ color: theme.primary }}>Achievements</h1>
                        <h4 style={{ color: theme.tertiary }}>{achievementData.bio}</h4>
                    </Grid>
                    <Grid item>
                        <img src={achievementData.achievements[0].image} alt="" width="40%" height="30%" style={{transform: `rotate(-90deg)`, border: `3px solid ${theme.primary}` }} />
                    </Grid>
                </Grid>
            )}
        </>
    )
}

export default Achievement
