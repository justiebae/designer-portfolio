import React from 'react';
import PsIcon from './icons/PsIcon';
import AeIcon from './icons/AeIcon';
import AiIcon from './icons/AiIcon';
import BlenderIcon from './icons/BlenderIcon';
import FigmaIcon from './icons/FigmaIcon';
import PremierIcon from './icons/PrIcon';

interface IIconProps {
  name: string
}

export default function Icon({ name }: IIconProps) {
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

    default: 
      return null
  }
}
