'use client';

import {Box, Heading} from "@chakra-ui/react";
import BaseLayout from "@/layouts/base";
import dynamic from "next/dynamic";
let Playground = dynamic(() => import('@/components/playground'), {ssr: false});
export default function Home() {
    return (
        <BaseLayout>
            <Box py={4}>
                <Heading>Editor JS to JSON Block</Heading>
            </Box>
            {Playground ? <Playground /> : null}
        </BaseLayout>
    )
}
