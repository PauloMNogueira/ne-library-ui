import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter, Button } from 'ne-library-ui'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter!</h2>
      <MyCounter />
    </div>
    <hr />
    <div>
      <h2>Button</h2>
      <Button onClick={() => console.log('PAULO')} />
    </div>
    <div>
      <h2>Counter with predefined value</h2>
      <MyCounter value={5} />
    </div>
  </React.StrictMode>,
)
