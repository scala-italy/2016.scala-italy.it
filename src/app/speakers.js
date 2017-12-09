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
    title: 'Scala Is The Next Scala',
    abstract:
      <div>
        <p>Kevin Webber, CEO of RedElastic, will discuss reasons why Scala will likely remain a specialized programming language, and why becoming The Next Java isn’t what the Scala community needs in order to continue fostering a vibrant community, culture, and ecosystem.</p>

        <p>The Rule Of Least Power is the philosophy of using the least powerful technology capable of solving a given problem, which is the philosophy that lead to the development of modern generalist languages like Google’s Go. Even more profound are the changes to modern systems architectures; today, a modern system might be composed of tens or hundreds of discrete services. No longer do teams need to choose a single language to accomplish the difficult task of launching a production-grade system, now teams can be very specific about which language is best suited to an individual component of a system. These trends in software development takes the pressure off of Scala to become The Next Java, which gives the Scala community the opportunity to focus on the essence of what makes Scala unique, and why it might be the language of choice to leverage against the most exciting opportunities in your business.</p>

        <p>Drawing on almost ten years of Scala experience, along with meeting hundreds of technology leaders who are using Scala on mission-critical projects, Kevin will draw on these experiences to discuss the past of Scala and where the language and ecosystem may evolve to over the next decade.</p>
      </div>
  },
  wehden: {
    name: 'Karl Wehden',
    company: 'Lightbend',
    pictureUrl: require('assets/images/speakers/wehden.jpg'),
    color: '#799100',
    bio:
      <div>
        <p>
          Karl Wehden is Director of Product Management at Lightbend, formerly Typesafe responsible for cloud and fast data products.
        </p>
        <p>
          He joined Lightbend from IBM, where he was Program Director for Advanced Analytics, Machine Learning and Big Data. His ongoing focus has been the development, marketing and sales strategy for highly scalable, safe and functional systems. He has worked as a program director at Oracle focused on capital markets, spent time as a VP of information security at Morgan Stanley, as well as several successful bay area startups.
        </p>
      </div>,
    title: 'The batch to streaming journey: Applying Reactive principles to streaming systems in Fast Data',
    abstract:
      <div>
        As data processing workloads continue to outstrip our ability to process them in batch, both in terms of volume and operational ability, we are turning more and more frequently to streaming data processing frameworks and tools.  The cost of these changes come in the form of increased operational overhead, the introduction of machine learning training and scoring, and the myriad of signals that make up the streaming universe.  We will explore some of the key trends, obstacles and potential solutions to issues Lightbend sees ahead, and apply the principles of reactive software to streaming frameworks to create an era of responsive, resilient, elastic, and message driven systems of services.
      </div>
  }
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
    title: 'Practical Eff monad for micro-services',
    abstract:
      <div>
        This talk presents how we use the Eff monad at Zalando to structure a REST microservice. Even when programming with functions, modules and components still matter, and I will present a new approach for dependency injection using the Reader monad (classic) and tree rewriting (what?). Then we will see how to specify more precisely the service components (authentication, request to other services, database access) with the Eff monad and support additional concerns like logging or asynchronous execution.
        Once you get the basic idea, the possibilities are endless! Rate limiting is just another component and another set of effects involving time and state, testing becomes really clean and easy.
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
  sfregola: {
    name: 'Daniela Sfregola',
    company: 'Daniela Tech LTD',
    pictureUrl: require('assets/images/speakers/sfregola.png'),
    color: '#799100',
    bio:
      <div>
        <p>Daniela Sfregola is a Software Consultant based in London, UK.</p>
        <p>She is an active contributor to the Scala Community and a passionate blogger at <a href='http://danielasfregola.com' target='_blank'>danielasfregola.com</a>.</p>
      </div>,
    title: 'A practical introduction to Category Theory',
    abstract:
      <div>
        <p>Category Theory has become one of the hot topics in our community. Why is this theory suddenly so interesting for developers? Why are the cool kids talking so much about it? How can we apply its principles in our code?</p>

        <p>This talk will introduce the general principles behind Category Theory, it will show practical examples of how this theory has managed to simplify and solve common challenges that we encounter in our code daily.</p>
      </div>
  },
  lacava: {
    name: 'Alessandro Lacava',
    company: 'Freelance',
    pictureUrl: require('assets/images/speakers/lacava.jpg'),
    color: '#B3810D',
    bio:
      <div>
        <p>Alessandro Lacava has been programming since 1989. He wrote his first LOC in Pascal at the age of thirteen.</p>
        <p>He gained an extensive experience with object-oriented design and programming before falling in love with functional programming and type systems which, at the moment, remain his main interests.</p>
        <p>Alessandro is a freelance and works as a lead Scala designer and developer for Italiaonline.</p>
      </div>,
    title: 'Raising the abstraction level with HKTs and type classes',
    abstract:
      <div>
        <p>I suppose it’s an objective of every developer writing reusable code. Statically typed FP and higher-kinded types lets you raise the abstraction level enormously with respect to OOP and, more generally, languages which don’t have HKTs and type classes.</p>
        <p>In this talk, after an introduction to some funny-named type classes, you’ll see how to take advantage of them to implement a very reusable function. I’ll start by implementing it using a quick & dirty approach and then trying to make it more abstract and reusable thanks to more or less known type classes, actually making sense of them so you can see they are not just confined to theory and useless in practice.</p>
      </div>
  },
  bernhardt: {
    name: 'Manuel Bernhardt',
    company: 'manuel.bernhardt.io',
    pictureUrl: require('assets/images/speakers/bernhardt.jpg'),
    color: '#799100',
    bio:
      <div>
        <p>Manuel Bernhardt is a passionate engineer, author, speaker and consultant who has a keen interest in the science of building and operating networked applications that run smoothly despite their distributed nature. Since 2008, he has guided and trained enterprise teams on the transformation to distributed computing. In recent years he is focusing primarily on production systems that embrace the reactive application architecture, using Akka, Play Framework, Scala and Java to this end.</p>
        <p>Manuel likes to travel and is a frequent speaker at international conferences. He lives in Vienna where he is a co-organizer of the Scala Vienna User Group. Next to thinking, talking about and fiddling with computers he likes to spend time with his family, run, scuba-dive and read. You can find out more about Manuel's recent work at <a href='http://manuel.bernhardt.io' target='_blank'>http://manuel.bernhardt.io</a>.</p>
      </div>,
    title: '8 Akka anti-patterns you\'d better be aware of',
    abstract:
      <div>
        <p>CAUTION: If you are responsible for an Akka system deployed to production, attending this talk may cause intense moments of self-doubt, stress and possibly panic.</p>
        <p>Akka is a toolkit for building highly concurrent and distributed applications on the JVM using the actor model. Given the prevalence of frameworks over toolkits and models in the industry, it is easy to forget that the former will not prevent you from using them in any way you please – including ways that are possibly suboptimal or perhaps even harmful.</p>
        <p>In this talk you'll learn about a few of the most common anti-patterns related to Akka usage. You'll also get to know about alternative and more appropriate solutions to use for each one of those anti-patterns. It should be noted that these suboptimal uses of Akka are not merely theoretical ponderings but real and recurring observations that the speaker made during a range.</p>
      </div>
  },
  sciabarra: {
    name: 'Michele Sciabarra',
    company: 'Sciabarra.com ltd',
    pictureUrl: require('assets/images/speakers/sciabarra.jpg'),
    color: '#C31048',
    bio:
      <div>
        <p>Michele Sciabarra is a Java veteran,  who started writing Java applets compiled with Netscape Navigator 2, when Java was at version alpha. Since then he traversed the Java world for two decades, coding Web applications, GUI interfaces and Mobile Apps. He put his teeth on all the major Java frameworks and many minor ones.</p>
        <p>Seven years ago, he fell in love with Scala when it was mostly considered an academic exercise. Fighting the forces of obscurity, he used Scala successfully to build a framework for ECM  applications, now used in a number of banks and telecoms. Nowadays, he is CEO of a Scala focused company,  and he works  building Big Data and Machine Learning applications deployed in the cloud. He strongly believes in Scala not only as a development language but also as a great DevOps tool.</p>
      </div>,
    title: 'DevOps for Scala',
    abstract:
      <div>
        <p>Most Scala applications are large scale and need to be deployed in the cloud. In this context, automated deployment is of paramount importance. In this talk I will introduce how you can automate the build and the management of a BigData environment in Amazon AWS, with the help of Scala tools like SBT, Ammonite and Zeppelin and many libraries available in the wild.</p>
      </div>
  },
  gurnell: {
    name: 'Dave Gurnell',
    company: 'Underscore',
    pictureUrl: require('assets/images/speakers/gurnell.jpg'),
    color: '#1E9481',
    bio:
      <div>
        <p>Dave is a Scala consultant and developer working for Underscore in London, UK.</p>
        <p>He is the author and co-author of several books on Scala including the <i>Type Astronaut's Guide to Shapeless and Advanced Scala with Cats</i>.</p>
        <p>He has spoken on Scala and functional programming at numerous conferences worldwide, including Scala World, Scala Days, Scala Exchange, and ICFP.</p>
      </div>,
    title: 'Macros versus Shapeless versus Code Generation: What Works, When, and How Much?',
    abstract:
      <div>
        <p>
          In this talk we will compare three techniques for meta-programming in Scala: macros, shapeless, and code generation. Through a sequence of simple examples we will attempt to characterise the relative pros and cons of each each technique, where they become appropriate, and when they might turn around and bite you.
        </p>
        <p>
          We can solve many Scala programming problems using simple tools: algebraic data types, higher order functions, and type classes. Sometimes, however, the code becomes verbose or unwieldy, and we search for ways to make our code cleaner and more maintainable. “Meta-programming” is a broad term describing techniques for generating code using code, but the meta programming techniques listed above could not be more different. Sometimes, being able to identify the correct technique may save hours of frustration attempting to go down blind alleys. This is the problem we are trying to solve in this talk.
        </p>
        <p>
          The talk is aimed at intermediate Scala developers who have a basic awareness of each technique. You don’t need to know shapeless or macro programming to benefit.
        </p>
      </div>
  }
};
