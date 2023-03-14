import {createReactEditorJS} from "react-editor-js";
import dynamic from "next/dynamic";

const Header = dynamic(() => import('@editorjs/header'), {ssr: false});
const Link = dynamic(() => import('@editorjs/link'), {ssr: false});
const Embed = dynamic(() => import('@editorjs/embed'), {ssr: false});

export const EDITOR_TOOLS = {
    link: Link,
    header: Header,
    embed: {
        class: Embed,
        config: {
            services: {
                youtube: true,
            }
        }
    },
}

const Editor = (props) => {
    const EditorJS = createReactEditorJS();

    return <EditorJS tools={EDITOR_TOOLS} {...props}/>
}

export default Editor;
