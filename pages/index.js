import { useRef } from 'react';

import HeaderNavbar from './components/Navbar';
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
        
        <SectionTwoBg >
          <Windowmint></Windowmint>
          <Sectiontwoslide>
          </Sectiontwoslide>
        </SectionTwoBg>
        
        <Foot></Foot>
    
      </div>
    </>
  );
}
