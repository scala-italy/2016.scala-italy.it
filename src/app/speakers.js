import React from 'react';

export const keynotes = {
  misterx: {
    name: '',
    company: '',
    pictureUrl: require('assets/images/speakers/misterx.png'),
    color: '#B3810D',
    bio: 'To be announced',
    title: 'To be announced'
  },
  mistery: {
    name: '',
    company: '',
    pictureUrl: require('assets/images/speakers/misterx.png'),
    color: '#1E9481',
    bio: 'To be announced',
    title: 'To be announced'
  },
  misterz: {
    name: '',
    company: '',
    pictureUrl: require('assets/images/speakers/misterx.png'),
    color: '#799100',
    bio: 'To be announced',
    title: 'To be announced'
  }
  // sabin: {
  //   name: 'Miles Sabin',
  //   company: 'Underscore/Typelevel',
  //   pictureUrl: require('assets/images/speakers/sabin.jpg'),
  //   color: '#B3810D',
  //   bio:
  //     <div>
  //       <p>Miles has been doing stuff with Scala for more than fourteen years, currently with Underscore Consulting.</p>
  //       <p>He is a cofounder of Typelevel and his best known project, the Scala generic programming library shapeless, is the weapon of choice wherever boilerplate needs to be scrapped or arities abstracted over.</p>
  //       <p>Currently he is spending a lot of his time working on Typelevel Scala with the goal of improving the lives of all developers who write Scala in the Typelevel style.</p>
  //     </div>,
  //   abstract:
  //     <div>To be announced</div>
  // }
};

export const speakers = {
  pretty: {
    name: 'Jon Pretty',
    company: 'propensive',
    pictureUrl: require('assets/images/speakers/pretty.jpg'),
    color: '#C31048',
    bio:
      <div>
        <p>Jon has been involved in the Scala community for over a decade, having launched the first commercial and open-source Scala software back in 2005.</p>
        <p>Since then, he has successfully deployed Scala projects into small, medium and large businesses, and the UK government, but is best known these days for his work on Rapture, Contextual and the Scala World conference, and as chair of the Scala Center Advisory Board.</p>
      </div>,
    title: 'Contextual: Easy, compile-time string interpolation without macros!',
    abstract:
      <div>Interpolated strings, like the familiar `s""`, provide a convenient way to embed external DSLs in Scala source, allowing you to construct new runtime values from string literals, with Scala expressions substituted within it. But unless you implement the interpolator using a macro, the compiler provides no checks whether the embedded code is correct or well-formed. Contextual is a small open-source library which does the heavy lifting work to make it trivial to write string interpolators which run at compile time, without requiring any macros. A string interpolator which statically parses and checks a DSL, with its own custom compile errors, can be written with Contextual in just a few lines of very ordinary code, calling upon parsers, regexes or any other means to check the interpolated string, opening a wealth of opportunities for adding compile-time safety embedded DSLs in your code.</div>
  },
  mistera: {
    name: '',
    company: '',
    pictureUrl: require('assets/images/speakers/misterx.png'),
    color: '#799100',
    bio: 'To be announced',
    title: 'To be announced'
  },
  misterb: {
    name: '',
    company: '',
    pictureUrl: require('assets/images/speakers/misterx.png'),
    color: '#C31048',
    bio: 'To be announced',
    title: 'To be announced'
  },
  misterc: {
    name: '',
    company: '',
    pictureUrl: require('assets/images/speakers/misterx.png'),
    color: '#799100',
    bio: 'To be announced',
    title: 'To be announced'
  },
  mistere: {
    name: '',
    company: '',
    pictureUrl: require('assets/images/speakers/misterx.png'),
    color: '#C31048',
    bio: 'To be announced',
    title: 'To be announced'
  },
  misterf: {
    name: '',
    company: '',
    pictureUrl: require('assets/images/speakers/misterx.png'),
    color: '#1E9481',
    bio: 'To be announced',
    title: 'To be announced'
  }
  // torreborre: {
  //   name: 'Eric Torreborre',
  //   company: 'Zalando',
  //   pictureUrl: require('assets/images/speakers/torreborre.jpg'),
  //   color: '#799100',
  //   bio:
  //     <div>
  //       <p>I am a software developer living in Berlin, working at Zalando to deliver fashion all over Europe.</p>
  //       <p>I am the creator of the specs2 library for software specifications in Scala and more recently of the eff library, an alternative to monad transformers.</p>
  //       <p>I really enjoy functional programming and love to share that journey with other developers.</p>
  //     </div>,
  //   title: 'The Eff monad, one monad to rule them all',
  //   abstract:
  //     <div>
  //       Monad transformers are a neat way to compose effectful computations: pass some configuration, read/write from disk, track errors... However they can be a bit cumbersome to deal with, especially if you want to use different stacks sharing some common effects: for example a stack to interact with AWS and another one for Hadoop computations. This talk will shortly introduce monad transformers in Scala and their drawbacks then present the Eff monad. The Eff monad has some really interesting properties: - effects can be developed completely independently from each other - effects can be interpreted in different ways and the interpreters can be composed together - it is based on an efficient "Free monad" (avoiding the issue of quadratic flatMaps) - with the Eff monad you will never have to re-implement the Monad operations (point / flatMap) again!
  //     </div>
  // }
};
