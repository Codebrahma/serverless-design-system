---
path: "/fixed/1"
component: "fixed"
type: "atom"
title: "Simple Fixed Box"
---
<codeblock>
<Box>
  <Fixed
    height="225px"
    top="450px"
    right="95px"
  >
    <Card
      border="2px solid #7ecd28"
      p={2}
    >
      <Image
        src="https://i.gifer.com/5de.gif"
        height="200px"
        width="200px"
      />
      <Flex justifyContent="center">
        I'm a fixed div :)
      </Flex>
    </Card>
  </Fixed>
</Box>
</codeblock>
