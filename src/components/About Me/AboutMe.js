import React from 'react'

const AboutMe = () => {
  return (
    <div>
        <h3 className='m-4 p-4 text-center text-2xl italic'>"Develop a passion for learning. If you do, you will never cease to grow."</h3>
        <div className='flex'>
            <div className='m-4 p-4 flex flex-wrap justify-between items-center'>
              <img className="w-auto h-auto" alt="computer_image" src={require('../../utils/computer_1.jpeg')}/>
              <img className="pt-80 w-auto h-auto" alt="computer_image" src={require('../../utils/book1.jpeg')}/>
              <img className="w-auto h-auto" alt="computer_image" src={require('../../utils/computer5.png')}/>
              <img className="pb-96 w-auto h-auto" alt="computer_image" src={require('../../utils/computer4.jpeg')}/>
              <img className="pb-96 w-auto h-auto" alt="computer_image" src={require('../../utils/table_tennis.jpeg')}/>
            </div>
            <div className="m-8 p-8 text-justify relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
              <p className='m-auto indent-8 text-3xl'>
              The above quote is the reason why I believe I am good at my profession.
              As a software engineer, everyday learning has become a part of my life.
              Weather learning technical skills such as programming languages, new software tools, algorithms or soft skills, nor a single day goes without learning.
              Subsequently, I have developed passion not only for computers but also for learning.
              Thus, I believe that learning helps me to grow.
              Learning skills and then applying those to make innovative projects will always remain a real joy for me.
              </p>
              <p className='m-auto indent-8 text-3xl'>Apart from being on my laptop, I am also an avid book reader. I have read tons of books from my childhood.</p>
              <p className='m-auto indent-8 text-3xl'>
              When I am not in mood of bieng a techie or a bookworm, I like to play Table Tennis which helps me to rejuvenate my energy.
              </p>
            </div>
           
        
      
        </div>
    </div>


  )
}

export default AboutMe