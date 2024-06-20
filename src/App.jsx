import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './component/footer';
import Header from './component/header';
import Test from './list/listTodo'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './component/addTodo';

function App() {

  return (
    <div className="App">
    <Header/>
     <main>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Test/>}></Route>
        <Route path='/' element={<Test/>}></Route>
        <Route path='/add-todo' element={<AddTodo/>}></Route>
        <Route path='/edit-todo/:id' element={<AddTodo/>}></Route>
      </Routes>
      </BrowserRouter>
     </main>
     <footer id="footer">
       <Footer />
     </footer>
     </div>
  )
}

export default App
