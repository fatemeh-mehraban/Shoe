import {El} from './library'
import { Main } from './components'
const App = () => {
  return El({
    element: 'div',
    className:"",
    child: [Main()]
  })
}

export default App