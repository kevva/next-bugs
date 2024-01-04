import { headers } from 'next/headers'

const Layout = ({ children }) => {
  headers().get('user-agent')
  return children
}

export default Layout
