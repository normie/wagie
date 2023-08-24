import Head from 'next/head'
import Image from 'next/image'

import Headerbar from './components/Header.js';
import SectionOneBg from './components/Sectionone';
import Mintbar from './components/Sectiontwobar';
import SectionTwoBg from './components/Sectiontwocontainer';
import Windowmint from './components/Mintwindow';
import Sectiontwoslide from './components/Sectiontwos';
import Foot from './components/Footer';

export default function Home() {
  return (
    <>
      <div className="App">
        <Headerbar></Headerbar>
        <SectionOneBg>
        </SectionOneBg>
          
        <Mintbar></Mintbar>
        
        <SectionTwoBg>
          <Windowmint></Windowmint>
          <Sectiontwoslide>
          </Sectiontwoslide>
        </SectionTwoBg>
        
        <Foot></Foot>
    
      </div>
    </>
  );
}
