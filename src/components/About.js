import React from 'react'
import { useContext } from 'react'
import NoteContext from '../contexts/NoteContext';

export default function About() {
  // eslint-disable-next-line
  const a = useContext(NoteContext);   
  return (
    <div>
      This is about page
    </div>
  )
}
