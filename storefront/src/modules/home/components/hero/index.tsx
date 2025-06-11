import { ArrowRight } from "@medusajs/icons"
import { Button, Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative bg-red-600">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="font-display text-4xl leading-10 text-ui-fg-on-inverted font-normal"
          >
            Win a Nintendo Switch 2!
          </Heading>
          <Text className="text-xsmall-regular uppercase">
            NO PURCHASE NECESSARY TO ENTER OR WIN. Void where prohibited by law.
          </Text>
          <Image
            src="/switch.webp"
            alt="Nintendo Switch 2"
            width={588}
            height={425}
          />
        </span>
        <Link href="/giveaway">
          <Button variant="transparent" className="text-white hover:text-black">
            Learn more
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
