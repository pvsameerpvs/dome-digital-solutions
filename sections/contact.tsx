"use client";

import * as React from "react";
import { Phone, Mail, Globe, CheckCircle2 } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { COMPANY } from "@/lib/constants";

export function ContactSection() {
  const [open, setOpen] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOpen(true);
  }

  const mailto = `mailto:${COMPANY.email}`;

  return (
    <section className="py-16 sm:py-20">
      <SiteContainer>
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you need — we’ll propose the right solution"
          description="Get quotes, product recommendations, or support for AV, IT, Security, and Networking."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
              <CardDescription>Send your details and requirements. We’ll respond via email or phone.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input name="name" placeholder="Full name" required />
                  <Input name="company" placeholder="Company" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input type="email" name="email" placeholder="Email address" required />
                  <Input name="phone" placeholder="Phone number" />
                </div>
                <Input name="subject" placeholder="Subject (e.g., Meeting room AV upgrade)" required />
                <Textarea name="message" placeholder="Describe your requirements (site size, rooms, devices, timelines, etc.)" required />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit">Submit Request</Button>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Prefer email? <a className="text-brand-700 hover:underline" href={mailto}>{COMPANY.email}</a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
              <CardDescription>Reach our team directly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brand-700" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-slate-600 dark:text-slate-300">{COMPANY.phones.join(" | ")}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-brand-700" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a className="text-brand-700 hover:underline" href={mailto}>{COMPANY.email}</a>
                </div>
              </div>

              <div className="flex gap-3">
                <Globe className="mt-0.5 h-4 w-4 text-brand-700" />
                <div>
                  <p className="font-semibold">Website</p>
                  <p className="text-slate-600 dark:text-slate-300">{COMPANY.website}</p>
                </div>
              </div>

              <div className="rounded-2xl border bg-slate-50 p-4 dark:bg-slate-900/30 dark:border-slate-800">
                <p className="font-semibold">Business Focus</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  Audio-Visual, IT Products & Support, Security Systems, and Network Security.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-700" />
                Request received
              </DialogTitle>
              <DialogDescription>
                Thanks for reaching out. For fastest response, you can also email{" "}
                <a className="text-brand-700 hover:underline" href={mailto}>{COMPANY.email}</a> with your requirements.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
              <Button asChild><a href={mailto}>Email Us</a></Button>
            </div>
          </DialogContent>
        </Dialog>
      </SiteContainer>
    </section>
  );
}
