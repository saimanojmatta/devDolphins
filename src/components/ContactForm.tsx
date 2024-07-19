'use client'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
type Props = {}
const ContactForm = (props: Props) => {
  
  return (
    <div className="mx-auto">
               <h1 className="mb-4 text-4xl font-semibold lg:mb-6 lg:text-5xl">Contact us</h1>
                <p className="mb-12 text-lg text-muted-foreground lg:text-xl">
                Our friendly team would love to hear from you.
                </p>
                <form className="max-w-[480px]">
                    <fieldset className="grid gap-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label>First name</Label>
                            <Input type="text" name="firstName"   placeholder="First name" /></div>
                        <div className="space-y-2">
                            <Label>Last name</Label>
                            <Input type="text" name="lastName"   placeholder="Last name" /></div>
                        </div>
                        <div className="space-y-2">
                         <Label>Email</Label>
                        <Input type="email" name="email"  placeholder="me@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label>Mobile</Label>
                        <Input type="tel" name="phone" placeholder="0995700562" />
                        </div>
                        <div className="space-y-2">
                            <Label>Message</Label>
                        <Textarea name="message"  placeholder="Leave us a message..." />
                        </div>
                        <div>
                        <Button  className="w-full  " type="submit">Send message</Button>
                        </div>
                    </fieldset>
                </form>
                
               
            </div>
  )
}
export default ContactForm