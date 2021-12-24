/** @jsx jsx */
import { Link as GatsbyLink } from 'gatsby'
import React, { Fragment } from 'react'
import { jsx, Text, Flex, Box, Link } from 'theme-ui'

export default () => {
  return (
    <Fragment>
      <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box>
          <Text
            sx={{ fontSize: [4, 4, 4, 'calc(var(--step-6) * 1.618)'], color: 'primary' }}
          >
            404
          </Text>
          <Text
            sx={{ fontSize: [2, 2, 3, 'calc(var(--step-6)/1.618)'], color: 'secondary' }}
          >
            | Page not found
          </Text>
        </Box>
      </Flex>
      <Flex sx={{ justifyContent: 'center', alignItems: 'center', mt: 2 }}>
        <Box>
          <GatsbyLink to="/" sx={{fontSize: 2, color: 'primary'}}>Back to main</GatsbyLink>
        </Box>
      </Flex>
    </Fragment>
  )
}
