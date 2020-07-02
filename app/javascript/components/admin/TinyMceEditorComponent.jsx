import React from 'react';
import { Editor } from "@tinymce/tinymce-react";

export default class TinyMceEditorComponent extends React.Component {
  render() {
    return(
      <Editor
        apiKey='26txudt7cokz4zh64w9k8enfj9hjx49fiwki984e5n554yjs'
        id='editor'
        outputFormat={ this.props.format }
        init={{
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap preview anchor searchreplace visualblocks',
            'insertdatetime media paste help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        value={ this.props.value }
        onEditorChange={ this.props.onEditorChange } />
    )
  }
};