import React from 'react';
import { t, props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import { FlexView } from 'Basic';
import cx from 'classnames';

import './speaker.scss';

@pure
@skinnable()
@props({
  src: t.String,
  color: t.maybe(t.String),
  id: t.String,
  name: t.String,
  company: t.String,
  twitter: t.maybe(t.String),
  onClick: t.maybe(t.Function)
})
export default class Speaker extends React.Component {

  onClick = () => this.props.onClick && this.props.onClick(this.props.id);

  getLocals() {
    const {
      onClick,
      props: { src, color, name, company, twitter }
    } = this;

    const dynamic = !!this.props.onClick;

    return { src, color: color || 'transparent', name, company, onClick, dynamic, twitter };
  }

  template({ src, color, name, company, onClick, cursor, transition, dynamic }) {
    return (
      <FlexView style={{ cursor }} column hAlignContent='center' className={cx({ speaker: true, dynamic })} onClick={onClick}>
        <div className='image-container'>
          <div className='frame-1' style={{ borderColor: color, transition }} />
          <div className='frame-2' style={{ borderColor: color, transition }} />
          <img src={src} />
          <div className='overlay' style={{ backgroundColor: dynamic ? color : 'transparent' }} />
        </div>
        <FlexView className='speaker-name' >
          {name}
        </FlexView>
        <FlexView className='speaker-company'>
          {company}
        </FlexView>
      </FlexView>
    );
  }

}
