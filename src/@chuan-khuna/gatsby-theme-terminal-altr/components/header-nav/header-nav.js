import React, { Fragment } from 'react'
import { Box, NavLink } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import ThemeSwitch from './theme-switch'

import { useNavigation } from '@chuan-khuna/gatsby-theme-terminal-altr/src/data/'

export const HeaderNav = () => {
  const {
    allMdx: { edges },
  } = useNavigation()

  const navigation = edges.reduce((routes, route) => {
    return route.node.fields.slug === '/'
      ? [route, ...routes]
      : [...routes, route]
  }, [])

  return (
    <Fragment>
      <Box sx={{ px: 2 }}>
        <ThemeSwitch />
      </Box>

      <Box>
        {navigation.map((route, index) => {
          const {
            frontmatter: { navigationLabel },
            fields: { slug },
          } = route.node

          return (
            <NavLink as={GatsbyLink} to={slug} sx={{ px: 2 }} key={index}>
              {navigationLabel}
            </NavLink>
          )
        })}
      </Box>
    </Fragment>
  )
}
