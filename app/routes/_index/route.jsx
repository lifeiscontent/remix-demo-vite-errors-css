import { Link } from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>

      <ul>
        <Link to="/about">
          First click on this link to go to the about page.
        </Link>
      </ul>
    </div>
  );
}
