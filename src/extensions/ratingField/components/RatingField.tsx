import { override } from '@microsoft/decorators';
import * as React from 'react';
import styles from './RatingField.module.scss';

export interface IRatingFieldProps {
  rating: number;
}

export default class RatingField extends React.Component<IRatingFieldProps, {}> {
  @override
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <svg width="100%" height="100%" viewBox="0 0 42 42" className={styles.donut}>
          <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
          <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#eee" strokeWidth="4"></circle>
          <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#47c3f0" strokeWidth="4" strokeDasharray={`${this.props.rating} ${100 - this.props.rating}`} strokeDashoffset="25"></circle>
          <text className="donut-number" x="50%" y="50%" textAnchor="middle">{this.props.rating}%</text>
        </svg>
      </div>
    );
  }
}
