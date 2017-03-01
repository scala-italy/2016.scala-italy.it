import React from 'react';

export const keynotes = {
  sabin: {
    name: 'Miles Sabin',
    company: 'Underscore/Typelevel',
    pictureUrl: require('assets/images/speakers/sabin.jpg'),
    color: '#B3810D',
    bio:
      <div>
        <p>Miles has been doing stuff with Scala for more than fourteen years, currently with Underscore Consulting.</p>
        <p>He is a cofounder of Typelevel and his best known project, the Scala generic programming library shapeless, is the weapon of choice wherever boilerplate needs to be scrapped or arities abstracted over.</p>
        <p>Currently he is spending a lot of his time working on Typelevel Scala with the goal of improving the lives of all developers who write Scala in the Typelevel style.</p>
      </div>,
    title: 'Typelevel in 2017',
    abstract:
      <div>
        <p>
            There is a huge amount of activity around the Typelevel family of
            projects. The arrival of Cats on the scene marked the beginning an
            exciting period of collaboration among the Typelevel projects and a
            reaching out to the wider Scala community that hadn't been possible
            before. Now, part way through 2017, we have had three Typelevel
            conferences, and numerous other workshops and hack days. Things are
            going from strength to strength.
        </p>
        <p>
          This talk will give a flavour of what has been going on: the
          collaborations between Algebra, Spire and Cats; between Cats and
          shapeless; between shapeless and scodec, doobie, ScalaCheck and Circe;
          and how all of this is feeding into the Typelevel Scala and back into
          Lightbend Scala and Dotty too. It's also an open invitation to people
          right across the Scala spectrum to get involved in these projects and
          see what they can do for them in their own work.
        </p>
      </div>
  },
  webber: {
    name: 'Kevin Webber',
    company: 'RedElastic',
    pictureUrl: require('assets/images/speakers/webber.jpg'),
    color: '#1E9481',
    bio:
      <div>
        <p>
          Kevin Webber is CEO of RedElastic, a consulting company based out of Canada founded in 2016 to assist companies with strategic consulting in the Scala and Reactive Systems space.
        </p>
        <p>
          Before starting RedElastic, Kevin served as Developer Advocate and Enterprise Architect at Lightbend from 2014 to 2016.
        </p>
        <p>
          He first learned Scala in 2008 while working in Canadian banking, and used Scala to help Walmart Canada deliver one of the first fully-reactive e-commerce platforms in 2013.
        </p>
      </div>
    ,
    title: 'To be announced'
  },
  misterx: {
    name: '',
    company: '',
    pictureUrl: require('assets/images/speakers/misterx.png'),
    color: '#799100',
    bio: '',
    title: ''
  }
  // wehden: {
  //   name: 'Karl Wehden',
  //   company: 'Lightbend',
  //   pictureUrl: require('assets/images/speakers/wehden.jpg'),
  //   color: '#799100',
  //   bio:
  //     <div>
  //       <p>
  //         Karl Wehden is Director of Product Management at Lightbend, formerly Typesafe responsible for cloud and fast data products.
  //       </p>
  //       <p>
  //         He joined Lightbend from IBM, where he was Program Director for Advanced Analytics, Machine Learning and Big Data. His ongoing focus has been the development, marketing and sales strategy for highly scalable, safe and functional systems. He has worked as a program director at Oracle focused on capital markets, spent time as a VP of information security at Morgan Stanley, as well as several successful bay area startups.
  //       </p>
  //     </div>,
  //   title: 'To be announced'
  // }
};

