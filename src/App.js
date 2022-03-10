import Router from "./Router";
import AppLayout from "./components/AppLayout";
import {GlobalProvider} from './context/globalContext'
function App() {
  return (
    <GlobalProvider>
      <AppLayout>
        <Router />
      </AppLayout>
    </GlobalProvider>
  );
}

export default App;
