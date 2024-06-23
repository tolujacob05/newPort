"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";

import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import WidthLayout from "./width-layout";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  subject: z.string().min(2).max(50),
  message: z.string().min(2),
});

const Message = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await axios
      .post(
        "https://formspree.io/f/xovaavaw",
        {
          fullName: values.fullName,
          subject: values.subject,
          message: values.message,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setSubmitted(true);
          form.reset();
        } else {
          toast.error("Something went wrong.", {
            style: {
              background: "#171717",
              color: "#b91c1c",
            },
          });
        }
      });
  }

  return (
    <>
      <div className="mt-20 lg:mt-0 space-y-6 lg:flex lg:flex-col lg:self-end relative z-20">
        <h1 className="text-muted text-4xl text-start lg:text-end">
          Hit me Up
        </h1>

        <div className="card1 lg:w-[690px]">
          <section className="card2 flex flex-col justify-center shadow-md relative bg-background-img bg-cover w-full lg:w-[690px] rounded-3xl">
            {/* <div className="absolute inset-0 backdrop-blur-sm bg-[#161822]/90 -z-10 rounded-2xl md:rounded-r-2xl md:rounded-l-none"></div> */}
            {/* <div className="rounded-3xl border border-orange-300 p-2 shadow-lg"> */}
            <Dialog
              open={isSubmitted}
              onOpenChange={(open) => {
                if (!open) {
                  setSubmitted(false);
                }
              }}
            >
              <DialogContent className="text-muted-foregroundTwo">
                Your form has been submitted.
                <DialogFooter>
                  <Button
                    onClick={() => setSubmitted(false)}
                    type="button"
                    variant="secondary"
                  >
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <WidthLayout>
              <div className="relative py-6 ">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foregroundTwo text-sm ml-2">
                            Full Name
                          </FormLabel>
                          <FormControl className="w-full">
                            <Input
                              placeholder="First Name"
                              {...field}
                              required
                              className="bg-gradient from-green to-primary focus-visible:ring-background-five h-14"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foregroundTwo text-sm ml-2">
                            Subject
                          </FormLabel>
                          <FormControl className="w-full">
                            <Input
                              placeholder="Subject"
                              {...field}
                              required
                              className="bg-gradient from-green to-primary focus-visible:ring-background-five h-14"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foregroundTwo ml-2 text-sm">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              // placeholder="Tell us a little bit about yourself and your message..."
                              className="resize-none bg-background-five border-background-five focus-visible:ring-background-five"
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <a href="#" className="flex md:justify-end">
                      <Button className="w-full md:w-fit" type="submit">
                        <span className="block md:hidden p-2">Submit</span>
                        <span className="hidden md:block p-2">
                          Send message
                        </span>
                      </Button>
                    </a>
                  </form>
                </Form>
              </div>

              <div className="absolute hidden right-0 w-36 h-36 bottom-1/4 translate-y-28 rounded-l-full md:flex bg-blue-800 blur-3xl  -z-10" />
              <div className="absolute hidden right-0 w-36 h-36 bottom-1/4 translate-y-28 rounded-l-full md:flex bg-[#4D5BCE] blur-3xl  -z-10" />
            </WidthLayout>
            {/* </div> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default Message;
