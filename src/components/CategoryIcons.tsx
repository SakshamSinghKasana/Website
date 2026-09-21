// Decorative SVG icons for each category card.
// To add a new category icon: add a new case to the switch in CategoryIcon.

interface IconProps {
  color: string
}

function AIIcon({ color }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="40" cy="18" r="5" fill={color} opacity="0.7" />
      <circle cx="18" cy="52" r="5" fill={color} opacity="0.7" />
      <circle cx="62" cy="52" r="5" fill={color} opacity="0.7" />
      <circle cx="40" cy="64" r="3.5" fill={color} opacity="0.4" />
      <line
        x1="40"
        y1="18"
        x2="18"
        y2="52"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.3"
      />
      <line
        x1="40"
        y1="18"
        x2="62"
        y2="52"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.3"
      />
      <line
        x1="18"
        y1="52"
        x2="62"
        y2="52"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.3"
      />
      <line
        x1="18"
        y1="52"
        x2="40"
        y2="64"
        stroke={color}
        strokeWidth="1"
        opacity="0.2"
      />
      <line
        x1="62"
        y1="52"
        x2="40"
        y2="64"
        stroke={color}
        strokeWidth="1"
        opacity="0.2"
      />
      <circle cx="40" cy="36" r="2" fill={color} opacity="0.35" />
      <line
        x1="40"
        y1="18"
        x2="40"
        y2="36"
        stroke={color}
        strokeWidth="1"
        opacity="0.2"
      />
      <line
        x1="18"
        y1="52"
        x2="40"
        y2="36"
        stroke={color}
        strokeWidth="1"
        opacity="0.2"
      />
      <line
        x1="62"
        y1="52"
        x2="40"
        y2="36"
        stroke={color}
        strokeWidth="1"
        opacity="0.2"
      />
    </svg>
  )
}

function WatchIcon({ color }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="40"
        cy="42"
        r="28"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle
        cx="40"
        cy="42"
        r="22"
        stroke={color}
        strokeWidth="0.75"
        opacity="0.25"
      />
      {/* lugs */}
      <rect
        x="35"
        y="10"
        width="10"
        height="6"
        rx="1"
        fill={color}
        opacity="0.3"
      />
      <rect
        x="35"
        y="68"
        width="10"
        height="6"
        rx="1"
        fill={color}
        opacity="0.3"
      />
      {/* hour markers */}
      <line
        x1="40"
        y1="16"
        x2="40"
        y2="21"
        stroke={color}
        strokeWidth="2"
        opacity="0.8"
      />
      <line
        x1="40"
        y1="63"
        x2="40"
        y2="68"
        stroke={color}
        strokeWidth="2"
        opacity="0.8"
      />
      <line
        x1="66"
        y1="42"
        x2="61"
        y2="42"
        stroke={color}
        strokeWidth="2"
        opacity="0.8"
      />
      <line
        x1="14"
        y1="42"
        x2="19"
        y2="42"
        stroke={color}
        strokeWidth="2"
        opacity="0.8"
      />
      {/* minute markers */}
      <line
        x1="57.5"
        y1="22.5"
        x2="54.1"
        y2="25.9"
        stroke={color}
        strokeWidth="1"
        opacity="0.4"
      />
      <line
        x1="22.5"
        y1="22.5"
        x2="25.9"
        y2="25.9"
        stroke={color}
        strokeWidth="1"
        opacity="0.4"
      />
      <line
        x1="57.5"
        y1="61.5"
        x2="54.1"
        y2="58.1"
        stroke={color}
        strokeWidth="1"
        opacity="0.4"
      />
      <line
        x1="22.5"
        y1="61.5"
        x2="25.9"
        y2="58.1"
        stroke={color}
        strokeWidth="1"
        opacity="0.4"
      />
      {/* hands */}
      <line
        x1="40"
        y1="42"
        x2="40"
        y2="26"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <line
        x1="40"
        y1="42"
        x2="53"
        y2="46"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="40" cy="42" r="2.5" fill={color} opacity="0.9" />
    </svg>
  )
}

function CoffeeIcon({ color }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* steam */}
      <path
        d="M28 24 q5 -10 0 -18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M40 22 q5 -10 0 -18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M52 24 q5 -10 0 -18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* cup body */}
      <path
        d="M20 32 h40 l-5 30 H25 z"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.6"
      />
      {/* handle */}
      <path
        d="M60 36 q18 0 18 14 q0 14 -18 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* saucer */}
      <ellipse
        cx="40"
        cy="64"
        rx="26"
        ry="4"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* inner liquid */}
      <ellipse cx="40" cy="35" rx="16" ry="3" fill={color} opacity="0.15" />
    </svg>
  )
}

function CarsIcon({ color }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* arc */}
      <path
        d="M10 58 A34 34 0 0 1 70 58"
        stroke={color}
        strokeWidth="2"
        opacity="0.5"
      />
      {/* outer arc */}
      <path
        d="M4 58 A38 38 0 0 1 76 58"
        stroke={color}
        strokeWidth="1"
        opacity="0.25"
      />
      {/* tick marks */}
      <line
        x1="10"
        y1="58"
        x2="16"
        y2="58"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="70"
        y1="58"
        x2="64"
        y2="58"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="40"
        y1="24"
        x2="40"
        y2="30"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="22"
        y1="30"
        x2="26"
        y2="33.4"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <line
        x1="58"
        y1="30"
        x2="54"
        y2="33.4"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* needle */}
      <line
        x1="40"
        y1="58"
        x2="24"
        y2="34"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* center */}
      <circle cx="40" cy="58" r="5" fill={color} opacity="0.8" />
      <circle cx="40" cy="58" r="2" fill={color} opacity="1" />
    </svg>
  )
}

export function CategoryIcon({ id, color }: { id: string color: string }) {
  switch (id) {
    case "ai":
      return <AIIcon color={color} />
    case "watches":
      return <WatchIcon color={color} />
    case "coffee":
      return <CoffeeIcon color={color} />
    case "cars":
      return <CarsIcon color={color} />
    default:
      return null
  }
}
