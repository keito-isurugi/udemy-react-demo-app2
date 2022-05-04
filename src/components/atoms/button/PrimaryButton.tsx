import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false} = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} onClick={onClick} disabled={disabled || loading} isLoading={loading}>
      { children }
    </Button>
  );
})