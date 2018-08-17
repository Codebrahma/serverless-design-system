---
path: "/absolute/1"
component: "absolute"
type: "atom"
title: "Simple Absolute Box"
---
<Card border="1px solid cyan">
  <Relative p={5}>
    <Absolute
      height="15px"
      top="20px"
      right="20px"
    >
      <a href='#'>close</a>
    </Absolute>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </Relative>
</Card>
