"use client"

import { UserRole } from "@prisma/client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";

interface roleGateProps {
    children: React.ReactNode;
    allowedRole: UserRole;
};

export const RoleGate = ({
    children,
    allowedRole,
}: roleGateProps) => {
    const role = useCurrentRole();

    if(role !== allowedRole) {
        return (
            <FormError message="You do not have permission to view this content!" />
        )
    }

    return (
        <>
            {children}
        </>
    )
}