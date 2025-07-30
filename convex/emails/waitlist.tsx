import {
  Html,
  Body,
  Head,
  Tailwind,
  pixelBasedPreset,
  Container,
  Text,
  Img,
  Section,
  Preview,
} from "@react-email/components";

export const WaitListEmail = ({
  firstName = "there",
}: {
  firstName: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>Thanks for joining the Kollabo waitlist!</Preview>
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Body className="bg-white font-sans text-gray-800">
          <Container className="max-w-[600px] mx-auto px-4 py-10 border border-gray-200 rounded-lg shadow-lg">
            {/* Logo */}
            <Section className="flex justify-start mb-6">
              <Img
                src="https://uncommon-goat-163.convex.cloud/api/storage/2708bec9-0a12-48a2-9920-7ba4ab8c35c5"
                alt="Kollabo Logo"
                width="100"
              />
            </Section>

            {/* Greeting */}
            <Text className="text-sm leading-6 mb-4">Hi {firstName},</Text>

            {/* Main Body */}
            <Text className="text-sm leading-6 mb-4">
              Thank you for joining the waitlist!
            </Text>

            <Text className="text-sm leading-6 mb-4">
              I'm truly excited to welcome you to Kollabo, a space we're
              building for people like you who believe in the power of
              execution, collaboration, and real-world impact.
            </Text>

            <Text className="text-sm leading-6 mb-4">
              As we have stated on the website, for now, we're working behind
              the scenes to craft something special—a platform where creators,
              thinkers, and doers across disciplines can connect, build, and
              bring ideas to life from start to finish, all in one seamless app.
            </Text>

            <Text className="text-sm leading-6 mb-4">
              Whether you're looking to kick off your next big idea, join a team
              with purpose, or simply grow through doing, Kollabo is being built
              with you in mind.
            </Text>

            {/* Bullet List */}
            <Text className="text-sm leading-6 mb-2">
              Over the coming weeks, we'll be:
            </Text>
            <ul className="list-disc pl-4 text-sm mb-4">
              <li>Inviting a few early users to test the platform</li>
              <li>
                Listening closely to your feedback so we build what truly
                matters
              </li>
            </ul>

            <Text className="text-sm leading-6 mb-4">
              You're officially on the early list, and you'll be among the first
              to know when we go live.
            </Text>

            <Text className="text-sm leading-6 mb-4">
              In the meantime, feel free to hit reply and say hi, I'd love to
              know what you're hoping to create or find on Kollabo.
            </Text>

            <Text className="text-sm leading-6 mb-4">
              Thanks again for believing in what we're building.
            </Text>

            {/* Signature */}
            <Text className="text-sm leading-6">
              Warmly,
              <br />
              Moses Afolabi
              <br />
              Founder, Kollabo
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
