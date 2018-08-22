---
path: "/dropdown/4"
component: "DropDown"
type: "atom"
title: "DropDown with custom styles"
---
<codeblock>
<DropDown
  fieldContainerProps={{
    background: 'rgba(39, 39, 39, .05)',
    border: 'none',
    color: '#8c8c8c',
  }}
  placeholderProps={{ color: '#8c8c8c' }}
  menuContainerProps={{
    borderLeft: 'none',
    borderRight: 'none',
  }}
  optionProps={{
    background: 'rgba(39, 39, 39, .05)',
    border: 'none',
    color: '#8c8c8c'
  }}
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Custard Apple', value: 'custard-apple' },
    { label: 'Dates', value: 'dates' }
  ]}
/>
</codeblock>
