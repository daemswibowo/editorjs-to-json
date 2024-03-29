import { Box, HStack, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { EDITOR_TOOLS } from "@/utils/constants";
import { useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
export default function Playground() {
  const [result, setResult] = useState("{}");
  const editorCore = useRef(null);
  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const onChange = (_api, _event) => {
    editorCore.current
      .save()
      .then((outputData) => {
        setResult(JSON.stringify(outputData, undefined, 2));
      })
      .catch((error) => {
        console.warn("Saving failed: ", error);
      });
  };

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(result);
  }, [result]);

  return (
    <SimpleGrid columns={2} spacing={4}>
      <Box>
        {Editor ? (
          <Editor
            holder="ssrHolder"
            placeholder={"Start your first block here"}
            onInitialize={handleInitialize}
            tools={EDITOR_TOOLS}
            onChange={onChange}
          />
        ) : null}
      </Box>
      <Box bg={"gray.50"} p={4} position={"relative"} color={"gray.500"}>
        <HStack mb={2}>
          <Text>Result</Text>
          <Link onClick={copyToClipboard}>Copy</Link>
        </HStack>
        <Box
          w={"100%"}
          overflow={"auto"}
          flex={1}
          maxH={500}
          color={"gray.600"}
        >
          <pre>{result}</pre>
        </Box>
      </Box>
    </SimpleGrid>
  );
}
