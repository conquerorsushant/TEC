import React, { useState, useEffect } from 'react';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';
import HighlightSharpIcon from '@mui/icons-material/HighlightSharp';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../Images/e1b955aa2378d9a3c4cc0f5674941d43.jpg';
import image2 from '../Images/download (1).jpeg';
import image3 from '../Images/Bundelkhand-university1.jpg';

export default function FrontPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Automatically change the slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: image1,
      title1: 'Announcement',
      icon1: <AnnouncementIcon style={{ fontSize: '3rem' }} />,
      content1: 'This is the first alert message. We are going to conduct the national level competition. Remember that TEM operation can be highly technical and requires a thorough understanding of the instrument and materials being studied. Always follow the safety protocols and guidelines provided by your institution or laboratory, and seek guidance from experienced researchers or technicians when using a TEM for materials characterization.',
      title2: 'Events',
      icon2: <EmojiEventsSharpIcon style={{ fontSize: '3rem' }} />,
      content2: 'Remember that TEM operation can be highly technical and requires a thorough understanding of the instrument and materials being studied. Always follow the safety protocols and guidelines provided by your institution or laboratory, and seek guidance from experienced researchers or technicians when using a TEM for materials characterization.',
      title3: 'Highlights',
      icon3: <HighlightSharpIcon style={{ fontSize: '3rem' }} />,
      content3: 'Remember that TEM operation can be highly technical and requires a thorough understanding of the instrument and materials being studied. Always follow the safety protocols and guidelines provided by your institution or laboratory, and seek guidance from experienced researchers or technicians when using a TEM for materials characterization.',
    },
    {
      image: image2,
      title1: 'Announcement',
      icon1: <AnnouncementIcon style={{ fontSize: '3rem' }} />,
      content1: 'This is the first alert message. We are going to conduct the national level competition. Remember that TEM operation can be highly technical and requires a thorough understanding of the instrument and materials being studied. Always follow the safety protocols and guidelines provided by your institution or laboratory, and seek guidance from experienced researchers or technicians when using a TEM for materials characterization.',
      title2: 'Events',
      icon2: <EmojiEventsSharpIcon style={{ fontSize: '3rem' }} />,
      content2: 'Remember that TEM operation can be highly technical and requires a thorough understanding of the instrument and materials being studied. Always follow the safety protocols and guidelines provided by your institution or laboratory, and seek guidance from experienced researchers or technicians when using a TEM for materials characterization.',
      title3: 'Highlights',
      icon3: <HighlightSharpIcon style={{ fontSize: '3rem' }} />,
      content3: 'Remember that TEM operation can be highly technical and requires a thorough understanding of the instrument and materials being studied. Always follow the safety protocols and guidelines provided by your institution or laboratory, and seek guidance from experienced researchers or technicians when using a TEM for materials characterization.',
    },
    {
      image: image3,
      title1: 'Announcement',
      icon1: <AnnouncementIcon style={{ fontSize: '3rem' }} />,
      content1: 'This is the first alert message. We are going to conduct the national level competition. Remember that TEM operation can be highly technical and requires a thorough understanding of the instrument and materials being studied. Always follow the safety protocols and guidelines provided by your institution or laboratory, and seek guidance from experienced researchers or technicians when using a TEM for materials characterization.',

      title2: 'Events',
      icon2: <EmojiEventsSharpIcon style={{ fontSize: '3rem' }} />,
      content2: 'Remember that TEM operation can be highly technical and requires a thorough understanding of the instrument and materials being studied. Always follow the safety protocols and guidelines provided by your institution or laboratory, and seek guidance from experienced researchers or technicians when using a TEM for materials characterization.',
      title3: 'Highlights',
      icon3: <HighlightSharpIcon style={{ fontSize: '3rem' }} />,
      content3: 'Remember that TEM operation can be highly technical and requires a thorough understanding of the instrument and materials being studied. Always follow the safety protocols and guidelines provided by your institution or laboratory, and seek guidance from experienced researchers or technicians when using a TEM for materials characterization.',
    },
  ];

  return (
    <div className="min-h-screen relative" style={{height:"50vh",objectFit:"fill"}}>
      {/* Background Carousel */}
      <Carousel
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={true}
        selectedItem={currentSlide}
        onChange={(slide) => setCurrentSlide(slide)}
        className="w-full h-full"
        style={{ zIndex: -1 }}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={`Image ${index + 1}`} className="w-full h-full" />
            <div className="absolute top-0 right-0 w-1/3 h-full flex flex-col items-end justify-center text-white text-center" style={{marginRight:"5rem",marginBottom:"8rem"}}>
  <div className="mb-6" style={{ border: "2px solid black", color: "black",backgroundColor:"blue",borderRadius:"38px 0px 0px 0px"}}>
    <h1 className="font-sans text-xl font-bold">
      {slide.icon1}
      {slide.title1}
    </h1>
    <p className="font-sans text-base">
      {slide.content1}
    </p>
  </div>

  <div className="mb-6"  style={{ border: "2px solid black", color: "black",backgroundColor:"blue",borderRadius:"38px 0px 0px 0px"}}>
    <h1 className="font-sans text-xl font-bold">
      {slide.icon2}
      {slide.title2}
    </h1>
    <p className="font-sans text-base">
      {slide.content2}
    </p>
  </div>

  <div className='mb-6'  style={{ border: "2px solid black", color: "black",backgroundColor:"blue",borderRadius:"38px 0px 0px 0px"}}>
    <h1 className="font-sans text-xl font-bold">
      {slide.icon3}
      {slide.title3}
    </h1>
    <p className="font-sans text-base">
      {slide.content3}
    </p>
  </div>
</div>


          </div>
        ))}
      </Carousel>
    </div>
  );
}
