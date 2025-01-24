import { useState } from 'react'
import { Content } from '@tiptap/react'
import { MinimalTiptapEditor } from '../minimal-tiptap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Input } from '@/components/ui/input'



export const Article = () => {
  const [content, setContent] = useState<Content>('')
  const [title, setTitle] = useState<string>('')

  // 定义一个处理函数 handleSubmit，用于处理提交操作
  const handleSubmit = () => {
    // 打印输入框中的数据
    console.log('输入的数据:', title);
  };

  console.log(title)
  return (
    <div>
      <Header />
      <Input type="text"
        value={title}
        onChange={handleSubmit}
      />
      <MinimalTiptapEditor
        value={content}
        onChange={setContent}
        className="w-full"
        editorContentClassName="p-5"
        output="html"
        placeholder="Type your description here..."
        autofocus={true}
        editable={true}
        editorClassName="focus:outline-none"
      />
      <button>保存</button>
      <button>发布</button>
      <Footer />
    </div>
  )
}

export default Article