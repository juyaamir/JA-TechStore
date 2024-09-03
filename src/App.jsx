import MainLayout from './components/mainLayout'
import { ThemeProvider} from './Context'

const App = () => {
 
  return (
    <ThemeProvider>
    <div >
      <MainLayout  />
    </div>
    </ThemeProvider>


  



  )
}

export default App