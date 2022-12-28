import * as React from 'react'
import * as HeroIconOutline from '@heroicons/react/24/outline'
import * as HeroIconSolid from '@heroicons/react/24/solid'
import * as HeroIconMini from '@heroicons/react/20/solid'
import { IconList } from '.'

interface IconPickerItemProps {
  icon: IconList
  library: 'outline' | 'solid' | 'mini'
  size?: number
  color?: string
  onClick?: (icon: string) => void
}

const IconPickerItem: React.FC<IconPickerItemProps> = ({
  icon,
  library,
  size = 6,
  onClick,
}) => {
  const libraryToUse =
    library === 'outline'
      ? HeroIconOutline
      : library === 'solid'
      ? HeroIconSolid
      : HeroIconMini
  const iconDiv = !!icon ? React.createElement(libraryToUse[icon]) : <div />
  return (
    <div
      onClick={() => !!onClick && onClick(icon)}
      className={`w-${size} h-${size} col-span-1`}
    >
      {iconDiv}
    </div>
  )
}

export { IconPickerItem }
