
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './Carousel.css'; // Import your custom CSS file for additional styling

const CarouselComponent = () => {
  const customArrowStyles = {
    position: 'absolute',
    top: 'calc(92% - 25px)', // Vertically center the arrows
    color: 'white',
    cursor: 'pointer',
    zIndex: 2,
    transition: 'opacity 0.3s',
    backgroundColor: 'rgba(0203, 195, 227, 0.5)',
    padding: '12px',
    borderRadius: '50%',
    fontSize: '32px',
    width: '50px', // Set the width and height to create a circular shape
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    

  };




  const renderCustomPrevArrow = (clickHandler, hasPrev, label) => (
    <button
      onClick={clickHandler}
      title={label}
      style={{
        ...customArrowStyles,
        left: 'calc(50% - 45px)', // Adjust the horizontal position for the left arrow
        
      }}
    >
      &lt;
    </button>
  );

  const renderCustomNextArrow = (clickHandler, hasNext, label) => (
    <button
      onClick={clickHandler}
      title={label}
      style={{
        ...customArrowStyles,
        left: 'calc(49% + 35px)', // Adjust the horizontal position for the right arrow
      }}
    >
      &gt;
    </button>
  );

  return (
    <div className="carousel-container">
      <div className='bg-purple-950 flex justify-center lg:text-6xl text-4xl font-bold text-white  p-5 lg:py-14 lg:pt-16 m-0'>Impact we made </div>


      <Carousel className='pb-2 '
        showArrows={false} // Hide default arrows
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        renderIndicator={() => null} // Remove the indicator dots
        renderArrowPrev={renderCustomPrevArrow}
        renderArrowNext={renderCustomNextArrow}
      >

        {/* first slide */}
        <div className="carousel-slide h-[600px] md:h-96 bg-purple-950 text-white m-0">
          <div className='flex justify-center flex-col '>
            <div className='flex flex-col lg:flex-row w-full'>
              <div className='flex flex-col w-full  lg:w-2/3'>    <div className='flex flex-row justify-center '>

                <svg xmlns="http://www.w3.org/2000/svg" width="429" height="27.967" viewBox="0 0 429 27.967">
                  <g id="Group_28814" data-name="Group 28814" transform="translate(-326.82 -5974)">
                    <g id="Group_28813" data-name="Group 28813" transform="translate(300 5992.929)">
                      <line id="Line_7" data-name="Line 7" x2="169.097" transform="translate(26.82)" fill="none" stroke="#fff" stroke-width="1"></line>
                      <line id="Line_8" data-name="Line 8" x2="162.418" transform="translate(293.402)" fill="none" stroke="#fff" stroke-width="1"></line>
                    </g>
                    <g id="Group_28812" data-name="Group 28812" transform="translate(526.065 5974)">
                      <path id="Path_43789" data-name="Path 43789" d="M370.759,102.422a8.606,8.606,0,1,0,11.776-8.976l4.828-9.965a.918.918,0,0,0-.785-1.3h-3.3a.837.837,0,0,0-.706.356L372.212,96.609a8.979,8.979,0,0,0-1.453,5.813Z" transform="translate(-370.72 -82.176)" fill="#0f9d58"></path>
                      <path id="Path_43790" data-name="Path 43790" d="M92.139,110.133a8.672,8.672,0,0,0,3.65-16.687l4.828-9.965a.918.918,0,0,0-.785-1.3h-3.3a.837.837,0,0,0-.706.356L85.467,96.609a8.71,8.71,0,0,0,6.673,13.524Z" transform="translate(-63.878 -82.176)" fill="#0f9d58"></path>
                    </g>
                  </g>
                </svg>
              </div>
                <div><p className='text-2xl m-3 font-sans my-9 lg:mx-36 lg:text-3xl md:h-28'>Best pricing along with an easy-to-use platform made managing team insurance much easier for startups like us.</p></div>
              </div>
              <div className='border-2 border-yellow-50  w-56 mx-auto opacity-50  lg:w-0  lg:h-32 lg:mt-10 '></div>
              <div className='flex flex-col items-center md:flex-row  w-full lg:w-1/3'>


                <img alt="Aquibur Rahman" loading="lazy" src="https://global-uploads.webflow.com/6145f7146a1337faae24d53f/6492978b5674f58481b2777c_Aquibur%20Rahman.png" aria-hidden="true" className='lg:ml-10  lg:mt-24  bg-green-500 rounded-full' style={{ height: "120px", width: "120px", marginTop: "40px", marginBottom: "10px", border: "5px solid white" }} />

                <div className='flex flex-col lg:flex-col justify-start items-start lg:mt-10 font-bold'>
                  <div className='flex justify-center '>
                    Aquibur Rahman
                  </div>
                  <div className='flex justify-center opacity-50'>CEO, Mailmodo</div>

                  <div className='flex justify-center'><img alt="Mailmodo logo" loading="lazy" src="https://global-uploads.webflow.com/6145f7146a1337faae24d53f/63db805828196762a2e3e35b_mailmodo-logo.svg" class="client-company-logo" className='flex justify-center' style={{ height: "90px", width: "120px", marginTop: "20px" }}></img></div>
                </div>
              </div>
            </div>

          </div>


        </div>


        {/* second slide */}
        <div className="carousel-slide h-[600px] md:h-96 bg-purple-950 text-white m-0">


          <div className='flex justify-center flex-col '>
            <div className='flex flex-col lg:flex-row w-full'>
              <div className='flex flex-col w-full  lg:w-2/3'>
                <div className='flex flex-row justify-center '>

                  <svg xmlns="http://www.w3.org/2000/svg" width="429" height="27.967" viewBox="0 0 429 27.967">
                    <g id="Group_28814" data-name="Group 28814" transform="translate(-326.82 -5974)">
                      <g id="Group_28813" data-name="Group 28813" transform="translate(300 5992.929)">
                        <line id="Line_7" data-name="Line 7" x2="169.097" transform="translate(26.82)" fill="none" stroke="#fff" stroke-width="1"></line>
                        <line id="Line_8" data-name="Line 8" x2="162.418" transform="translate(293.402)" fill="none" stroke="#fff" stroke-width="1"></line>
                      </g>
                      <g id="Group_28812" data-name="Group 28812" transform="translate(526.065 5974)">
                        <path id="Path_43789" data-name="Path 43789" d="M370.759,102.422a8.606,8.606,0,1,0,11.776-8.976l4.828-9.965a.918.918,0,0,0-.785-1.3h-3.3a.837.837,0,0,0-.706.356L372.212,96.609a8.979,8.979,0,0,0-1.453,5.813Z" transform="translate(-370.72 -82.176)" fill="#0f9d58"></path>
                        <path id="Path_43790" data-name="Path 43790" d="M92.139,110.133a8.672,8.672,0,0,0,3.65-16.687l4.828-9.965a.918.918,0,0,0-.785-1.3h-3.3a.837.837,0,0,0-.706.356L85.467,96.609a8.71,8.71,0,0,0,6.673,13.524Z" transform="translate(-63.878 -82.176)" fill="#0f9d58"></path>
                      </g>
                    </g>
                  </svg>

                </div>
                <div><p className='text-2xl m-3 font-sans my-9 lg:mx-36 lg:text-3xl md:h-28'>The attention to detail and response time of Pazcare has made us their customer for life.</p></div>
              </div>


              <div className='border-2 border-yellow-50  w-56 mx-auto opacity-50  lg:w-0  lg:h-32 lg:mt-10 '></div>


              <div className='flex  flex-col items-center lg:flex-row  w-full lg:w-1/3'>
                <img alt="Supriya Paul" loading="lazy" src="https://global-uploads.webflow.com/6145f7146a1337faae24d53f/6492978c1371d99bc9a7a80e_Supriya%20Paul-2.png" aria-hidden="true" className='lg:ml-10 flex flex-col lg:mt-24  bg-yellow-500 rounded-full' style={{ height: "120px", width: "120px", marginTop: "40px", marginBottom: "10px", border: "5px solid white" }} />
                <div className='flex   flex-col lg:flex-col  lg:ml-2 lg:mt-10 font-bold'> <div className='flex justify-center '>
                  Supriya Paul
                </div>
                  <div className='flex justify-center opacity-50'>CEO, Josh Talks</div>

                  <div className='flex justify-center'><img alt="Joshtalks" loading="lazy" src="https://global-uploads.webflow.com/6145f7146a1337faae24d53f/63db54f644241f42f09aa716_Joshtalks.png" class="client-company-logo" aria-hidden="true" className='flex justify-center' style={{ height: "100px", width: "150px", marginTop: "20px" }} /></div>
                </div>
              </div>
            </div>

          </div>


        </div>


        {/* third slide */}
        <div className="carousel-slide h-[600px] md:h-96 bg-purple-950 text-white" >

          <div className='flex justify-center flex-col '>
            <div className='flex flex-col lg:flex-row w-full'>
              <div className='flex flex-col w-full  lg:w-2/3'>    <div className='flex flex-row justify-center '>

                <svg xmlns="http://www.w3.org/2000/svg" width="429" height="27.967" viewBox="0 0 429 27.967" aria-hidden="true">
                  <g id="Group_28814" data-name="Group 28814" transform="translate(-326.82 -5974)" aria-hidden="true">
                    <g id="Group_28813" data-name="Group 28813" transform="translate(300 5992.929)" aria-hidden="true">
                      <line id="Line_7" data-name="Line 7" x2="169.097" transform="translate(26.82)" fill="none" stroke="#fff" stroke-width="1" aria-hidden="true"></line>
                      <line id="Line_8" data-name="Line 8" x2="162.418" transform="translate(293.402)" fill="none" stroke="#fff" stroke-width="1" aria-hidden="true"></line>
                    </g>
                    <g id="Group_28812" data-name="Group 28812" transform="translate(526.065 5974)" aria-hidden="true">
                      <path id="Path_43789" data-name="Path 43789" d="M370.759,102.422a8.606,8.606,0,1,0,11.776-8.976l4.828-9.965a.918.918,0,0,0-.785-1.3h-3.3a.837.837,0,0,0-.706.356L372.212,96.609a8.979,8.979,0,0,0-1.453,5.813Z" transform="translate(-370.72 -82.176)" fill="#0f9d58" aria-hidden="true"></path>
                      <path id="Path_43790" data-name="Path 43790" d="M92.139,110.133a8.672,8.672,0,0,0,3.65-16.687l4.828-9.965a.918.918,0,0,0-.785-1.3h-3.3a.837.837,0,0,0-.706.356L85.467,96.609a8.71,8.71,0,0,0,6.673,13.524Z" transform="translate(-63.878 -82.176)" fill="#0f9d58" aria-hidden="true"></path>
                    </g>
                  </g>
                </svg>

              </div>
                <div><p className='text-2xl m-3 font-sans my-9 lg:mx-36 lg:text-3xl md:h-28'>GMC + wellness plan is of great help to my team during these tough times. We are surely a happy client. Great job guys!</p></div>
              </div>
              <div className='border-2 border-yellow-50  w-56 mx-auto opacity-50  lg:w-0  lg:h-32 lg:mt-10 '></div>
              <div className='flex flex-col items-center    lg:flex-row  w-full lg:w-1/3'>

                <img alt="Nikunj Verma" loading="lazy" src="https://global-uploads.webflow.com/6145f7146a1337faae24d53f/6492978a24f87f9592359364_Nikunj%20Verma.png" className='lg:ml-10  lg:mt-24  bg-blue-500 rounded-full' style={{ height: "120px", width: "120px", marginTop: "40px", marginBottom: "10px", border: "5px solid white" }} />

                <div className='flex   flex-col lg:flex-col  lg:ml-2 lg:mt-10 font-bold'> <div className='flex justify-center '>
                  Nikunj Verma
                </div>
                  <div className='flex justify-center opacity-50'>CEO, Cutshort</div>

                  <div className='flex justify-center'><img alt="Cutshort logo" loading="lazy" src="https://global-uploads.webflow.com/6145f7146a1337faae24d53f/63dca08a1dd7450b4aa5eff7_Cutshort%20-%20white.png" class="client-company-logo" className='flex justify-center' style={{ height: "90px", width: "120px", marginTop: "20px" }} /></div>
                </div>
              </div>
            </div>

          </div>


        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;