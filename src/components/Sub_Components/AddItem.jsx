import React, { useRef } from 'react'

import Input from '../UI/Input'
import '../../sass/sub-components/add_item.scss'
import Button from '../UI/Button'

function AddItem({ navShown }) {
  const dropDownRef = useRef()

  return (
    <div className="addItem" style={{ display: navShown ? 'block' : 'none' }}>
      <div className="container">
        <h2>Add a new item</h2>
        <Input label="name" placeholder="Enter a name" />
        <Input
          textarea={true}
          placeholder="Enter a note"
          label="Note (optional)"
        />
        <Input label="Image (optional)" placeholder="Enter a url" />
        <Input
          className="category"
          label="Category"
          maxLength={0}
          placeholder="Enter a category"
          onFocus={() => dropDownRef.current.classList.add('visible')}
          onBlur={() => dropDownRef.current.classList.remove('visible')}
        />
        <div className="drop-down" ref={dropDownRef}>
          <p>Fruits and vegetables</p>
          <p className="active">Meat and Fish</p>
          <p>Beverages</p>
        </div>
        <div className="button-container">
          <Button style={{ bg: 'transparent' }}>cancel</Button>
          <Button style={{ bg: '#F9A109', color: '#fff' }}>Save</Button>
        </div>
      </div>
    </div>
  )
}

export default AddItem
