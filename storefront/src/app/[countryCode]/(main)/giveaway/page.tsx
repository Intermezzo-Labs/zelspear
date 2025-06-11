import { Heading, Text } from "@medusajs/ui"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Nintendo Switch 2 Giveaway!",
}

export default async function Giveaway() {
  return (
    <section className="w-full relative">
      <div className="text-ui-fg-on-inverted container max-w-lg mx-auto py-12 space-y-6 prose prose-invert">
        <div>
          <Heading
            level="h1"
            className="font-display text-4xl text-ui-fg-on-inverted font-normal text-center"
          >
            🎮 Nintendo Switch 2 Giveaway! 🎮
          </Heading>
          <Text>
            To celebrate this amazing journey and give back to the community,
            I’m giving away a brand-new Nintendo Switch 2!
          </Text>
        </div>
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/p3MnDm_PeeM?si=dHcWGGca_HDbWpLp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <Heading level="h2" className="font-display text-2xl font-normal">
            🗓️ Raffle Date
          </Heading>
          <Text>Sunday, June 29th</Text>
        </div>
        <div>
          <Heading level="h2" className="font-display text-2xl font-normal">
            🌎 Eligibility:
          </Heading>
          <Text>
            Open to all residents of the continental U.S. and El Salvador, age
            18 or older (or the age of majority in your location). Valid only
            where legally permitted.
          </Text>
        </div>
        <div>
          <Heading level="h2" className="font-display text-2xl font-normal">
            🔹 How to Enter:
          </Heading>
          <ol>
            <li>
              <Text>
                Join the official Zelspear Discord server. Stay updated on
                giveaway news, announcements, and exclusive bonus opportunities.
              </Text>
            </li>
            <li>
              <Text>
                Create an account with your email:{" "}
                <Link href="/account" className=" underline underline-offset-4">
                  Account
                </Link>
              </Text>
            </li>
          </ol>
        </div>
        <div>
          <Heading level="h2" className="font-display text-2xl font-normal">
            🎟️ Boost Your Chances – Earn Bonus Entries:
          </Heading>
          <Text>
            Every $1 spent on official Zelspear merchandise = 2 bonus entries;
            e.g.
          </Text>
          <ul>
            <li>
              <Text>T-shirt = 50 entries</Text>
            </li>
            <li>
              <Text>Sticker Bundle = 10 entries</Text>
            </li>
          </ul>
        </div>
        <div>
          <Heading level="h2" className="font-display text-2xl font-normal">
            🛍️ Merch Options:
          </Heading>
          <ul>
            <li>
              <Text>Limited Edition T-shirt – $24.99</Text>
            </li>
            <li>
              <Text>Gamer Sticker Bundle – $4.99</Text>
            </li>
          </ul>
        </div>
        <div>
          <Heading level="h2" className="font-display text-2xl font-normal">
            🏆 Winner Selection & Notification:
          </Heading>
          <Text>
            Winners will be chosen in accordance with the official giveaway
            rules. Notifications will be sent via the email you provide and/or
            through Discord.
          </Text>
          <ul>
            <li>
              <Text>✅ Check your spam folder</Text>
            </li>
            <li>
              <Text>✅ Stay active in the Discord so you don’t miss it!</Text>
            </li>
          </ul>
        </div>
        <div>
          <Heading level="h2" className="font-display text-2xl font-normal">
            📢 Why Join the Zelspear Discord?
          </Heading>

          <ul>
            <li>
              <Text>Get real-time updates on the giveaway</Text>
            </li>
            <li>
              <Text>
                Access exclusive contests and bonus entry opportunities
              </Text>
            </li>
            <li>
              <Text>
                Connect with fellow gamers and be part of the growing Zelspear
                community
              </Text>
            </li>
            <li>
              <Text>
                ✨ This is your chance to win big and help grow something
                special. Thank you for being part of the adventure!
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
