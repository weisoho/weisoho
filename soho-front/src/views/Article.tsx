import { useState } from 'react'
import { Content } from '@tiptap/react'
import { MinimalTiptapEditor } from '../minimal-tiptap'

export const Article = () => {
  const [value, setValue] = useState<Content>('')

  return (
    <MinimalTiptapEditor
      value={value}
      onChange={setValue}
      className="w-full"
      editorContentClassName="p-5"
      output="html"
      placeholder="Type your description here..."
      autofocus={true}
      editable={true}
      editorClassName="focus:outline-none"
    />
  )
}

export default Article