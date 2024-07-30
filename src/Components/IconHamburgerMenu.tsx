// icon:hamburger-menu | Radix Icons https://icons.radix-ui.com/ | WorkOS
import * as React from "react";

function IconHamburgerMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 6h18a1 1 0 100-2H3a1 1 0 100 2zm0 7h18a1 1 0 100-2H3a1 1 0 100 2zm0 7h18a1 1 0 100-2H3a1 1 0 100 2z"
        // d="M2 4a1 1 0 000 2h16a1 1 0 000-2H2zm0 5a1 1 0 011-1h16a1 1 0 010 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h16a1 1 0 010 2H3a1 1 0 01-1-1z"
        // d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconHamburgerMenu;
