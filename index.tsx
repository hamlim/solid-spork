import { Hono } from "hono";
// @ts-expect-error
import App from "./public/app.mjs";

const app = new Hono();

function Script({ type, children }: { type: string; children: string }) {
  return (
    <script
      type={type}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Intentional!
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

function Layout(props: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/pico.min.css" />
        <link rel="stylesheet" href="/pico.jade.min.css" />
        {/* <link rel="stylesheet" href="/pico.sand.min.css" /> */}
        <Script type="importmap">
          {JSON.stringify(
            {
              imports: {
                "hono/jsx": "https://esm.sh/hono/jsx",
                "hono/jsx/dom": "https://esm.sh/hono/jsx/dom",
                "hono/css": "https://esm.sh/hono/css",
              },
            },
            null,
            2,
          )}
        </Script>
      </head>
      <body>
        {props.children}
        <script type="module" src="/main.mjs"></script>
      </body>
    </html>
  );
}

function Top(props: { messages: string[] }) {
  return (
    <Layout>
      <Script type="module">{`window.__initialProps = ${JSON.stringify(props)}`}</Script>
      <main id="root">
        <App messages={props.messages} />
      </main>
    </Layout>
  );
}

app.get("/", (c) => {
  const messages = ["Good Morning", "Good Evening", "Good Night"];
  return c.html(<Top messages={messages} />);
});

export default app;
