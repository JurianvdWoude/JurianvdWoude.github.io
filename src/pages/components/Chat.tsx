import { useState } from "react"
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"


type Message = {
  role: "user" | "assistant"
  content: string
}



function Chat() {
  const [input, setInput] = useState("")

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hallo! Ik kan helpen bij het analyseren van netcongestie en mogelijke maatregelen.",
    },
  ])


  function sendMessage() {
    const trimmed = input.trim()

    if (!trimmed) {
      return
    }

    setMessages((current) => [
      ...current,
      {
        role: "user",
        content: trimmed,
      },
    ])

    setInput("")
  }


  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="border-b">
        <CardTitle>
          AI beslisassistent
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Stel vragen over congestie, oplossingen en mogelijke maatregelen.
        </p>
      </CardHeader>


      <CardContent className="flex min-h-0 flex-1 flex-col gap-4 p-4">

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
            />
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2 border-t pt-4">
          <input
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendMessage()
              }
            }}
            placeholder="Vraag iets..."
            className="
              flex-1
              rounded-md
              border
              bg-background
              px-3
              py-2
              text-sm
              outline-none
              focus:ring-2
              focus:ring-ring
            "
          />

          <Button onClick={sendMessage}>
            Verstuur
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}

//function ContainsPostcode(postcode: string) {
//  const postcodeRegex = "/\d{4}[A-Za-z]{2}/"
//  return postcodeRegex.test(postcode);
//}


function ChatMessage({
  message,
}: {
  message: Message
}) {
  const isUser = message.role === "user"

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[85%]
          rounded-xl
          px-4
          py-3
          text-sm
          ${
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground"
          }
        `}
      >
        {message.content}
      </div>
    </div>
  )
}


export default Chat;
