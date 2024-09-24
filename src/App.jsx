import MainLayout from './components/mainLayout'
import { ThemeProvider, AuthProvider } from './Context'

const App = () => {
 
  return (
    <ThemeProvider>
      <AuthProvider>
    <div >
      <MainLayout  />
    </div>
    </AuthProvider>
    </ThemeProvider>


  



  )
}

export default App