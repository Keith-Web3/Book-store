'use client'

import { Dispatch, useRef, useState } from 'react'
import '@/sass/components/editor.scss'

interface EditorProps {
  dispatch: Dispatch<{
    type: string
    payload: string
  }>
}

const Editor = function ({ dispatch }: EditorProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [textCount, setTextCount] = useState(0)

  return (
    <div className="editor">
      <h2 className="editor__header">General</h2>
      <div className="editor__title">
        <label htmlFor="title">
          title
          <input
            type="text"
            onChange={e => {
              setTextCount((e.target as HTMLInputElement).value.length)
              dispatch({ type: 'title', payload: e.target.value })
            }}
            ref={inputRef}
            maxLength={60}
          />
          <p className="text-count">{textCount}/60</p>
        </label>
        <p className="editor__info">
          Give your product a short and clear name. 50-60 characters is the
          recommended length for search engines.
        </p>
      </div>
      <label className="editor__price" htmlFor="price">
        price
        <input
          onChange={e => dispatch({ type: 'price', payload: e.target.value })}
          type="number"
          placeholder="Enter price in dollars"
        />
      </label>
      <label className="editor__description" htmlFor="description">
        description
        <textarea
          onChange={e =>
            dispatch({ type: 'description', payload: e.target.value })
          }
        />
      </label>
    </div>
  )
}

export default Editor
