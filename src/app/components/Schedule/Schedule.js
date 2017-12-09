import React from 'react';
import { props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import { FlexView as View } from 'Basic';

import './schedule.scss';

@pure
@skinnable()
@props({})
export default class Schedule extends React.Component {

  getLocals() {
    return this.props;
  }

  template() {
    return (
      <View column className='schedule' hAlignContent='center' style={{ position: 'relative' }}>
        <div className='section-name left'>Schedule</div>
        <div className='section-name right'>Schedule</div>
        <h3>SCHEDULE</h3>
        <table>
          <tr>
            <td className='time'>09:00 - 09:40</td>
            <td colSpan={2} className='talk track-a'>
              Registration and breakfast
            </td>
          </tr>
          <tr>
            <td className='time'>09:40 - 10:00</td>
            <td colSpan={2} className='talk track-a'>
              Opening speech and introduction
            </td>
          </tr>
          <tr>
            <td className='time'>10:00 - 10:45</td>
            <td colSpan={2} className='talk track-a'>
              <a href='#/speakers/sabin'>
                <div>Miles Sabin</div>
                <div>Typelevel in 2017</div>
              </a>
            </td>
          </tr>
          <tr>
            <td />
            <td colSpan='2' style={{ textAlign: 'center' }}>
              COFFEE BREAK
            </td>
          </tr>
          <tr>
            <td className='time'>11:05 - 11:50</td>
            <td colSpan={2} className='talk track-a'>
              <a href='#/speakers/webber'>
                <div>Kevin Webber</div>
                <div>Scala Is The Next Scala</div>
              </a>
            </td>
          </tr>
          <tr>
            <td className='time'>11:55 - 12:40</td>
            <td colSpan={2} className='talk track-a'>
              <a href='#/speakers/wehden'>
                <div>Karl Wehden</div>
                <div>The batch to streaming journey: Applying Reactive principles to streaming systems in Fast Data</div>
              </a>
            </td>
          </tr>
          <tr>
            <td />
            <td colSpan='2'>
              LUNCH
            </td>
          </tr>
          <tr>
            <td />
            <td className='track-a-title'>TRACK A</td>
            <td className='track-b-title'>TRACK B</td>
          </tr>
          <tr>
            <td className='time'>14:00 - 14:45</td>
            <td className='talk track-a'>
              <a href='#/speakers/dotta'>
                <div>Mirco Dotta / Iulian Dragos</div>
                <div>Compiling like a boss!</div>
              </a>
            </td>
            <td className='talk track-b'>
              <a href='#/speakers/torreborre'>
                <div>Eric Torreborre</div>
                <div>Practical Eff monad for micro-services</div>
              </a>
            </td>
          </tr>
          <tr>
            <td className='time'>14:50 - 15:35</td>
            <td className='talk track-a'>
              <a href='#/speakers/pretty'>
                <div>Jon Pretty</div>
                <div>Contextual: Easy, compile-time string interpolation without macros!</div>
              </a>
            </td>
            <td className='talk track-b'>
              <a href='#/speakers/gurnell'>
                <div>Dave Gurnell</div>
                <div>Macros versus Shapeless versus Code Generation: What Works, When, and How Much?</div>
              </a>
            </td>
          </tr>
          <tr>
            <td />
            <td colSpan='2' style={{ textAlign: 'center' }}>
              BREAK
            </td>
          </tr>
          <tr>
            <td className='time'>16:00 - 16:45</td>
            <td className='talk track-a'>
              <a href='#/speakers/sfregola'>
                <div>Daniela Sfregola</div>
                <div>A practical introduction to Category Theory</div>
              </a>
              <td className='talk track-b'>
                <a href='#/speakers/bernhardt'>
                  <div>Manuel Bernhardt</div>
                  <div>8 Akka anti-patterns you'd better be aware of</div>
                </a>
              </td>
            </td>
          </tr>
          <tr>
            <td className='time'>16:50 - 17:35</td>
            <td className='talk track-a'>
              <a href='#/speakers/lacava'>
                <div>Alessandro Lacava</div>
                <div>Raising the abstraction level with HKTs and type classes</div>
              </a>
            </td>
            <td className='talk track-b'>
              <a href='#/speakers/sciabarra'>
                <div>Michele Sciabarra</div>
                <div>DevOps for Scala</div>
              </a>
            </td>
          </tr>
          <tr>
            <td className='time'>17:35 - 17:50</td>
            <td colSpan={2} className='talk track-a'>
              Closing speech
            </td>
          </tr>
          <tr>
            <td className='time'>18:00</td>
            <td colSpan={2} className='talk track-a'>
              Networking aperitivo
            </td>
          </tr>
        </table>
      </View>
    );
  }
}
