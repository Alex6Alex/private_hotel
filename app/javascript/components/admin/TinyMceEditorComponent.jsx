import React from 'react';
import tinymce from 'tinymce/tinymce';

import 'tinymce/themes/silver';

import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';

export default class TinyMceEditorComponent extends React.Component {
  componentDidMount() {
    tinymce.init({
      selector: '.tinyMceEditor',
      // ${process.env.PUBLIC_URL}
      content_css: '/skins/content/default/content.min.css',
      skin_url: '/skins/ui/oxide',
      plugins: ['paste', 'link'],
      menubar: false,
    });
  }

  componentWillUnmount() {

  }

  render() {
    return <textarea className='tinyMceEditor'/>;
  }
};