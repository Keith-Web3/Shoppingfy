import React, { useRef, useId } from 'react'
import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { storage } from '../Data/firebase'
import Input from '../UI/Input'
import '../../sass/sub-components/add_item.scss'
import Button from '../UI/Button'
import cancel from '../../assets/xmark-solid.svg'

function AddItem({ navShown, setAsideState, setNewItem }) {
  const dropDownRef = useRef()
  const nameRef = useRef()
  const noteRef = useRef()
  const imageRef = useRef()
  const categoryRef = useRef()

  const id = useId()

  const state = useSelector(state => Object.keys(state.items))

  const storageRef = ref(storage, 'practise')

  const dropDownSelect = function (e) {
    const options = dropDownRef.current.children
    Array.from(options).map(item => item.classList.remove('active'))
    e.target.classList.add('active')
    categoryRef.current.value = e.target.textContent
  }
  const submitHandler = function () {
    if (nameRef.current.value.trim() === '') {
      nameRef.current.focus()
      return
    }
    if (categoryRef.current.value.trim() === '') {
      categoryRef.current.focus()
      return
    }
    setNewItem({
      name: nameRef.current.value,
      url: imageRef.current.value,
      note: noteRef.current.value,
      category: categoryRef.current.value,
    })
    imageRef.current.readOnly = false

    setAsideState('final')
  }

  const onUpload = async function (e) {
    const file = e.target.files[0]

    console.log(file)
    if (file.type.slice(0, 5) !== 'image') {
      console.error('The selected file is not an image')
      return
    }
    imageRef.current.readOnly = true
    try {
      const uploadTask = await uploadBytes(storageRef, file)

      console.log(uploadTask)

      const downloadUrl = await getDownloadURL(uploadTask.ref)
      imageRef.current.value = downloadUrl
    } catch (err) {
      console.log(file)
      console.dir(err)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', duration: 0.25 }}
      className="addItem"
      style={{ display: navShown ? 'block' : 'none' }}
    >
      <div className="container">
        <h2>Add a new item</h2>
        <Input
          ref={nameRef}
          key={nanoid()}
          label="name"
          placeholder="Enter a name"
        />
        <Input
          ref={noteRef}
          key={nanoid()}
          textarea={true}
          placeholder="Enter a note"
          label="Note (optional)"
        />
        <Input
          ref={imageRef}
          key={nanoid()}
          label="Image (optional)"
          placeholder="Enter a url"
        >
          <label htmlFor={id} className="upload">
            Or upload an image
            <input type="file" id={id} onChange={onUpload} />
          </label>
        </Input>
        <Input
          key={nanoid()}
          ref={categoryRef}
          className="category"
          label="Category"
          readOnly={true}
          placeholder="Enter a category"
          onFocus={() => dropDownRef.current.classList.add('visible')}
          onBlur={() => {
            setTimeout(
              () => dropDownRef.current.classList.remove('visible'),
              500
            )
          }}
        >
          <img src={cancel} alt="cancel" />
        </Input>
        <div className="drop-down" ref={dropDownRef}>
          {state.map(item => (
            <p key={nanoid()} onClick={dropDownSelect}>
              {item}
            </p>
          ))}
        </div>
        <div className="button-container">
          <Button
            onClick={() => {
              setAsideState('list')
              imageRef.current.readOnly = false
            }}
            style={{ bg: 'transparent' }}
          >
            cancel
          </Button>
          <Button
            onClick={submitHandler}
            style={{ bg: '#F9A109', color: '#fff' }}
          >
            Save
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default AddItem
