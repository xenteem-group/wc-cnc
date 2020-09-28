import React from 'react';

import classes from './Work.module.css';

const Work = props => (
    <li className={classes.Work}>
        <figure>
            <img src={props.src} alt={props.alt} />
            <figcaption>
                <div className={classes.Table}>
                    <div className={classes.Inner}>
                        <h4>{props.title}</h4>
                        <small>{props.desc}</small>
                    </div>
                </div>
            </figcaption>
        </figure>
    </li>
);

export default Work;