import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app"></main>
      <Nav />
      {children}
      </Provider>
    </body>
  </html>
);

export default RootLayout;
