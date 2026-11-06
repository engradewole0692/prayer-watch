import { Link } from "react-router-dom"
import { site } from "../config/site"
import { ConfirmNote, DraftNotice, LegalLayout, type LegalSection } from "../components/LegalLayout"

const sections: LegalSection[] = [
  { id: "introduction", heading: "Introduction" },
  { id: "website", heading: "This website" },
  { id: "app-information", heading: "The mobile app" },
  { id: "use", heading: "How information is used" },
  { id: "account", heading: "Account information" },
  { id: "community", heading: "Prayer requests and community" },
  { id: "notifications", heading: "Notifications" },
  { id: "storage", heading: "Storage and security" },
  { id: "sharing", heading: "Information sharing" },
  { id: "retention", heading: "Data retention" },
  { id: "deletion", heading: "Account deletion" },
  { id: "rights", heading: "Your rights" },
  { id: "children", heading: "Children" },
  { id: "changes", heading: "Changes to this policy" },
  { id: "contact", heading: "Contact" },
]

export function PrivacyPage() {
  return (
    <LegalLayout
      kicker="Privacy"
      title="Privacy Policy"
      description="How this Prayer Watch website handles information, and which app practices still need to be confirmed by Luvanex Foundation."
      path="/privacy-policy"
      sections={sections}
    >
      <DraftNotice />

      <h2 id="introduction">Introduction</h2>
      <p>
        Prayer Watch is a Christian prayer and devotional community application offered by {site.owner}. This website
        publishes information about the app, including how to request account deletion.
      </p>
      <p>
        The policy below describes what this website itself does. It also describes the parts of the app that are
        visible in the product, without turning unconfirmed practices into claims. Where a fact was not in the
        materials used to build this site, the section says so.
      </p>

      <h2 id="website">This website</h2>
      <p>This is a static website. In the form published here:</p>
      <ul>
        <li>It does not create accounts or ask you to register.</li>
        <li>It does not include a contact form that stores messages on a Prayer Watch server.</li>
        <li>Email links open the email application on your device. Delivery is handled by your email provider.</li>
        <li>The site code does not add advertising or analytics tools.</li>
      </ul>
      <ConfirmNote>
        The company that hosts the website may keep technical logs, such as IP address and browser details. The host
        has not been named in the materials for this page, so those logs are not described further here.
      </ConfirmNote>

      <h2 id="app-information">The mobile app</h2>
      <p>
        The Prayer Watch app includes sign-in, prayer reminders, streaks, a target prayer time, prayer projects, Bible
        reading, milestones, and community features. Those features are visible in the app. They show the kind of
        activity the product is built to support.
      </p>
      <p>A verified inventory of personal information was not supplied for this website. In particular, this policy does not state:</p>
      <ul>
        <li>the exact fields stored for an account, beyond the email and password shown on the sign-in screen</li>
        <li>whether analytics, crash reports, or advertising identifiers are collected</li>
        <li>whether location is collected</li>
        <li>whether the app includes purchases</li>
      </ul>
      <ConfirmNote>
        {site.owner} needs to replace this section with the actual categories of information the app collects before
        the policy is treated as final.
      </ConfirmNote>

      <h2 id="use">How information is used</h2>
      <p>
        From the product itself, account and activity information are intended to operate the features a person
        chooses: reminders they set, prayer activity, Bible reading, community participation, and replies to support
        or deletion emails.
      </p>
      <ConfirmNote>
        Other purposes, including any legal, security, or operational uses, have not been confirmed and are not listed
        as facts.
      </ConfirmNote>

      <h2 id="account">Account information</h2>
      <p>
        The app sign-in screen asks for an email address and a password. This website does not collect those details
        and does not offer its own login.
      </p>
      <ConfirmNote>
        How passwords are protected, whether a name or other profile details are stored, and which provider hosts
        accounts must be confirmed. Those methods are not stated here.
      </ConfirmNote>

      <h2 id="community">Prayer requests and community</h2>
      <p>
        Prayer Watch includes community features, including a community area and chats in the app menu. People may
        share prayer requests and other content with other believers inside the app.
      </p>
      <ConfirmNote>
        Who can see a prayer request, how long it stays available, and how community content is moderated have not
        been confirmed. This policy does not describe an audience or a moderation process that has not been documented.
      </ConfirmNote>

      <h2 id="notifications">Notifications</h2>
      <p>
        The app includes prayer reminders and a notifications area in the More menu. Reminders are part of the
        product so a person can keep a prayer time they have chosen. Notification controls are available in the app.
      </p>
      <ConfirmNote>
        Whether Prayer Watch also sends promotional or other messages, and which push service is used, must be
        confirmed.
      </ConfirmNote>

      <h2 id="storage">Storage and security</h2>
      <p>
        This website does not store Prayer Watch accounts. It does not have a database of its own.
      </p>
      <ConfirmNote>
        The country or region where app information is stored, the service providers involved, and the security
        measures in use must be confirmed by {site.owner}. No encryption standard or storage location is claimed on
        this page.
      </ConfirmNote>

      <h2 id="sharing">Information sharing</h2>
      <p>
        This website does not sell personal information. It does not run a checkout, and its own code does not pass
        visitor details to an advertising network.
      </p>
      <ConfirmNote>
        Whether the Prayer Watch app shares information with service providers, affiliates, or anyone else — and
        whether any of that sharing is a sale or used for advertising — must be confirmed. This page does not say
        that the app does, or does not, share information.
      </ConfirmNote>

      <h2 id="retention">Data retention</h2>
      <p>
        No retention period is stated in this policy. A number written here without confirmation would be misleading.
      </p>
      <ConfirmNote>
        {site.owner} should add how long account information, prayer activity, community content, and support emails
        are kept, including any information kept after deletion.
      </ConfirmNote>

      <h2 id="deletion">Account deletion</h2>
      <p>
        You can ask to delete a Prayer Watch account from the mobile app, or by email if you cannot sign in. The
        public steps are on the <Link to="/delete-account">Delete Account</Link> page. You do not need to log in to
        this website to read them.
      </p>
      <p>
        Removing the app from a phone is not the same as deleting the account. Emailing support sends a request. It
        does not, by itself, mean the account has already been deleted. This website cannot delete an account.
      </p>
      <ConfirmNote>
        What is erased, what may be kept, and how long a request takes are not stated here because they have not been
        confirmed.
      </ConfirmNote>

      <h2 id="rights">Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, or delete personal information, or to
        object to certain uses. This page does not name a statute or promise a specific legal process.
      </p>
      <p>
        You can email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> to make a request. This website
        cannot complete that request by itself. The Prayer Watch team has to handle it.
      </p>
      <ConfirmNote>
        The rights that apply, and the steps and timing for responding, must be confirmed before they are published as
        commitments.
      </ConfirmNote>

      <h2 id="children">Children</h2>
      <p>
        It has not been confirmed whether Prayer Watch is directed to children, or from what age a person may create
        an account. This draft does not claim that the app is, or is not, for children.
      </p>
      <ConfirmNote>
        A children&apos;s privacy statement, including any minimum age, should be added when that decision is confirmed.
      </ConfirmNote>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        {site.owner} may update this policy after it has been approved. This copy is a review draft prepared on 6
        November 2026. It does not yet have an approved effective date. The date on this page should be replaced when
        the organization approves the policy.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Privacy questions can be sent to <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. Prayer Watch
        is offered by {site.owner}. A postal address is not published on this website.
      </p>
      <ConfirmNote>
        Confirm the support address, and add a postal or privacy-specific contact if one should appear here.
      </ConfirmNote>
    </LegalLayout>
  )
}
