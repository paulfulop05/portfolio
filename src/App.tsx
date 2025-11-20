import "./App.css";
import AnimatedContent from "./components/AnimatedContent";
import CardSwap, { Card } from "./components/CardSwap";
import avatar from "./assets/avatar.jpg";
import Particles from "./components/Particles";
import ClickSpark from "./components/ClickSpark";
import CodeCard from "./components/CodeCard";
import { GlareCard } from "./components/GlareCard";
import { Terminal } from "./components/Terminal";
import { TypingAnimation } from "./components/TypingAnimation";
import RomaniaFlag from "./assets/romania-flag-icon.svg";
import ColorCursor from "./components/ColorCursor";
import GradientText from "./components/GradientText";
import FeaturedSection from "./components/FeaturedSection";
import SkillCard from "./components/skills/LanguagesCard";
import SkillsCard from "./components/skills/SkillsCard";

import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconBrandTypescript,
} from "@tabler/icons-react";

// FOR LOGOLOOP
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

// TODO color the commands in the terminal and some keywords in the about me

// FOR ASCII ART EXAMPLE

//               <pre
//                 style={{
//                   fontFamily: "monospace",
//                   fontSize: "1rem",
//                   color: "var(--color-text-secondary)",
//                   lineHeight: "1",
//                 }}
//               >
//                 {`________  ________  ________        ___  _______   ________ _________  ________
// |\\   __  \\|\\   __  \\|\\   __  \\      |\\  \\|\\  ___ \\ |\\   ____|\\___   ___|\\   ____\\
// \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\     \\ \\  \\ \\   __/|\\ \\  \\___\\|___ \\  \\_\\ \\  \\___|_
//  \\ \\   ____\\ \\   _  _\\ \\  \\\\\\  \\  __ \\ \\  \\ \\  \\_|/_\\ \\  \\       \\ \\  \\ \\ \\_____  \\
//   \\ \\  \\___|\\ \\  \\\\  \\\\ \\  \\\\\\  \\|\\  \\\\_\\  \\ \\  \\_|\\ \\ \\  \\____   \\ \\  \\ \\|____|\\  \\
//    \\ \\__\\    \\ \\__\\\\ _\\\\ \\_______\\ \\________\\ \\_______\\ \\_______\\  \\ \\__\\  ____\\_\\  \\
//     \\|__|     \\|__|\\|__|\\|_______|\\|________|\\|_______|\\|_______|   \\|__| |\\_________\\
//                                                                           \\|_________|`}
//               </pre>

const primaryGradientColors = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-gradient-primary")
  .split(",")
  .map((c) => c.trim());

