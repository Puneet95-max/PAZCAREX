import { useState } from 'react';
import { motion } from 'framer-motion';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Image from 'next/image';

const About = () => {
  const [selectedContent, setSelectedContent] = useState('content1');

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <>
      <main className="h-screen flex flex-row p-2" style={{ backgroundImage: 'url("https://assets-global.website-files.com/6145f7146a1337faae24d53f/649936135cffdde3689065e0_background%20(1).svg")' }}>
        <div className='flex flex-col w-2/6 mt-24  py-7'>
          <p className='text-4xl font-serif mx-10 my-5 font-bold px-14'>We've got everything in employee benefits.</p>
          <p className='mx-10 px-14 my-4'>Create a holistic benefits program by curating from our offerings.</p>
          <div className='flex flex-col p-2 my-3 '>
            <button
              onClick={() => handleButtonClick('content1')}
              className={`border-2 py-4  rounded-full text-4xl mx-10 flex flex-row justify-center my-3 font-serif ${selectedContent === 'content1' ? 'border-purple-950 hover:bg-purple-950 hover:border-purple-950 bg-purple-950 text-white' : 'border-purple-800 hover:border-purple-800 hover:bg-purple-100 text-purple-950'}`}
            >
              <span className=''>
                <Image
                  src='/logo.png'
                  width={50}
                  height={50}
                  alt='image not working '
                  className=''
                />
              </span>
              <span className='font-bold'>paz </span> &nbsp; insurance
            </button>
            <button
              onClick={() => handleButtonClick('content2')}
              className={`border-2 py-5  rounded-full text-4xl mx-10 flex flex-row justify-center my-3  font-serif ${selectedContent === 'content2' ? 'border-purple-950 hover:border-purple-950 bg-purple-950 text-white' : 'border-purple-800 hover:border-purple-800 text-purple-950 hover:bg-purple-100'}`}
            >
              <span className=''> <Image
                src='/logo.png'
                width={50}
                height={50}
                alt='image not working '
                className=''
              />
              </span>
              <span className='font-bold'>paz </span> &nbsp; wellness
            </button>
            <button
              onClick={() => handleButtonClick('content3')}
              className={`border-2 py-4  rounded-full text-4xl mx-10 flex flex-row justify-center my-3  font-serif ${selectedContent === 'content3' ? 'border-purple-950 hover:border-purple-950 bg-purple-950 text-white' : 'border-purple-800 hover:border-purple-800 text-purple-950 hover:bg-purple-100'}`}
            >
              <span className=''> <Image
                src='/logo.png'
                width={50}
                height={50}
                alt='image not working '
                className=''
              />
              </span>
              <span className='font-bold'>paz </span> &nbsp;  finance
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" w-4/6"
        >
          {selectedContent === 'content1' && <Content1 />}
          {selectedContent === 'content2' && <Content2 />}
          {selectedContent === 'content3' && <Content3 />}
        </motion.div>
      </main>
    </>
  );
};

export default About;
