import type { FeatureIcon as Name } from "@/data/features";
import { BoltIcon, ChatIcon, GiftIcon, HeartIcon, PhoneIcon, ShieldIcon, TrophyIcon, UsersIcon, WifiIcon } from "./Icons";

const map = {
  bolt: BoltIcon,
  users: UsersIcon,
  shield: ShieldIcon,
  wifi: WifiIcon,
  gift: GiftIcon,
  chat: ChatIcon,
  phone: PhoneIcon,
  trophy: TrophyIcon,
  heart: HeartIcon,
};

export default function FeatureIcon({ name }: { name: Name }) {
  const Icon = map[name];
  return (
    <span className="bg-brand inline-flex h-12 w-12 items-center justify-center rounded-2xl text-ink-950 shadow-lg shadow-ember-500/20">
      <Icon className="h-6 w-6" />
    </span>
  );
}
