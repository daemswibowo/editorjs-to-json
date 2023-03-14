'use client'

import {CacheProvider} from '@chakra-ui/next-js'
import {ChakraProvider} from '@chakra-ui/react'

export default function RootLayout({children}) {
    return (<html lang='en'>
        <head><title>Editor.js to JSON</title></head>
        <body>
        <CacheProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </CacheProvider>
        </body>
        </html>)
}
