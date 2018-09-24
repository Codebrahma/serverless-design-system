import React from 'react'
import AppWrapper from './../components/AppWrapper'
import Section from './../components/Section'

export default () => (
  <AppWrapper>
    <Section>
      <h2>ThemeProvider</h2>

      <p>
        Add `ThemeProvider` in your application. The below code takes the default theme defined in the design-system.
        <br />
        <code>
          <pre>
            {
`import { ThemeProvider } from 'serverless-design-system'
export default () => (
  <ThemeProvider>
  { /*  Render the root component */ }
  </ThemeProvider>
)`
            }
          </pre>
        </code>
      </p>
    </Section>

    <Section>
      <h2>ThemeProvider with a custom theme</h2>
      <p>
        To set a custom theme for the design system components, we must pass the custom theme to the ThemeProvider.
        <br />
        <code>
          <pre>
            {
`import { ThemeProvider } from 'serverless-design-system'
export default () => {
  const customTheme = { fontSizes: [ '1rem', '2rem', '4rem', '8rem' ] }
  return (
    <ThemeProvider theme={customTheme}>
    { /*  Render the root component */ }
    </ThemeProvider>
  )
}`
            }
          </pre>
        </code>
      </p>
    </Section>
  </AppWrapper>
)