export const speakers = {
  pretty: {
    name: 'Jon Pretty',
    company: 'Propensive',
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
  torreborre: {
    name: 'Eric Torreborre',
    company: 'Zalando',
    pictureUrl: require('assets/images/speakers/torreborre.jpg'),
    color: '#799100',
    bio:
      <div>
        <p>I am a software developer living in Berlin, working at Zalando to deliver fashion all over Europe.</p>
        <p>I am the creator of the specs2 library for software specifications in Scala and more recently of the eff library, an alternative to monad transformers.</p>
        <p>I really enjoy functional programming and love to share that journey with other developers.</p>
      </div>,
    title: 'The Eff monad, one monad to rule them all',
    abstract:
      <div>
        Monad transformers are a neat way to compose effectful computations: pass some configuration, read/write from disk, track errors... However they can be a bit cumbersome to deal with, especially if you want to use different stacks sharing some common effects: for example a stack to interact with AWS and another one for Hadoop computations. This talk will shortly introduce monad transformers in Scala and their drawbacks then present the Eff monad. The Eff monad has some really interesting properties: - effects can be developed completely independently from each other - effects can be interpreted in different ways and the interpreters can be composed together - it is based on an efficient "Free monad" (avoiding the issue of quadratic flatMaps) - with the Eff monad you will never have to re-implement the Monad operations (point / flatMap) again!
      </div>
  },
  dotta: {
    name: 'Mirco Dotta',
    company: 'Triplequote',
    pictureUrl: require('assets/images/speakers/dotta.jpg'),
    color: '#B3810D',
    cospeaker: {
      id: 'dragos',
      name: 'Iulian Dragos'
    },
    bio:
      <div>
        <p>Co-founder of Triplequote, a company aiming at boosting Scala teams' productivity.</p>
        <p>Mirco has 10+ year experience with Scala, and he has contributed to several open source projects such as Lagom, Playframework, Scala IDE for Eclipse, and the Scala language.</p>
        <p>Before founding his own company, he worked at Lightbend (formerly known as Typesafe), where he wore different hats: from engineering, to consulting, and, fun fact, even sales! He is a certified Lightbend trainer for Akka, Playframework, and Scala. He loves meeting people and sharing experiences.</p>
        <p>In his freetime, he plays chess and studies wine - both theory and practice! :) You can find him on twitter at <a target='blank' href='https://twitter.com/mircodotta'>@mircodotta</a>.</p>
      </div>,
    title: 'Compiling like a boss!',
    abstract:
      <div>
        <p>We all love Scala, but the one aspect we have a hard time accepting are long compile times. It’s not uncommon for a project to experience compilation times of a handful of minutes, if not worse. On top of that, compilation times are unpredictable, depending on a combination of language features, external libraries, and type annotations. A single line change may increase compilation times ten fold.</p>

        <p>What can we do? It’s paramount we gain greater insight into the tools and libraries we use. There are also established (anti-)patterns that you should know about, if you fancy to keep compilation times to a minimum. And why not utilizing all cores when compiling? The stock Scala compiler can’t do it, but Triplequote Hydra is here to change that.</p>

        <p>Sit tight and let’s cut down on compilation time!</p>
      </div>
  },
  dragos: {
    name: 'Iulian Dragos',
    company: 'Triplequote',
    pictureUrl: require('assets/images/speakers/dragos.jpg'),
    color: '#B3810D',
    cospeaker: {
      id: 'dotta',
      name: 'Mirco Dotta'
    },
    bio:
      <div>
        <p>Iulian dreams about a world where the Scala programming language is the default choice in the enterprise.</p>
        <p>He learned Scala by writing the compiler backend for it during his PhD at EPFL, back in 2004, and he was the first employee of Lightbend (formerly Typesafe).</p>
        <p>In nov. 2016 he co-founded Triplequote, with the mission to empower Scala teams through great development tools, starting with a parallel compiler. Iulian is a frequent speaker at conferences and actively contributing to several open-source projects.</p>
      </div>,
    title: 'Compiling like a boss!',
    abstract:
      <div>
        <p>We all love Scala, but the one aspect we have a hard time accepting are long compile times. It’s not uncommon for a project to experience compilation times of a handful of minutes, if not worse. On top of that, compilation times are unpredictable, depending on a combination of language features, external libraries, and type annotations. A single line change may increase compilation times ten fold.</p>

        <p>What can we do? It’s paramount we gain greater insight into the tools and libraries we use. There are also established (anti-)patterns that you should know about, if you fancy to keep compilation times to a minimum. And why not utilizing all cores when compiling? The stock Scala compiler can’t do it, but Triplequote Hydra is here to change that.</p>

        <p>Sit tight and let’s cut down on compilation time!</p>
      </div>
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
    color: '#B3810D',
    bio: 'To be announced',
    title: 'To be announced'
  }
};
