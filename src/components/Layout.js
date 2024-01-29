import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import FooterContainer from "./containers/footer";
import Navigation from "./containers/navigation";

const { Header, Content, Footer } = Layout;

const GeneralLayout = () => {
  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header style={{ backgroundColor: "white" }}>
        <Navigation />
      </Header>
      <Content style={{ flex: "1 0 auto", backgroundColor: "white" }}>
        <main className="App">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          flexShrink: 0,
        }}
      >
        <FooterContainer />
      </Footer>
    </Layout>
  );
};

export default GeneralLayout;
