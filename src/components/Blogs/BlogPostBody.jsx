import {
    PortableText
  } from '@portabletext/react'
  
  import styles from './PostBody.module.css'


  export default function PostBody({ content }) {
    return (
      <div className={`${styles.portableText}`}>
        <PortableText value={content} />
      </div>
    )
  }