# React HeroIcons Picker

## Overview

react-heroicons-picker is a strongly typed React icon picker for HeroIcons icons. It contains both a picker component and an icon renderer.

## Motivation

(this is from the original author of the package)

I feel like an icon picker is a pretty common requirement so I was surprised to find a lack of sufficient icon pickers in the React Ecosystem. The existing ones I found were not that great. As a result, I decided to roll my own.

## Installation

Install via npm

```cli
npm install react-heroicons-picker
```

or yarn

```cli
yarn add react-heroicons-picker
```

## Usage

The IconPicker component is just like any other picker component. The value prop is the icon that is displayed on the picker. When a new icon is selected, the onChange handler is fired.

```react
import * as React from 'react'
import { IconPicker } from 'react-heroicons-picker'

export default () => {
  const [value, setValue] = useState("")
  return (
    <IconPicker value={value} onChange={(v) => setValue(v)} library="outline" />
  )
}
```

You can also use the IconPickerItem component to render the icon. This uses react-icons under the hood.

```react
import * as React from 'react'
import { IconPickerItem } from 'react-heroicons-picker'

export default () => (
  <IconPickerItem icon="AcademicCap" library="outline" size={24} color="#000" onClick={onClick} />
  )
```

## All valid configurations/props of the package

PickerList

| Prop              | Type                | Required | Description                                                       |
| ----------------- | ------------------- | -------- | ----------------------------------------------------------------- |
| value             | string              | true     | The current font awesome icon displayed on the picker.            |
| library           | string              | true     | The icon library to use. Valid values: "outline", "solid", "mini" |
| onChange          | (v: string) => void | true     | A change handler that is executed when a new icon is selected.    |
| hideSearch        | boolean             | false    | If true, the search input is not displayed. Default is false.     |
| containerStyles   | CSSProperties       | false    | Styles for the picker container                                   |
| buttonStyles      | CSSProperties       | false    | Styles for the picker button                                      |
| buttonIconStyles  | CSSProperties       | false    | Styles for the picker button icon                                 |
| pickerIconStyles  | CSSProperties       | false    | Styles for the icons inside of the picker                         |
| searchInputStyles | CSSProperties       | false    | Styles for the search input inside of the picker                  |

PickerListItem
| Prop | Type | Required | Description |
| ---- | --- | --- | ---
| icon | string | true | The name of the icon to render. Example: "FaAdobe" |
| library | string | true | The icon library to use. Valid values: "outline", "solid", "mini" |
| size | number | false |The size of the icon. Default: 24 |
| color | string | false | The color of the icon. Default: "#000" |
| onClick | (v: string) => void | false | An onClick handler for the icon. |
| containerStyles | CSSProperties | false | An onClick handler for the icon. |

## Contribution Guide

If you are interested in contributing, please submit a PR.

### Contributors

- [Jack Merrill](https://github.com/jackmerrill)
- [Cory McAboy](https://github.com/cmcaboy)
- [Joseph Hu](https://github.com/zhhjoseph)
