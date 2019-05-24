import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

import styles from './gallery-post-preview-list.module.css'

function GalleryPostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              {/* <BlogPostPreview {...node} isInList /> */}
              {node.title}
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

GalleryPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default GalleryPostPreviewGrid
