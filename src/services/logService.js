import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
  // Sentry.init({
  //   dsn: "https://1a267ec39af64cdab197397e41af1bd5@o970820.ingest.sentry.io/5922336",
  //   integrations: [new Integrations.BrowserTracing()],
  //   // Set tracesSampleRate to 1.0 to capture 100%
  //   // of transactions for performance monitoring.
  //   // We recommend adjusting this value in production
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  // Sentry.captureException(error);
  console.error(error);
}

export default {
  init,
  log,
};
