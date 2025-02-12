"use client";

import React from "react";
import { ResponsiveModal } from "@/components/responsive-modal";
import { CreateProjectForm } from "./create-project-form";
import { useCreateProjectModal } from "../hooks/use-create-project-modal";

const CreateProjectModal = () => {
    const {isOpen,setIsOpen,close} = useCreateProjectModal()

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close}/>
    </ResponsiveModal>
  );
};

export default CreateProjectModal;
