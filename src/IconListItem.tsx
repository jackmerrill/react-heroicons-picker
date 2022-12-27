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
  size,
  color,
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
      style={{ fontSize: size, color: color, padding: 2 }}
    >
      {iconDiv}
    </div>
  )
}

IconPickerItem.defaultProps = {
  color: '#000',
  size: 24,
  onClick: (_: string) => {},
}

export { IconPickerItem }
