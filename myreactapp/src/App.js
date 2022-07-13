import "./App.css";
import Profile from "./profile/profile";

function App() {
  const handleName = (e) => {
    alert("Cece-Boo");
  };
  return (
    <div style={{ display: "flex", height: "100%", color: "pink" }}>
      <Profile
        title="Profile"
        fullName="Egbuna Celia"
        bio="I am a Civil Engineer turned Software Engineer Maestro"
      >
        <img src="./props-image.jpg" alt="checkpoint" className="port" />
      </Profile>
      <handleName>
        <button style={{ textAlign: "center" }} onClick={handleName}>
          click me
        </button>
      </handleName>
    </div>
  );
}

export default App;
