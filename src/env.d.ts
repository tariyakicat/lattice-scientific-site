/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly STRIPE_SECRET_KEY?: string;
  readonly STRIPE_WEBHOOK_SECRET?: string;
  readonly PRIVATE_DOWNLOAD_BASE_URL?: string;
  readonly DOWNLOAD_SIGNING_SECRET?: string;
  readonly RESEND_API_KEY?: string;
  readonly CONTACT_TO_EMAIL?: string;
  readonly CONTACT_FROM_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
