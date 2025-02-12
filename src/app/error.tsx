"use client"

import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex-col gap-y-4 flex items-center justify-center">
      <AlertTriangle className="size-24"/>
      <p className="text-xl text-muted-foreground">Something went wrong</p>
      <Button variant="secondary" asChild>
        <Link href={"/"}>
            <ArrowLeft/>
            Back to Home
        </Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
