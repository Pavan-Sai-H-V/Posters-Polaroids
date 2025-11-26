
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
export function CardApp() {
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>Your Image</CardTitle>
        <CardDescription>
          Placed in the template
        </CardDescription>
      </CardHeader>
      <CardContent className="ml-5">
        <Image src='/polaroid_1.png' alt="polaroid" height={300} width={300}/>
      </CardContent>
      <CardFooter className="flex-col">
        <p>Add caption to your pictures while sending in WhatsApp</p>
      </CardFooter>
    </Card>
  )
}