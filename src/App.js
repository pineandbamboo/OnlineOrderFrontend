import { Layout, Typography } from "antd";
import { useEffect, useState } from "react";
import FoodList from "./components/FoodList";
import LoginForm from "./components/LoginForm";
import MyCart from "./components/MyCart";
import SignupForm from "./components/SignupForm";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [authed, setAuthed] = useState(false);
  const [drawerClickedTimes, setDrawerClickedTimes] = useState(0);
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div
          className="header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Title
            level={2}
            style={{ color: "white", lineHeight: 1, marginBottom: 0 }}
          >
            Food
          </Title>
          <div>
            {authed ? (
              /*<div>User Center</div>*/ <MyCart
                drawerClickedTimes={drawerClickedTimes}
                setDrawerClickedTimes={setDrawerClickedTimes}
              />
            ) : (
              <SignupForm />
            )}
          </div>
        </div>
      </Header>
      <Content
        style={{
          padding: "50px",
          maxHeight: "calc(100% - 64px)",
          overflowY: "auto",
        }}
      >
        {authed ? (
          <FoodList
            drawerClickedTimes={drawerClickedTimes}
            setDrawerClickedTimes={setDrawerClickedTimes}
          />
        ) : (
          <LoginForm onSuccess={() => setAuthed(true)} />
        )}
        {/* 这里不会有安全性上的问题吗？ */}
      </Content>
    </Layout>
  );
}

export default App;
