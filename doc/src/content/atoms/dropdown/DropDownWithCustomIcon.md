---
path: "/dropdown/3"
component: "dropDown"
type: "atom"
title: "DropDown with custom icon"
---
<codeblock>
<DropDown
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Custard Apple', value: 'custard-apple' },
    { label: 'Dates', value: 'dates' }
  ]}
  icon={({ isOpen }) => {
    return (
      <Absolute top={15} right={10}>
        <Image
          src={ isOpen ? 'https://image.flaticon.com/icons/png/512/126/126490.png' : 'https://image.flaticon.com/icons/png/512/118/118738.png' }
          height='10px'
          width='10px'
        />
      </Absolute>
    )
  }}
>
</DropDown>
</codeblock>
