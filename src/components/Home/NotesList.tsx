import React from 'react'
import { Note } from '../General/Note'

export const NotesList:React.FC = () => {
  return (
    <div className="notes">
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
    </div>
  )
}
