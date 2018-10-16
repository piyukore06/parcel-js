// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';
import './../node_modules/prismjs/themes/prism.css';
import './here.css';

// Import theme
import createTheme from "spectacle/lib/themes/default";
import Parcel from "./parcel";

import imageSrc from './../assets/2.jpeg';
import twitter from './../assets/twitter.png';
import frontend from './../assets/frontend.png';
import github from './../assets/github.png';
import treeShaking from './../assets/tree-shaking.png';
import treeShaking2 from './../assets/tree-shaking-2.jpg';
import devExp from './../assets/dev-exp.png';
import blazing from './../assets/blazing-fast.jpg';
import automatic from './../assets/automatic.gif';
import bundles from './../assets/know-your-bundles.jpg';
import mklogo from './../assets/mklogo.png';
import benchmark from './../assets/benchmarks.png';

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#03A9FC"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const backgroundStyle = {
  position: 'relative'
}

const absolute = (clipRight = 1000) => ({
  position: 'absolute',
  clip: 'rect(0, '+ clipRight + 'px, 600px, 0)',
  top: '-270px',
  left: '0',
  transition: '0.3 all ease-in-out'
});

const clip = [375, 567, 765, 1000];

export default class Presentation extends React.Component {


  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="tertiary">
            Parcel JS
          </Heading>
          <Heading size={4} fit lineHeight={1} textColor="secondary">
            The new kid on the block!!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            
          </Text>
        </Slide>
        <Slide transition={["fade"]} textColor="tertiary" bgColor="primary">
        <Layout>
            <Fill>
              <Heading
                size={4}
                margin={10}
              >
                Priyanka
              </Heading>
              <p style={{color: '#1F2022'}}>Frontend Technical Lead </p>
              <img src={mklogo} style={{paddingRight: '3px'}} width="70" alt=""/>
              <p>--</p>
              <Heading
                size={6}
                margin={30}
              >
                @piyukore06
              </Heading>
              <span>
                <img src={twitter} href="https://twitter.com/piyukore06" target="_blank" width="50" alt=""/>
                <img src={github} href="https://github.com/piyukore06" target="_blank" width="50" alt=""/>
              </span>
            </Fill>
            <Fill>
            <img src={imageSrc} width="350" alt=""/>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
              </Heading>
            </Fill>
          </Layout>
        </Slide>
  
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">What is Parcel?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">🤔</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Let's do some time travel, shall we??</Heading>
        </Slide>

      
        <Slide transition={["fade"]} bgColor="primary">
        <div style={backgroundStyle}>

          <img src={frontend} style={absolute(clip[0])} width="970" alt=""/>
        </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
        <div style={backgroundStyle}>

          <img src={frontend} style={absolute(clip[1])} width="970" alt=""/>
        </div>
        </Slide>
      
        <Slide transition={["fade"]} bgColor="primary">
        <div style={backgroundStyle}>

          <img src={frontend} style={absolute(clip[2])} width="970" alt=""/>
        </div>
        </Slide>
    
        <Slide transition={["fade"]} bgColor="primary">
        <div style={backgroundStyle}>

          <img src={frontend} style={absolute(clip[3])} width="970" alt=""/>
        </div>
        </Slide>
    
        <Slide transition={["fade"]} bgColor="primary">
          <Parcel />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">So, What Parcel offers?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Zero Config 0️⃣👌🏻</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Automatic Transforms 🐠</Heading>
          <List ordered textColor="secondary">
            <ListItem>CSS</ListItem>
            <ListItem>SCSS</ListItem>
            <ListItem>Babel 7</ListItem>
            <ListItem>Post CSS</ListItem>
            <ListItem>PostHTML</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>Pug</ListItem>
            <ListItem>JSX for Rect and Preact</ListItem>
            <ListItem>Minification</ListItem>
          </List>
        </Slide>

        
        <Slide transition={["fade"]} bgColor="primary" textColor  ="tertiary">
          <Heading size={4} textColor="secondary">Benchmarks 🚀</Heading>
          <img src={benchmark} width="670" alt=""/>

        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor  ="tertiary">
          <Heading size={4} textColor="secondary">Hot module Replacement 🔥</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor  ="tertiary">
          <Heading size={4} textColor="secondary">Automatic dependancy installs</Heading>
          <img src={automatic} style={backgroundStyle} width="900" alt=""/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor  ="tertiary">
          <Heading size={4} textColor="secondary">It's blazing fast 🚀</Heading>
          <img src={blazing} width="800" alt=""/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
           <Heading size={4} textColor="secondary">Tree Shaking 🌲</Heading>

          <List ordered textColor="secondary">
            <ListItem>Hoisting Phase</ListItem>
            <ListItem>Concatenation Phase</ListItem>
            <ListItem>Linking Phase</ListItem>
            <ListItem>Elimination Phase</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor ="tertiary">
          <img src={treeShaking} width="400" alt=""/>
          <Text textColor="secondary" size={4} >
            This makes your app sizes significantly smaller by eliminating tons of code that isn't used.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor ="tertiary">
          <Heading size={4} textColor="secondary"> Zero Configuration Code Splitting ✂️</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor ="tertiary">
          <Heading size={4} textColor="secondary"> Magic in Production 🎩 </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor  ="tertiary">
          <Heading size={6} textColor="secondary">Want to know what's in your bundles, Parcel's got you!!</Heading>
          <img src={bundles} width="800" alt=""/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor ="tertiary">
          <Heading size={4} textColor="secondary"> Demo 🧙🏻‍♀️</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor  ="tertiary">
          <Heading size={4} textColor="secondary">The BEST part is Dev Experience 💁🏻‍</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor  ="tertiary">
          <Heading size={4} textColor="secondary"> Parcel 2 is coming!!🌈 </Heading>
          <List ordered textColor="secondary">
            <ListItem>Multi-target builds</ListItem>
            <ListItem>Automatic code splitting</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
          Sometimes things change. You don’t always have to incorporate every single new thing into your arsenal, but you should at least keep an open mind.
          </BlockQuote>
            <Quote>Thank you 🙏🏻</Quote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <Heading size={4} textColor="primary"> Resources 📚 </Heading>
          <List ordered textColor="primary">
            <ListItem><a href="https://github.com/parcel-bundler/parcel">Parcel github</a></ListItem>
            <ListItem><a href="https://github.com/parcel-bundler/awesome-parcel">Awesome Parcel</a></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
