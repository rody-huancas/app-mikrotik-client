import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const StickyIcons = () => {
  return (
    <aside className="fixed lg:bottom-0 bottom-1/2 left-0  flex flex-col gap-5 items-center z-40 bg-blue-500 rounded-e-lg py-4 px-3 ">
      <a href="/" className="text-zinc-100 hover:text-zinc-900">
        <FacebookLogo size={20} color="currentColor" weight="fill" />
      </a>
      <a href="/" className="text-zinc-100 hover:text-zinc-900">
        <TwitterLogo size={20} color="currentColor" weight="fill" />
      </a>
      <a href="/" className="text-zinc-100 hover:text-zinc-900">
        <YoutubeLogo size={20} color="currentColor" weight="fill" />
      </a>
      <a href="/" className="text-zinc-100 hover:text-zinc-900">
        <InstagramLogo size={20} color="currentColor" weight="fill" />
      </a>
    </aside>
  );
};

export default StickyIcons;
