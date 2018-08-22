---
path: "/transition/1"
component: "transition"
type: "atom"
title: "Simple Transition"
---
<codeblock>
<Card
  border="1px solid cyan"
>
  <Transition
    position="relative"
    p={[0, 1, 5]}
    transition="padding 2s"
  >
    Reduce the browser width to 320/768px to see the animation
  </Transition>
</Card>
</codeblock>
