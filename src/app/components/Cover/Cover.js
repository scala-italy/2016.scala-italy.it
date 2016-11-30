import React from 'react';
import { t, props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import { FlexView } from 'Basic';
import MailchimpForm from 'MailchimpForm/MailchimpForm';

import './cover.scss';
import logo from 'assets/images/logo.png';

@pure
@skinnable()
@props({
  onArrowClick: t.Function
})
export default class Cover extends React.Component {

  onWatchVideosClick = () => window.open('https://vimeo.com/channels/scalaitaly2016');

  getLocals() {
    const { onArrowClick } = this.props;

    return { onArrowClick };
  }

  template() {
    return (
      <FlexView className='cover-page' grow auto column hAlignContent='center' vAlignContent='center'>
        <div className='logo' src={logo} />
        <h1>The only Italian conference on Scala</h1>
        <h3>Rome, May 13th, 2017</h3>
        <MailchimpForm title='Interested?' subtitle="Leave your email and we'll keep you posted. No spam, we promise!" />
        {/* <Button buttonState='ready' className='action-button video-button' label='watch the videos' onClick={this.onWatchVideosClick} /> */}
        {/*<div className='arrow bounce' onClick={onArrowClick}/> */}
      </FlexView>
    );
  }

}
