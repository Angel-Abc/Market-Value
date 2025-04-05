import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from '@/components/ui/button'

document.body.innerHTML = '<div id="app"></div>'
const root = createRoot(document.getElementById('app')!)

root.render(
    <>
        <h1>Hello world!</h1>
        <Button>Click me!</Button>
    </>
)