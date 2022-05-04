import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
}

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName } = props;
  return (
    <Box w="260px" height="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}>
    <Stack textAlign="center">
      <Image boxSize="160px" borderRadius="full" alt="プロフィール画像" m="auto" src={imageUrl} />
      <Text fontSize="lg" fontWeight="bold">{userName}</Text>
      <Text fontSize="sm" color="gray">{fullName}</Text>
    </Stack>
  </Box>
  );
})