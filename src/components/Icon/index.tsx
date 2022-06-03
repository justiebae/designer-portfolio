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

interface IIconProps {
  name: string
}

export default function Icon({ name, ...props }: IIconProps) {
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

    default: 
      return null
  }
}
