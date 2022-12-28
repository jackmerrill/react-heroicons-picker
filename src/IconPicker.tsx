import { IconPickerItem, iconList } from '.'
import { useState, useEffect, useRef } from 'react'
import { IconList } from './iconType'
import * as React from 'react'

interface IconPickerProps {
  value: IconList
  library: 'outline' | 'solid' | 'mini'
  onChange: (value: IconList) => void
  hideSearch?: boolean
}

const IconPicker: React.FC<IconPickerProps> = ({
  value,
  library,
  onChange,
  hideSearch,
}) => {
  const ref = useRef(null)
  const [display, changeDisplay] = useState(false)
  const [searchString, setSearchString] = useState('')
  useEffect(() => {
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        changeDisplay(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
  const buttonClick = () => changeDisplay(!display)
  const onChangeSearch = (event: any) => {
    setSearchString(event.target.value)
  }

  return (
    <div
      className="relative min-h-[40px] rounded-md border-1 border-black justify-center items-center hover:cursor-pointer"
      ref={ref}
      onClick={() => buttonClick()}
    >
      <IconPickerItem icon={value} library={library} />
      {display && (
        <div
          className="absolute top-12 grid grid-cols-8 overflow-y-scroll bg-white p-2 max-h-96 w-32 rounded-md border-2 border-black z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {!hideSearch && (
            <input
              className="w-full col-span-full"
              onChange={onChangeSearch}
              value={searchString}
              placeholder="Search"
            />
          )}
          {iconList
            .filter((i: string) =>
              i.toLowerCase().includes(searchString.toLowerCase())
            )
            .map((icon: IconList) => (
              <IconPickerItem
                key={icon}
                library={library}
                icon={icon}
                onClick={(value: IconList) => {
                  onChange(value)
                  changeDisplay(false)
                  setSearchString('')
                }}
              />
            ))}
        </div>
      )}
    </div>
  )
}

export { IconPicker }
