import React from "react";
import Navbar from "./components/layout/Navbar";
import MainTable from "./components/Tables/MainTable";
import Layout from "./components/layout/Layout";
import MainNav from "./components/layout/MainNav";

const App = (props) => {
  return (
    <div>
      <Navbar />
      <Layout>
        <MainNav />
        <MainTable />
      </Layout>
    </div>
  );
};

export default App;
