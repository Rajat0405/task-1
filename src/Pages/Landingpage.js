import React ,{useState}from 'react';
import '../style.css'

import ModalCards from '../Components/ModalCards';
import { PopUpModal } from '../Components/PopUpModal';

 
 
const App = () => {
  
 
const [isModalOpen, setIsModalOpen] = useState(false);
 

 
  const Modal = [
    { id: 1, title: 'Intuitive Admin Interface', content: 'So easy to use, so easy to customize. You are going to love this content you build better with ButterCMS', logo: 'https://img.icons8.com/cotton/128/folder-invoices--v1.png' },
    { id: 2, title: 'Handy Integration With React.js', content: 'Our React CMS has a simple content API and drop-in React SDK that makes the magic happen in minutes not hours', logo: 'https://img.icons8.com/ios/50/cms.png' },
    { id: 3, title: 'A truly zero-maintanance solution', content: 'With ButterCMS, you will never worry about security upgrades, hosting and performance again', logo: 'https://img.icons8.com/ios/50/apple-settings.png' },
  ];
 
 
  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };
 
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <div>
     
      
      <div className='middle-div'>
        <h1>A React CMS like no other</h1>
        <h3>Meet the headless React CMS that integrates with your application using a straightforward API. Smooth, simple, and tasty content integration -- that's Butter.</h3>
        <button className="middle-btn" type="button" onClick={handleGetStartedClick}>Get Started For Free</button>
        {isModalOpen && (
        <PopUpModal 
        onClose={handleCloseModal}
        modalContent={{
          title:'Please Enter The Valid Details'
        }
          

        }
      />
      )}
      </div>
      <ModalCards cards={Modal} />
    </div>
  );
};
 
export default App;