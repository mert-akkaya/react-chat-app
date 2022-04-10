import './App.css';
import Container from './component/Container';
import { ChatProvider } from './context/ChatContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ChatProvider>
      <Container/> 
    </ChatProvider>
  );
}

export default App;
