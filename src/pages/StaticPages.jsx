import { SimplePage } from './SimplePage'

export function AboutPage() {
  return (
    <SimplePage eyebrow="ABOUT" title="Blue Sky Fractions">
      <p>
        We curate co-ownership opportunities across yachts and select residences. This page is a
        placeholder — replace with your firm story, team, and compliance copy.
      </p>
    </SimplePage>
  )
}

export function YachtFractionPage() {
  return (
    <SimplePage eyebrow="PROGRAMME" title="Yacht fraction">
      <p>
        Fractional yacht ownership through a managed structure: scheduling, maintenance, and crew
        coordination. Detail your offering here; marketplace listings live under{' '}
        <strong>Marketplace</strong>.
      </p>
    </SimplePage>
  )
}

export function PropertyFractionPage() {
  return (
    <SimplePage eyebrow="PROGRAMME" title="Property fraction">
      <p>
        Holiday-home style fractions with transparent costs and professional management. Property
        listings will appear in the marketplace filter when you add inventory.
      </p>
    </SimplePage>
  )
}

export function ContactPage() {
  return (
    <SimplePage eyebrow="CONTACT" title="Get in touch">
      <p>
        Use the details in the site footer, or complete <strong>Register your interest</strong> on
        the home page. A full contact form can be wired to your CRM or email API next.
      </p>
    </SimplePage>
  )
}
