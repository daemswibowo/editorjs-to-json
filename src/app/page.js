'use client';

import {Box, Heading} from "@chakra-ui/react";
import BaseLayout from "@/layouts/base";
import dynamic from "next/dynamic";

const Playground = dynamic(() => import('@/components/playground'), {ssr: false});
export default function Home() {
    const isClient = typeof window !== 'undefined';

    return (
        <BaseLayout>
            <Box py={4}>
                <Heading>Editor JS to JSON Block</Heading>
            </Box>
            {isClient ? <Playground/> : null}
        </BaseLayout>
    )
}
