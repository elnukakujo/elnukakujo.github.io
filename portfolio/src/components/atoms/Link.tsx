import Text from "./Text";
import useNavigateTo from "../../utils/navigateTo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogleScholar,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCompass,
  faEnvelope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Image from "./Image";
import type TextType from "../../interface/Text";

type LinkProps = {
  url?: string;
  path?: string;
  id?: string;
  text?: string | TextType;
  imageUrl?: string;
  logoType?: "github" | "google-scholar" | "website" | "email" | "linkedin";
  className?: string;
};

export default function Link({
  text,
  imageUrl,
  className = "",
  logoType,
  url,
  path,
  id,
}: LinkProps) {
  const navigateTo = useNavigateTo();

  const baseClasses =
    "cursor-pointer shadow-none translate-0 interact flex flex-row items-center gap-[1rem] hover:gap-[1.5rem] transition-slow group/link text-wrap";

  const iconMap = {
    email: faEnvelope,
    linkedin: faLinkedin,
    github: faGithub,
    "google-scholar": faGoogleScholar,
    website: faCompass,
  };

  const renderImageLink = (onClick?: () => void) => (
    <a
      {...(onClick ? { onClick } : { href: url, target: "_blank", rel: "noreferrer" })}
    >
      <Image
        url={imageUrl!}
        className="interact rounded-lg"
        altText={"External Link"}
        size="small"
      />
    </a>
  );

  const renderTextLink = (onClick?: () => void) => (
    <a
      {...(onClick ? { onClick } : { href: url, target: "_blank", rel: "noreferrer" })}
      className={`${baseClasses} text-nowrap ${className}`}
    >
      {typeof text === "string" ? (
        <Text text={text} type="text" className="group-hover/link:text-enhanced transition-slow"/>
      ):(
        <Text text={text!.text} type={text!.type} className="group-hover/link:text-enhanced transition-slow"/>
      )}
      <FontAwesomeIcon icon={faChevronRight} className="group-hover/link:text-enhanced" />
    </a>
  );

  // Case 1: Internal link (path)
  if (path) {
    if (imageUrl) return renderImageLink(() => navigateTo(path, id));
    if (text) return renderTextLink(() => navigateTo(path, id));
    console.warn("Link component requires at least an imageUrl or text.");
    return null;
  }

  // Case 2: External link (url)
  if (url) {
    if (logoType && iconMap[logoType]) {
      return (
        <a href={url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={iconMap[logoType]}
            className="interact shadow-none text-[2.25rem]"
          />
        </a>
      );
    }
    if (imageUrl) return renderImageLink();
    if (text) return renderTextLink();
    console.warn("Link component requires at least an imageUrl or text.");
    return null;
  }

  // No path or URL
  console.warn("Link component requires either a URL or path.");
  return null;
}