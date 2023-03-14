import Header from '@editorjs/header';
import Link from '@editorjs/link';
import Embed from '@editorjs/embed';

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