function App() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <ColorCursor
        colors={["#415A77", "#415A77", "#415A77", "#415A77", "#415A77"]}
      />
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        {/* Particles Background - Fixed Position */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundColor: "var(--color-background)",
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.005}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        {/* Content - Above Particles */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            pointerEvents: "none",
          }}
        >
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div
              style={{
                pointerEvents: "auto",
                display: "flex",
                gap: "2rem",
                marginBlock: "15rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "8rem",
                }}
              >
                {/* Avatar with Glare Effect */}
                <div
                  style={{
                    pointerEvents: "auto",
                  }}
                >
                  <GlareCard width="300px" height="250px">
                    <img
                      src={avatar}
                      alt="Paul Fülöp"
                      className="h-full w-full object-cover rounded-[1px]"
                    />
                  </GlareCard>
                </div>

                {/* Intro Text and Terminal */}
                <h1
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    margin: "2rem",
                    fontFamily: "'Montserrat', sans-serif",
                    color: "var(--color-text-secondary)",
                    lineHeight: "1",
                    flexShrink: 0,
                  }}
                >
                  <TypingAnimation
                    duration={42}
                    delay={100}
                    style={{ fontSize: "3.5rem" }}
                  >
                    Hi, I'm
                  </TypingAnimation>
                  <br />
                  <span
                    style={{
                      display: "block",
                      marginBottom: "-4.25rem",
                    }}
                  >
                    <GradientText
                      colors={primaryGradientColors}
                      animationSpeed={6.5}
                      showBorder={false}
                    >
                      <TypingAnimation
                        duration={42}
                        delay={500}
                        style={{
                          fontWeight: "bold",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "3.5rem",
                        }}
                      >
                        Paul Fülöp
                      </TypingAnimation>
                    </GradientText>
                  </span>
                  <br />
                  <span
                    style={{
                      display: "block",
                      marginBottom: "-0.05rem",
                    }}
                  >
                    <TypingAnimation
                      duration={30}
                      delay={2000}
                      style={{ fontSize: "1.47rem" }}
                    >
                      Computer Science Student
                    </TypingAnimation>
                  </span>

                  <span
                    style={{
                      fontSize: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <TypingAnimation duration={42} delay={3000}>
                      Cluj-Napoca, Romania
                    </TypingAnimation>
                    <img
                      src={RomaniaFlag}
                      alt="Romania Flag"
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        opacity: 0,
                        animation: "fadeIn 0.8s ease-in-out 3.5s forwards",
                      }}
                    />
                  </span>
                </h1>
              </div>

              {/* Terminal Component */}
              <div
                style={{
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "500px",
                  margin: "5rem 2rem",
                  overflow: "hidden",
                }}
              >
                <Terminal
                  className="!w-full"
                  onCommand={(cmd, addResponse, clearTerminal) => {
                    const command = cmd.trim().toLowerCase();

                    if (command === "about") {
                      addResponse(
                        "I'm a 20-year-old CS student at Babeș-Bolyai University." +
                          " I'm focused on tech, problem-solving, and software development but" +
                          " I also have a slight interest in game development and the mix of technical" +
                          " and creative work behind it."
                      );
                    } else if (command === "help") {
                      addResponse("Available commands: about, help, clear");
                    } else if (command === "clear") {
                      clearTerminal();
                    } else if (command) {
                      addResponse(
                        `Command not found: ${command}. Type 'help' for available commands.`
                      );
                    }
                  }}
                  initialHistory={[
                    {
                      text: "Welcome to my portfolio terminal!",
                      typing: false,
                    },
                    {
                      text: "Start with 'about' to get to know me.",
                      typing: false,
                    },
                    {
                      text: "Other commands: help, clear",
                      typing: false,
                    },
                  ]}
                  prompt=">"
                />
              </div>
            </div>

            {/* 3D-ASCII */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <GradientText colors={primaryGradientColors} animationSpeed={3}>
                <pre
                  style={{
                    fontFamily: "monospace",
                    fontSize: "1rem",
                    lineHeight: "1",
                    fontWeight: "900",
                  }}
                >
                  {` ________  ___  __    ___  ___       ___       ________      
|\\   ____\\|\\  \\|\\  \\ |\\  \\|\\  \\     |\\  \\     |\\   ____\\     
\\ \\  \\___|\\ \\  \\/  /|\\ \\  \\ \\  \\    \\ \\  \\    \\ \\  \\___|_    
 \\ \\_____  \\ \\   ___  \\ \\  \\ \\  \\    \\ \\  \\    \\ \\_____  \\   
  \\|____|\\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\____\\ \\  \\____\\|____|\\  \\  
    ____\\_\\  \\ \\__\\\\ \\__\\ \\__\\ \\_______\\ \\_______\\____\\_\\  \\ 
   |\\_________\\|__| \\|__|\\|__|\\|_______|\\|_______|\\_________\\
    \\|_________|                                  \\|_________|
                                                             
  `}
                </pre>
              </GradientText>
            </div>

            <SkillsCard />

            {/* C++ Code Card */}
            {/* <CodeCard
              code={`#include <iostream>

using namespace std;

int main() {
    cout << "Performance-focused development\\n";
    cout << "Strong fundamentals in DSA\\n";
    cout << "Complex problem solving\\n";
    cout << "Pragmatic and clean code\\n";
    
    return 0;
}`}
              language="cpp"
              showLineNumbers={false}
              showHeader={false}
              showCopyButton={false}
              theme="oneDark"
              maxHeight="400px"
            /> */}

            {/* Card Swap Component */}
            {/* <div style={{ height: "600px", position: "relative" }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
              >
                <Card>
                  <h3 style={{ color: "white" }}>Card 1</h3>
                  <p>Your content here</p>
                </Card>
                <Card>
                  <h3>Card 2</h3>
                  <p>Your content here</p>
                </Card>
                <Card>
                  <h3>Card 3</h3>
                  <p>Your content here</p>
                </Card>
              </CardSwap>
            </div> */}
          </AnimatedContent>
        </div>
      </div>
    </ClickSpark>
  );
}

export default App;
