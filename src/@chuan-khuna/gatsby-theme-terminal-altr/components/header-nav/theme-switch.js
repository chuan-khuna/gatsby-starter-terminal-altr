/** @jsx jsx */
import React, { Fragment } from 'react'
import { useColorMode, Flex, jsx, Box, Text, Badge } from 'theme-ui'

const modes_keys = [
  '-30k',
  'eramorp',
  'nexus',
  'Chaos-Drifters-/-CRY',
  'FUSE',
  'tsubaki',
]
const modes_name = [
  '-30k',
  'eramorp',
  'nexus',
  'Chaos Drifters / CRY',
  'FUSE',
  'tsubaki',
]

export default function ThemeSwitch() {
  const [colorMode, setColorMode] = useColorMode()
  const index = modes_keys.indexOf(colorMode)
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        overFlow: 'hidden',
        mt: 0,
        px: 2,
      }}
    >
      <Badge
        variant="secondary"
        sx={{ 'user-select': 'none', py: 1, fontSize: 0, fontFamily: 'sans' }}
        onClick={(e) => {
          const next = modes_keys[(index + 1) % modes_keys.length]
          setColorMode(next)
        }}
      >
        <Flex sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>{modes_name[index]}</Text>
        </Flex>
      </Badge>
    </Box>
  )
}
