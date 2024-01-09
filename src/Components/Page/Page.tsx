import { FC } from "react";

import "./Page.scss";
import PageHeader from "./PageHeader/PageHeader";
import Table from "../Table/Table";

const Page: FC = () => {
  return (
    <div className="page">
        <h1 className="page-heading">Stories</h1>
        <PageHeader />
        <Table />
    </div>
  );
};

export default Page;
