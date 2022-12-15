import './index.scss'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
 import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
    const [letterClass,setletterClass]=useState('text-animate')

    const refForm = useRef()

    useEffect(()=>{
        setTimeout(()=>{
        return setletterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_x75wvx8', 'template_yv3tc6a', refForm.current, 'Ju5HPsqH6jl2zAQaZ')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
    <div className='container contact-page'> 
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ', 'M','e']} idx={15}/>
            </h1>
            <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Poornima Dubey,
          <br />
          Indai,
          <br />
          NH 62, Surpura Bypass Rd, Karwar, Rajasthan 342030<br />
          Jodhpur<br />
          <br />
          <span>poornimadubey20@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[26.371466068238327, 73.06392549932079]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[26.371466068238327, 73.06392549932079]}>
              <Popup>Poornima lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
  </div>
        </div> 
        
    <Loader type='pacman'/>
      
   
    </>
  )
}

export default Contact
