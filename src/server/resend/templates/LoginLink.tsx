import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  firstName?: string;
  loginLink: string;
}

const Email = ({ firstName, loginLink }: Props) => {
  const previewText = firstName
    ? `Welcome to Portfolio, ${firstName}!`
    : `Welcome to Portfolio!`;

  return (
    <Html>
      <Head>
        <Font
          fontFamily="sans-serif"
          fallbackFontFamily="Arial"
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`http://portfolio-next.ryos.dev/logo.png`}
                width="40"
                height="37"
                alt="llm.report logo"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Welcome to <strong>Portfolio</strong>
            </Heading>
            {/* <Text className="text-black text-[14px] leading-[24px]">
              {firstName && `Hello ${firstName} 👋`}
              {!firstName && `Hello 👋`}
            </Text> */}
            <Text className="text-[14px] leading-[24px] text-black">
              Click the link below to login to your account.
            </Text>

            <Section className="mb-[20px] mt-[20px] text-center">
              <Button
                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={loginLink}
              >
                Get Started
              </Button>
            </Section>

            {/* <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link href={loginLink} className="text-blue-600 no-underline">
                {loginLink}
              </Link>
            </Text> */}
            <Hr className="mx-0 my-[26px] w-full border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              If you were not expecting this invitation, you can ignore this
              email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
