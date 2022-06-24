import React from 'react';
import PsIcon from './icons/PsIcon';
import AeIcon from './icons/AeIcon';
import AiIcon from './icons/AiIcon';
import BlenderIcon from './icons/BlenderIcon';
import FigmaIcon from './icons/FigmaIcon';
import PremierIcon from './icons/PrIcon';
import TelegramIcon from './icons/TelegramIcon';
import SignatureIcon from './icons/SignatureIcon';
import SpaceMapIcon from './icons/SpaceMapIcon';
import FilledStarIcon from './icons/FilledStarIcon';
import NotFoundIcon from './icons/NotFoundIcon';
import CurveIcon from './icons/CurveIcon';
import KeyboardIcon from './icons/KeyboardIcon';
import HeadphonesIcon from './icons/HeadphonesIcon';
import MouseIcon from './icons/MouseIcon';
import MultiStarIcon from './icons/MultiStarIcon';
import SaturnIcon from './icons/SaturnIcon';
import MoonIcon from './icons/MoonIcon';
import NeptunIcon from './icons/NeptunIcon';
import AngleStarIcon from './icons/AngleStarIcon';
import CurvesIcon from './icons/CurvesIcon';

interface IIconProps {
  name: string
}

export default function Icon({ name, ...props }: IIconProps): JSX.Element {
  switch (name) {
    case 'ps':
      return <PsIcon />
    case 'ae':
      return <AeIcon />
    case 'ai':
      return <AiIcon />
    case 'blender':
      return <BlenderIcon />
    case 'figma':
      return <FigmaIcon />
    case 'premier':
      return <PremierIcon />
    case 'telegram':
      return <TelegramIcon />
    case 'signature':
      return <SignatureIcon />
    case 'spaceMap':
      return <SpaceMapIcon />
    case 'filledStar':
      return <FilledStarIcon />
    case 'notFound':
      return <NotFoundIcon />
    case 'curve':
      return <CurveIcon />
    case 'keyboard':
      return <KeyboardIcon />
    case 'mouse':
      return <MouseIcon />
    case 'headphones':
      return <HeadphonesIcon />
    case 'multiStar':
      return <MultiStarIcon />
    case 'saturn':
      return <SaturnIcon />
    case 'moon':
      return <MoonIcon />
    case 'neptun':
      return <NeptunIcon />
    case 'angleStar':
      return <AngleStarIcon />
    case 'curves':
      return <CurvesIcon />

    default: 
      return <></>
  }
}
