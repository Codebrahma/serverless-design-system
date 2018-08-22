---
path: "/dropdown/props"
component: "dropdown"
type: "atom"
title: "DropDown"
---

Use `DropDown` component to create a select field.

| Prop | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| options | options to be shown for the select field | array of objects; each object should contain label and value | [] |
| icon | component to render icon based on user's action | React.Component | Component which renders toggleable `caret` icon |
| containerProps | props for dropdown container. Refer `Relative` for props | object | null |
| fieldContainerProps | props for placeholder & icon container. Refer `Card` for props | object | null |
| placeholderProps | props for placeholder text. Refer `Text.span` for props | object | null |
| menuContainerProps | props for the container of list of options/menus. Refer `Card` for props  | object | null |
| optionProps | props for the option. Refer `Relative` for props | object | null |

