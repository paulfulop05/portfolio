import { GlareCard } from "./GlareCard";
import avatar from "../assets/avatar.jpg";

export function MyAvatar() {
  return (
    <div className="flex items-center justify-center">
      <GlareCard width="400px" height="400px">
        <img
          src={avatar}
          alt="Paul Fülöp"
          className="h-full w-full object-cover rounded-[48px]"
        />
      </GlareCard>
    </div>
  );
}
