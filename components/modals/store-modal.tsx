"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(1).max(50)
})

export const StoreModal = () => {
  const storeModal = useStoreModal()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return <Modal 
    title="Welcome to the store" 
    description="This is a modal" 
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
  >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField 
            control={form.control} 
            name="name"
            render={({ field }) => <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Store name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            } 
          />
          <div className="pt-6 space-x-2 flex items-center justify-end">
            <Button variant="outline" onClick={storeModal.onClose}>Cancel</Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
  </Modal>
}