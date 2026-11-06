import { Link } from "react-router-dom"
import { LifeBuoy, Mail, MessageSquare } from "lucide-react"
import { images, mailtoSupport, site } from "../config/site"
import { ContactBlock } from "../components/ContactBlock"
import { Container } from "../components/Container"
import { PageMeta } from "../components/PageMeta"

const supportMailto = mailtoSupport("Prayer Watch support request")
const generalMailto = mailtoSupport("Prayer Watch general inquiry")

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact Us | Prayer Watch"
        description="Contact the Prayer Watch support team by email for help with the app, general questions, or an account deletion request."
        path="/contact"
      />

      <section className="bg-mist">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact Us</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">We are here to help</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Questions about Prayer Watch, the website, or your account can be sent by email. This is a static
              website, so there is no form stored on a server. The address below opens your own email app.
            </p>
            <a
              href={supportMailto}
              className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-2xl bg-navy px-5 py-3 text-white"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-gold">Email support</span>
                <span className="block font-semibold">{site.supportEmail}</span>
              </span>
            </a>
          </div>
          <img
            src={images.contact}
            alt="A support specialist wearing a headset works at a laptop in a bright office."
            width={1024}
            height={682}
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full rounded-[1.75rem] object-cover shadow-[0_24px_50px_-32px_rgba(8,45,91,0.55)]"
          />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-5 lg:grid-cols-3">
          <ContactBlock icon={LifeBuoy} title="App support">
            <p>
              For help using Prayer Watch, write to the support address. Include the email on the account if the
              question is about a specific profile.
            </p>
            <p>
              <a href={supportMailto} className="font-semibold text-primary underline underline-offset-2">
                Email {site.supportEmail}
              </a>
            </p>
          </ContactBlock>
          <ContactBlock icon={MessageSquare} title="General inquiries">
            <p>
              General questions about the app or this website can use the same support address. A separate office
              phone number and postal address are not published here.
            </p>
            <p>
              <a href={generalMailto} className="font-semibold text-primary underline underline-offset-2">
                Send a general inquiry
              </a>
            </p>
          </ContactBlock>
          <ContactBlock icon={Mail} title="Account deletion">
            <p>
              To delete a Prayer Watch account, use the steps in the mobile app. If you cannot sign in, you can email
              a deletion request. Sending that email does not itself delete the account.
            </p>
            <p>
              <Link to="/delete-account" className="font-semibold text-primary underline underline-offset-2">
                Go to Delete Account
              </Link>
            </p>
          </ContactBlock>
        </Container>
      </section>
    </>
  )
}
