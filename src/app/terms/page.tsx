import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Climato",
  description:
    "The terms that govern your use of Climato, the weather app from Faircode.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Climato",
    description:
      "The terms that govern your use of Climato, the weather app from Faircode.",
    url: "/terms",
    images: ["/opengraph-image"],
    siteName: "Climato",
    type: "website",
  },
};

export default function TermsOfService() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-info-text">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-light">
            Last updated: July 27, 2026
          </p>

          <div className="mt-10 space-y-8 text-base leading-[1.6] text-muted">
            <section>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of
                Climato, an app developed by Faircode Infotech Pvt Ltd
                (&quot;Faircode&quot;, &quot;we&quot;, &quot;us&quot;). By
                downloading or using Climato, you agree to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                The service
              </h2>
              <p className="mt-3">
                Climato provides weather forecasts, city search, an AI
                Weather Assistant (&quot;Skye&quot;), Favorites, and Nearby
                Explorer. Climato is an informational tool, not an emergency
                or official weather-warning service. Always follow guidance
                from local authorities and official meteorological services
                for severe weather.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Acceptable use
              </h2>
              <p className="mt-3">
                You agree not to misuse the app, attempt to disrupt its
                operation, reverse-engineer it beyond what&apos;s permitted
                by law, or use it in any way that violates applicable laws
                or the rights of others.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Skye, our AI Weather Assistant
              </h2>
              <p className="mt-3">
                Skye generates responses using automated systems and may
                occasionally be inaccurate or incomplete. Skye&apos;s
                responses are provided for general guidance only and should
                not be relied on as your sole source of information for
                safety-critical decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Disclaimer of warranties
              </h2>
              <p className="mt-3">
                Weather forecasts are estimates based on third-party data
                and are not guaranteed to be accurate. Climato is provided
                &quot;as is&quot; and &quot;as available&quot;, without
                warranties of any kind, to the fullest extent permitted by
                law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Limitation of liability
              </h2>
              <p className="mt-3">
                To the fullest extent permitted by law, Faircode is not
                liable for any indirect, incidental, or consequential
                damages arising from your use of, or inability to use,
                Climato, including decisions made based on a forecast or a
                response from Skye.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Third-party stores
              </h2>
              <p className="mt-3">
                Climato is distributed through the Apple App Store and
                Google Play, and your download and use is also subject to
                each store&apos;s own terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Changes to these terms
              </h2>
              <p className="mt-3">
                We may update these Terms from time to time. Continued use
                of Climato after changes take effect means you accept the
                updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Governing law
              </h2>
              <p className="mt-3">
                These Terms are governed by the laws of India, without
                regard to conflict-of-law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                Contact us
              </h2>
              <p className="mt-3">
                Questions about these Terms? Email{" "}
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
