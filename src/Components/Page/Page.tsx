import { FC } from "react";

import "./Page.scss";
import PageHeader from "./PageHeader/PageHeader";

const Page: FC = () => {
  return (
    <div className="page">
        <h1>Stories</h1>
        <PageHeader />
    </div>
  );
};

export default Page;
