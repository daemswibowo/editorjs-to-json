import {createReactEditorJS} from "react-editor-js";
import {EDITOR_TOOLS} from "@/utils/constants";

const Editor = (props) => {
    const {...rest} = props;
    const EditorJS = createReactEditorJS();

    return <EditorJS tools={EDITOR_TOOLS} {...rest}/>
}

export default Editor;
