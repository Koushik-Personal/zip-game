interface PipeDesignProps {
  index: number;
  hasUp: boolean;
  hasDown: boolean;
  hasLeft: boolean;
  hasRight: boolean;
}

export function PipeDesign(props: PipeDesignProps) {
  const { index, hasUp, hasDown, hasLeft, hasRight } = props;
  if (!hasUp && !hasDown && !hasLeft && !hasRight) {
    return null;
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
    >
      <defs>
        {/* Deep Green Gradient */}
        <linearGradient
          id={`pipeGradient-${index}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="rgba(34, 197, 94, 0.9)" />
          <stop offset="50%" stopColor="rgba(22, 163, 74, 0.85)" />
          <stop offset="100%" stopColor="rgba(21, 128, 61, 0.8)" />
        </linearGradient>

        {/* Glow effect */}
        <filter id={`glow-${index}`}>
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#glow-${index})`}>
        {/* Pipe going UP */}
        {hasUp && (
          <rect
            x="38"
            y="0"
            width="24"
            height="50"
            fill={`url(#pipeGradient-${index})`}
            rx="12"
          />
        )}

        {/* Pipe going DOWN */}
        {hasDown && (
          <rect
            x="38"
            y="50"
            width="24"
            height="50"
            fill={`url(#pipeGradient-${index})`}
            rx="12"
          />
        )}

        {/* Pipe going LEFT */}
        {hasLeft && (
          <rect
            x="0"
            y="38"
            width="50"
            height="24"
            fill={`url(#pipeGradient-${index})`}
            rx="12"
          />
        )}

        {/* Pipe going RIGHT */}
        {hasRight && (
          <rect
            x="50"
            y="38"
            width="50"
            height="24"
            fill={`url(#pipeGradient-${index})`}
            rx="12"
          />
        )}

        {/* Center overlay to hide rounded corners at intersections */}
        {(hasUp || hasDown || hasLeft || hasRight) && (
          <rect
            x="38"
            y="38"
            width="24"
            height="24"
            fill={`url(#pipeGradient-${index})`}
          />
        )}

        {/* Inner highlight */}
        {hasUp && (
          <rect
            x="46"
            y="0"
            width="8"
            height="50"
            fill="rgba(134, 239, 172, 0.4)"
          />
        )}
        {hasDown && (
          <rect
            x="46"
            y="50"
            width="8"
            height="50"
            fill="rgba(134, 239, 172, 0.4)"
          />
        )}
        {hasLeft && (
          <rect
            x="0"
            y="46"
            width="50"
            height="8"
            fill="rgba(134, 239, 172, 0.4)"
          />
        )}
        {hasRight && (
          <rect
            x="50"
            y="46"
            width="50"
            height="8"
            fill="rgba(134, 239, 172, 0.4)"
          />
        )}
      </g>
    </svg>
  );
}
