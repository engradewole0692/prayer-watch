import { Link } from "react-router-dom"
import { site } from "../config/site"
import { ConfirmNote, DraftNotice, LegalLayout, type LegalSection } from "../components/LegalLayout"

const sections: LegalSection[] = [
  { id: "acceptance", heading: "Acceptance of terms" },
  { id: "description", heading: "Description of Prayer Watch" },
  { id: "eligibility", heading: "Eligibility and accounts" },
  { id: "use", heading: "Acceptable use" },
  { id: "conduct", heading: "Community conduct" },
  { id: "content", heading: "User-submitted content" },
  { id: "ip", heading: "Intellectual property" },
  { id: "availability", heading: "Service availability" },
  { id: "suspension", heading: "Suspension and termination" },
  { id: "deletion", heading: "Account deletion" },
  { id: "changes", heading: "Changes to these terms" },
  { id: "contact", heading: "Contact" },
]

export function TermsPage() {
  return (
    <LegalLayout
      kicker="Terms"
      title="Terms of Service"
      description="Proposed terms for using Prayer Watch and this website. Luvanex Foundation needs to approve them before they are treated as the final agreement."
      path="/terms-of-service"
      sections={sections}
    >
      <DraftNotice />

      <h2 id="acceptance">Acceptance of terms</h2>
      <p>
        These terms describe the proposed conditions for using the Prayer Watch mobile application and this
        informational website. They were prepared for review on 6 November 2026.
      </p>
      <p>
        {site.owner} should approve this page before it is presented as the binding agreement. Until that approval,
        read it as the published draft, not as a completed set of legal promises.
      </p>
      <ConfirmNote>
        Governing law, venue, and any required consumer notices are not included, because they were not supplied. They
        should be added only after legal review.
      </ConfirmNote>

      <h2 id="description">Description of Prayer Watch</h2>
      <p>
        Prayer Watch is a Christian prayer and devotional community app from {site.owner}. It is designed to help
        people keep a consistent prayer life, set prayer reminders and targets, take part in prayer projects, read the
        Bible, mark milestones, and pray with other believers.
      </p>
      <p>
        This website explains the app and shows how to request account deletion. It does not provide the app&apos;s
        features, and it does not register users.
      </p>

      <h2 id="eligibility">Eligibility and accounts</h2>
      <p>
        The app includes an account that is opened with an email address and a password. You are responsible for the
        activity that happens through your sign-in, and for keeping the password private.
      </p>
      <ConfirmNote>
        The minimum age for an account has not been confirmed. This page does not set an age limit. {site.owner}{" "}
        should add one before the terms are final.
      </ConfirmNote>

      <h2 id="use">Acceptable use</h2>
      <p>When you use Prayer Watch, you are expected to:</p>
      <ul>
        <li>use the app for prayer, Scripture, and community, rather than to harm other people</li>
        <li>give account information that is yours to use</li>
        <li>avoid unlawful content</li>
        <li>avoid attempts to break into accounts, scrape the service, or disrupt it</li>
        <li>avoid impersonating another person in order to abuse them</li>
      </ul>

      <h2 id="conduct">Community conduct</h2>
      <p>
        Prayer requests and conversation in the community should be offered with respect. Do not harass, threaten, or
        exploit another person. Do not share someone else&apos;s prayer request outside the app in a way that exposes
        them.
      </p>
      <ConfirmNote>
        How Prayer Watch moderates community content, and the consequences of a report, must be confirmed. This draft
        does not describe a specific enforcement process.
      </ConfirmNote>

      <h2 id="content">User-submitted content</h2>
      <p>
        If you submit a prayer request or other content, you should only submit what you have a right to share. Other
        people in the community may be able to see content that the app is built to display.
      </p>
      <ConfirmNote>
        Who owns submitted content, and what permission the app needs in order to show it, store it, or remove it, must
        be confirmed. No license is granted or reserved by this draft.
      </ConfirmNote>

      <h2 id="ip">Intellectual property</h2>
      <p>
        Prayer Watch is offered by {site.owner}. The app, this website, and the Prayer Watch name are not yours to
        copy into another product. Scripture texts shown in the app may belong to their own publishers.
      </p>
      <ConfirmNote>
        Trademark registrations, if any, and the Bible translation or copyright notices used in the app were not
        supplied for this page. They should be added when confirmed.
      </ConfirmNote>

      <h2 id="availability">Service availability</h2>
      <p>
        Features of the app or this website may change, pause, or be withdrawn. This page does not promise that the
        service will be available without interruption, and it does not promise a particular set of future features.
      </p>
      <ConfirmNote>
        Any warranty, liability limit, or service commitment needs to be written by {site.owner} after review. None is
        stated here.
      </ConfirmNote>

      <h2 id="suspension">Suspension and termination</h2>
      <p>
        An account may need to be suspended or closed if it is used in a way that harms other people or the service.
        You may also stop using Prayer Watch yourself.
      </p>
      <ConfirmNote>
        The exact circumstances, notice, and appeal process for suspension have not been confirmed and are not
        invented here.
      </ConfirmNote>

      <h2 id="deletion">Account deletion</h2>
      <p>
        You can ask to delete your account in the app, or by email if you cannot sign in. The steps are on the{" "}
        <Link to="/delete-account">Delete Account</Link> page. Deleting the app from a phone does not delete the
        account. This website does not perform the deletion.
      </p>
      <ConfirmNote>
        What happens to information after a deletion request, and how long that takes, must be confirmed. Those facts
        are intentionally left out of this draft.
      </ConfirmNote>

      <h2 id="changes">Changes to these terms</h2>
      <p>
        {site.owner} may update these terms after they are approved. If a later approved version replaces this draft,
        the approved version should be published on this page with its date. This copy does not yet have an approved
        effective date.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Questions about these terms can be sent to <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
        Prayer Watch is offered by {site.owner}. A postal address and a legal jurisdiction are not published on this
        website.
      </p>
    </LegalLayout>
  )
}
