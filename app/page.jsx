import LoginCard from "./components/LoginCard";
import Brand from "./components/Brand";
// Authentication functionality
function Home() {
  return (
    <body>
      <div className="flex h-full w-full">
        <Brand />
        <LoginCard />
      </div>
    </body>
  );
}

export default Home;
