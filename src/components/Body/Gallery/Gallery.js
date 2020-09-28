import React from 'react';

import Work from '../Work/Work';
import classes from './Gallery.module.scss';

const Gallery = props => (

    <div className={classes.Gallery}>
        <h3>WORK <span>GALLERY</span></h3>
        <ul>
            {props.works.map((work, index) => (
                <Work key={index} src={work.img} alt={work.title} title={work.title} desc={work.desc} /> 
            ))}
        </ul>
    </div>
    
);

export default Gallery;