import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

const RTE = ({name, control, label, defaultValue=""}) => {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'></label>}
      <Controller 
        name={name || "content"}
        control={control}
        render={({field:{onChange}})=>(
             <Editor
                apiKey='wqlu7qnprg5hgu9qiqnhb3t20dmod4jh4j3guzcbl66g85dj'
                initialValue={defaultValue}   
                init={{
                    initialValue:defaultValue,
                    height:500,
                    menubar: true,
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace", 
                        "visualblocks", 
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "paste",
                        "code",
                        "help",
                        "wordcount",
                        "anchor"
                    ],
                    toolbar:"undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeFormat | help",
                    content_style: "body { font-family:Helvetica, Arial, sans-serif; font-size:14px }"
                }}
                onEditorChange={onChange}
             />
        )}
      />
    </div>
  )
}

export default RTE
