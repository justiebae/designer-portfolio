import React from 'react';
import CircleButton from '../../components/CircleButton';
import './index.scss';

export default function HomePage() {
  return (
    <div className="HomePage Container Page">
      <div className="HomePage-body">
        <div className="HomePage-title Title">UI/UX Designer</div>
        <div className="HomePage-description">Анализирую, проектирую и графически прорабатываю пользовательские интерфейсы различной сложности</div>
        <div className="HomePage-signature">
          <svg width="315" height="241" viewBox="0 0 315 241" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M227.66 157.446C228.737 147.82 226.6 133.263 209.43 152.037C187.967 175.505 183.617 199.716 195.522 198.914C205.047 198.273 218.951 175.752 224.712 164.572C223.043 162.521 220.282 169.391 222.596 213.28" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
            <path d="M206.279 109.192C237.769 92.755 284.763 66.5333 307.748 35.3505C336.48 -3.62802 253.259 29.6853 259.413 70.1798C265.567 110.674 303.915 108.384 250.657 135.086" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
            <path d="M194.301 88.9409C184.816 112.575 165.033 153.288 152.533 173.847C136.908 199.547 162.805 156.156 210.74 115.374" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
            <path d="M50.1061 181.812C93.3698 137.67 205.856 40.2932 309.689 3.92529" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
            <path d="M230.404 70.0127L237.617 116.488" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
            <path d="M199.004 75.0796C213.499 45.6515 233.255 -14.2168 218.111 4.58387C199.004 28.3021 152.227 129.763 117.308 177.2C84.7008 221.497 39.5652 270.755 9.25864 215.412C-21.0479 160.07 40.8823 82.327 53.4008 95.5038C62.533 105.116 50.2749 145.129 46.8123 152.823C40.8823 166 37.7045 159.69 64.601 113.292C90.954 67.8326 130.485 37.5259 125.214 57.2911C119.943 77.0563 112.037 97.4803 77.1189 143.599" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="HomePage-button">
          <CircleButton
            path="/projects"
          >
            Посмотреть портфолио
          </CircleButton>
        </div>
      </div>
      <div className="HomePage-footer">
        <div className="HomePage-currentPlace">
          На данный момент UI/UX Designer в digital-agency Webest
        </div>
        <a href="#" rel="nooffener" target="_blank" className="HomePage-contact SocialLink">
          <div className="SocialLink-text">Для связи со мной</div>
          <div className="SocialLink-icon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.37759 15.3031C3.93515 13.9423 6.79009 12.8065 9.4576 11.665C14.0468 9.7952 18.6542 7.95782 23.3081 6.24725C24.2135 5.95578 25.8405 5.67075 26 6.96693C25.9127 8.80166 25.5533 10.6257 25.3068 12.4496C24.6812 16.4608 23.9581 20.4582 23.253 24.4561C23.0101 25.7877 21.283 26.4771 20.178 25.6249C17.5223 23.8922 14.8462 22.1763 12.2245 20.4034C11.3657 19.5604 12.162 18.3499 12.9291 17.748C15.1163 15.6658 17.436 13.8968 19.509 11.707C20.0681 10.4026 18.416 11.5019 17.871 11.8387C14.8766 13.8319 11.9555 15.9469 8.79843 17.6987C7.18581 18.5561 5.30628 17.8233 3.69439 17.3448C2.24913 16.7669 0.131287 16.1845 1.37744 15.3032L1.37759 15.3031Z" fill="#F6F6F6"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}
