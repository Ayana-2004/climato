import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Climato",
  description:
    "How Climato collects, uses, and protects your data, including location, search history, and conversations with Skye.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Climato",
    description:
      "How Climato collects, uses, and protects your data, including location, search history, and conversations with Skye.",
    url: "/privacy",
    images: ["/opengraph-image"],
    siteName: "Climato",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-info-text">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-light">
            Last updated: July 27, 2026
          </p>

          <div className="mt-10 space-y-8 text-base leading-[1.6] text-muted">
            <section>
              <p>
                Climato is developed and operated by Faircode Infotech Pvt
                Ltd (&quot;Faircode&quot;, &quot;we&quot;, &quot;us&quot;).
                This Privacy Policy explains what information Climato
                collects when you use the app, how we use it, and the
                choices you have.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Information we collect
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold text-foreground">
                    Location data.
                  </span>{" "}
                  With your permission, Climato uses your device&apos;s
                  location to show live local weather and nearby conditions
                  through Nearby Explorer. You can deny or revoke location
                  access at any time in your device settings; Climato will
                  fall back to manual city search.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Search and favorites.
                  </span>{" "}
                  Cities you search for or save to Favorites are stored so
                  we can show them to you again.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Conversations with Skye.
                  </span>{" "}
                  Messages you send to Skye, our AI Weather Assistant, are
                  processed (including by trusted third-party AI providers)
                  to generate a response. Please avoid sharing sensitive
                  personal information in chat.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Device and usage data.
                  </span>{" "}
                  Basic technical information (device type, OS version,
                  crash logs, app interactions) to help us fix bugs and
                  improve the app.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                How we use your information
              </h2>
              <p className="mt-3">
                We use the information above to provide accurate forecasts,
                personalize Skye&apos;s responses, remember your favorite
                cities, maintain and improve the app, and communicate with
                you about updates if you&apos;ve opted in to notifications.
                We do not sell your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Third-party services
              </h2>
              <p className="mt-3">
                Climato relies on third-party weather-data and AI providers
                to power forecasts and Skye&apos;s conversational responses.
                These providers process the minimum data required to return
                a result (such as coordinates or a search query) under their
                own privacy and security terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Data retention and deletion
              </h2>
              <p className="mt-3">
                We retain account and usage data for as long as needed to
                provide the app and for legitimate business purposes. You
                can request deletion of your data at any time by emailing{" "}
                <a
                  href="mailto:hello@faircodetech.com"
                  className="font-semibold text-info-text underline-offset-4 hover:underline"
                >
                  hello@faircodetech.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Children&apos;s privacy
              </h2>
              <p className="mt-3">
                Climato is not directed at children under 13, and we do not
                knowingly collect personal information from children under
                13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Security
              </h2>
              <p className="mt-3">
                We use reasonable technical and organizational measures to
                protect your information. No method of transmission or
                storage is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Changes to this policy
              </h2>
              <p className="mt-3">
                We may update this policy from time to time. Material
                changes will be reflected by updating the &quot;Last
                updated&quot; date above.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Contact us
              </h2>
              <p className="mt-3">
                Questions about this policy or your data? Email{" "}
                <a
                  href="mailto:hello@faircodetech.com"
                  className="font-semibold text-info-text underline-offset-4 hover:underline"
                >
                  hello@faircodetech.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
