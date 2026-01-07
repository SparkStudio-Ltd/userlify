export function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
    >
      {/* Outer shape */}
      <path
        d="M20 4C11.163 4 4 11.163 4 20C4 28.837 11.163 36 20 36C28.837 36 36 28.837 36 20C36 11.163 28.837 4 20 4Z"
        stroke="#3D1D5C"
        strokeWidth="2"
        fill="none"
      />
      {/* Inner U shape */}
      <path
        d="M14 14V24C14 27.314 16.686 30 20 30C23.314 30 26 27.314 26 24V14"
        stroke="#3D1D5C"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Accent dot */}
      <circle cx="20" cy="12" r="2" fill="#E85A3C" />
    </svg>
  );
}
