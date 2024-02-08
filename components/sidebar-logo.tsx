import { useTheme } from "next-themes";
import Image from "next/image";

export const SideBarLogo = () => {
  const { theme } = useTheme();
  return (
    <Image
      width={25}
      alt=""
      className="w-12 mx-3.5 min-h-fit"
      height={25}
      src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
    />
  );
};
