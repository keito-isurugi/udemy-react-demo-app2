import { memo, VFC } from "react";
import { Flex } from "@chakra-ui/react"

export const Header: VFC = memo(() => {
  return (
    <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between"></Flex>
  );
});