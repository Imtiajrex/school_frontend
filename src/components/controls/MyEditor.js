import React, { Component } from "react";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
  convertFromHTML,
  convertToHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./editor.css";
import draftToHtml from "draftjs-to-html";
class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(draftToHtml(props.value))
        )
      ),
    };
  }
  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
    this.props.handleChange({
      target: {
        name: this.props.name,
        value: convertToRaw(editorState.getCurrentContent()),
      },
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="rich-editor demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          placeholder="The message goes here..."
        />
        <small className="text-danger">
          {this.props.error ? "No Empty Space Allowed!" : null}
        </small>
      </div>
    );
  }
}
export { MyEditor };
