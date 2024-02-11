"use client"

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

export default function Home() {
  const onOpen = useStoreModal(store => store.onOpen)
  const isOpen = useStoreModal(store => store.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <div>
      <p>Admin dashboard</p>
    </div>
  );
}
