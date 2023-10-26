const Svgs = ({ svg = "default", width = 24, height = 24 }) => {
  const listSvgs = {
    excel: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 29"
        fill="none"
      >
        {" "}
        <path d="M15.9126 0H8.23163V7.12617H15.9126V0Z" fill="#21A366" />{" "}
        <path d="M23.5934 0H15.9124V7.12617H23.5934V0Z" fill="#33C481" />{" "}
        <path
          d="M15.9126 7.12622H8.23163V14.2524H15.9126V7.12622Z"
          fill="#107C41"
        />{" "}
        <path
          d="M23.5934 7.12622H15.9124V14.2524H23.5934V7.12622Z"
          fill="#21A366"
        />{" "}
        <path
          d="M15.9126 14.252H8.23163V21.3782H15.9126V14.252Z"
          fill="#185C37"
        />{" "}
        <path
          d="M23.5934 14.252H15.9124V21.3782H23.5934V14.252Z"
          fill="#107C41"
        />{" "}
        <path
          d="M15.9126 21.379H8.23163V28.5052H15.9126V21.379Z"
          fill="#185C37"
        />{" "}
        <path
          d="M23.5934 21.379H15.9124V28.5052H23.5934V21.379Z"
          fill="#185C37"
        />{" "}
        <path d="M15.4196 5.03522H0V23.4981H15.4196V5.03522Z" fill="#0F773D" />{" "}
        <path
          d="M4.11217 6.71368L5.8784 9.84857C6.33384 10.6618 6.72263 11.4226 7.13364 12.2358H7.2114C7.62241 11.357 8.03342 10.6093 8.43332 9.82233L10.1773 6.71368H12.6101L8.38889 13.7836L12.7323 21.3257H10.1773L8.36667 18.0334C7.8779 17.1939 7.46689 16.3676 7.03367 15.5019H6.96702C6.55601 16.3807 6.12278 17.1677 5.66734 18.0334L3.8789 21.3257H1.40173L5.80064 13.8623L1.60168 6.71368H4.11217Z"
          fill="white"
          stroke="white"
          stroke-miterlimit="10"
        />{" "}
      </svg>
    ),
    add: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill="none"
      >
        {" "}
        <path
          d="M8.00033 5.83203V11.1654"
          stroke="#533893"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
        <path
          d="M10.6663 8.5013H5.33301"
          stroke="#533893"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 14.5V14.5C4.686 14.5 2 11.814 2 8.5V8.5C2 5.186 4.686 2.5 8 2.5V2.5C11.314 2.5 14 5.186 14 8.5V8.5C14 11.814 11.314 14.5 8 14.5Z"
          stroke="#533893"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
      </svg>
    ),
    view: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.42066 15.3896C3.23966 15.0846 3.23966 14.6986 3.42066 14.3936C5.32566 11.1706 8.80566 8.39157 12.2857 8.39157C15.7657 8.39157 19.2447 11.1706 21.1497 14.3926C21.3307 14.6986 21.3307 15.0856 21.1497 15.3916C19.2447 18.6126 15.7657 21.3916 12.2857 21.3916C8.80566 21.3916 5.32566 18.6126 3.42066 15.3896Z"
          stroke="#058CC1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.4067 12.7706C15.5787 13.9426 15.5787 15.8416 14.4067 17.0136C13.2347 18.1856 11.3357 18.1856 10.1637 17.0136C8.99167 15.8416 8.99167 13.9426 10.1637 12.7706C11.3357 11.5986 13.2357 11.5986 14.4067 12.7706"
          stroke="#058CC1"
          stroke-width="1.4286"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.2856 2.89157V5.39157"
          stroke="#058CC1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.28564 4.89157L6.96564 6.89157"
          stroke="#058CC1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.2857 4.89157L17.6057 6.89157"
          stroke="#058CC1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    default: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        stroke="black"
        stroke-width="2"
      >
        {" "}
        <rect x="10" y="10" width="80" height="80" rx="5" ry="5" />{" "}
        <text x="30" y="60" font-size="20" font-weight="bold" fill="black">
          SVG
        </text>{" "}
      </svg>
    ),
  };
  return listSvgs[svg] || listSvgs.default;
};

export default Svgs;
