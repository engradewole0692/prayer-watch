import { Mail } from "lucide-react"
import { deletionMailto, images, site } from "../config/site"
import { Container } from "../components/Container"
import { DeleteStep } from "../components/DeleteStep"
import { PageMeta } from "../components/PageMeta"

const steps = [
  {
    step: 1,
    title: "Log in",
    instruction:
      "Open Prayer Watch and log in using the email address and password associated with your account.",
    image: images.screenshotLogin,
    imageAlt: "Prayer Watch login screen with email and password fields and a Login button.",
    caption: "Sign in with the email and password for your account.",
  },
  {
    step: 2,
    title: "Open More",
    instruction: "After logging in, navigate to the More section using the bottom navigation menu.",
    image: images.screenshotMore,
    imageAlt: "Prayer Watch More menu, including Read Bible, Account Settings, Notifications, Milestones, Chats, About Us, Logout, and Delete account.",
    caption: "More is the last item in the bottom navigation.",
  },
  {
    step: 3,
    title: "Select Delete Account",
    instruction: "Scroll to the Delete Account option and select it.",
    image: images.screenshotMore,
    imageAlt: "Prayer Watch More menu with the Delete account option shown near the bottom of the list.",
    caption: "Delete account is listed at the bottom of the More menu.",
  },
  {
    step: 4,
    title: "Confirm your request",
    instruction:
      "Review the confirmation message. Select Please delete to proceed with the deletion process. If you need assistance, select Email us instead.",
    image: images.screenshotDelete,
    imageAlt:
      "Prayer Watch confirmation dialog asking whether to delete the account, with Please delete and Email us instead.",
    caption: "Please delete continues in the app. Email us instead asks for help.",
  },
]

export function DeleteAccountPage() {
  return (
    <>
      <PageMeta
        title="Delete Your Account | Prayer Watch"
        description="Delete your Prayer Watch account from the mobile app, or email support to request deletion if you cannot sign in. No website login is required."
        path="/delete-account"
      />

      <section className="bg-mist">
        <Container className="grid items-center gap-8 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Account</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              Delete Your Prayer Watch Account
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              If you no longer wish to use Prayer Watch, you can delete your account through the mobile application.
              Follow the instructions below.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
              This page is public. You do not need an account on this website. Deletion happens in the Prayer Watch
              app, or by emailing support if you cannot sign in.
            </p>
          </div>
          <img
            src={images.deleteBanner}
            alt="A smartphone showing an account deletion screen beside a shield and lock."
            width={1024}
            height={682}
            fetchPriority="high"
            decoding="async"
            className="h-auto max-h-80 w-full rounded-[1.75rem] object-cover"
          />
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16" aria-labelledby="steps-heading">
        <Container>
          <h2 id="steps-heading" className="text-2xl font-semibold text-navy sm:text-3xl">
            Delete your account in the app
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            These screenshots are the Prayer Watch app itself. The steps follow the screens in order.
          </p>
          <div className="mt-8 space-y-6">
            {steps.map((step) => (
              <DeleteStep key={step.step} {...step} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-14 sm:py-16" aria-labelledby="no-access-heading">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 id="no-access-heading" className="text-2xl font-semibold text-navy">
              Can&apos;t access your Prayer Watch account?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              If you cannot sign in, you can still ask {site.owner} to delete your Prayer Watch account by email. The
              button opens your email app with the subject “Prayer Watch Account Deletion Request”.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Sending that email is a request for help. It does not automatically delete the account. Opening the
              email does not delete it either. This website cannot delete accounts, because it does not connect to an
              account system.
            </p>
            <a
              href={deletionMailto}
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email a deletion request
            </a>
            <p className="mt-3 text-sm text-slate-600">
              Support address:{" "}
              <a href={deletionMailto} className="font-semibold text-primary underline underline-offset-2">
                {site.supportEmail}
              </a>
            </p>
          </div>
          <aside className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-navy">Please read this first</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
              <li>Deleting the Prayer Watch app from your phone does not delete your account.</li>
              <li>
                Choosing “Please delete” in the app is how a signed-in person asks Prayer Watch to delete the account.
              </li>
              <li>This page does not contain a button that deletes data. It only explains how to make the request.</li>
              <li>
                A processing time, and a list of information that is removed or kept, are not published here. Those
                details have to be confirmed by {site.owner} and are not guessed on this page.
              </li>
            </ul>
          </aside>
        </Container>
      </section>
    </>
  )
}
