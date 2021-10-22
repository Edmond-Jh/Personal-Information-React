import React from 'react'
import ReactDOM from 'react-dom'
// import 'index.css'
import Main from './components/main'
import './bootstrap.min.css'
ReactDOM.render(
  <React.StrictMode>
    <>
      <Main classs="pt-page pt-page-current" dataId="home" />
      {/* <Form/> */}
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
