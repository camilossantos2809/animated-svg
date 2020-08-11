import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={362} height={1024} viewBox="0 0 362 1024" {...props}>
      <Path
        fill="#4680ff"
        d="M68.686 299.806L52.68 470.087l149.335-170.281zM295.476 331.245L39.621 608.348 26.197 746.904l282.632-276.81zM322.222 608.635L13.099 884.571 0 1024l335.32-277.103zM348.705 884.864L137.968 1024h223.835zM300.965 234.607H61.124l-8.444 32.568h256.435zM244.822 42.497C234.179 17.335 209.699 0 181.171 0h-.099.005c-24.067.089-45.256 12.327-57.765 30.897l-.158.249C138 41.337 177.876 42.497 177.876 42.497H69.275l8.15 32.568h207.242l8.15-32.568z"
      />
    </Svg>
  )
}

export default SvgComponent
