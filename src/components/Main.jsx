import React from "react";
import PageHeader from './PageHeader/PageHeader'
import PageContent from "./PageContent/PageContent"

function Main({ classs, dataId }) {
  return (
    <main className={classs} data-id={dataId}>
      <div className="section-inner start-page-content">
        <PageHeader clas="page-header" />
        <PageContent />
      </div>
    </main>)
}
export default Main;