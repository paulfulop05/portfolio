import LanguagesCard from "./LanguagesCard";
import FrameworksCard from "./FrameworksCard";
import ToolsCard from "./ToolsCard";
import ConceptsCard from "./ConceptsCard";
import Magnet from "../Magnet";

function SkillsCard() {
  return (
    <div
      style={{
        position: "relative",
        width: "1100px",
        height: "650px",
        margin: "2rem auto",
      }}
    >
      <div style={{ position: "absolute", top: "0px", left: "0px" }}>
        <Magnet padding={50} disabled={false} magnetStrength={50}>
          <LanguagesCard />
        </Magnet>
      </div>
      <div style={{ position: "absolute", top: "80px", right: "80px" }}>
        <Magnet padding={50} disabled={false} magnetStrength={50}>
          <FrameworksCard />
        </Magnet>
      </div>
      <div style={{ position: "absolute", bottom: "38px", left: "50px" }}>
        <Magnet padding={50} disabled={false} magnetStrength={50}>
          <ToolsCard />
        </Magnet>
      </div>
      <div style={{ position: "absolute", bottom: "103px", right: "50px" }}>
        <Magnet padding={50} disabled={false} magnetStrength={50}>
          <ConceptsCard />
        </Magnet>
      </div>
    </div>
  );
}

export default SkillsCard;
