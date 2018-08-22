---
path: "/dropdown/props"
component: "DropDown"
type: "atom"
title: "DropDown"
---

Use `DropDown` component to create a select field.

| Prop | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| options | options to be shown for the select field | array of objects; each object should contain label and value | [] |
| icon | component to render icon based on user's action | Component | Component which renders toggleable `caret` icon |
| containerProps | props for dropdown container. Any prop related to `Relative` component can be passed | object | null |
| fieldContainerProps | props for placeholder & icon container. Any prop related to `Card` component can be passed | object | null |
| placeholderProps | props for placeholder text. Any prop related to `Text.span` component can be passed | object | null |
| menuContainerProps | props for the container of list of options/menus. Any prop related to `Card` component can be passed | object | null |
| optionProps | props for the option. Refer `Relative` for props | object | null |

