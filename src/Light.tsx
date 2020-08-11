import * as React from "react"
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={158} height={137} viewBox="0 0 158 137" fill="none" {...props}>
      <Path
        d="M0 55.815L159 0v137L0 83.672V55.815z"
        fill="url(#prefix__paint0_radial)"
      />
      <Defs>
        <RadialGradient
          id="prefix__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(113.41974 -2.98462 4.31 163.7863 36.57 71.733)"
        >
          <Stop stopColor="#4680FF" stopOpacity={0.75} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
