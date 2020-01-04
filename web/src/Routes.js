import { Router, Route } from '@redwoodjs/router'
import NotFoundPage from 'src/pages/NotFoundPage'

const Routes = () => {
  return (
    <Router>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
