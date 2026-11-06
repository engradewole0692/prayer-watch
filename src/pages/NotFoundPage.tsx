import { Link } from "react-router-dom"
import { Container } from "../components/Container"
import { PageMeta } from "../components/PageMeta"

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page not found | Prayer Watch"
        description="This Prayer Watch page does not exist. Return home or open the account deletion guide."
        path="/404"
      />
      <Container className="py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-navy">This page is not on the site</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          The address may be mistyped. You can return home, or open the public account deletion page.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="inline-flex h-11 items-center rounded-full bg-navy px-5 text-sm font-semibold text-white">
            Back to home
          </Link>
          <Link
            to="/delete-account"
            className="inline-flex h-11 items-center rounded-full border border-navy px-5 text-sm font-semibold text-navy"
          >
            Delete Account
          </Link>
        </div>
      </Container>
    </>
  )
}
