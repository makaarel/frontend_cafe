import { useDisclosure, IconButton } from "@chakra-ui/react";
import { Trash2 } from "react-feather";
import ModalDelete from "../ModalDelete";

export default function Delete({ payload, reload }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            {/* set payload dan onClose ke komponen ModalDelete */}
            <ModalDelete 
                isOpen={isOpen}
                onClose={onClose}
                payload={payload}
                reload={reload}
            />
            {/* set onOpen ke komponen IconButton */}
            <IconButton 
                onClick={onOpen}
                aria-label="delete"
                icon={<Trash2 />}
                colorScheme="red"
            />
        </>
    );
}